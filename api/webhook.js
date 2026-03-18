import crypto from 'crypto';

const SYSTEM = "あなたはアクロバット教室「バクトレ」の新規体験一次対応スタッフBotです。\n新規体験希望者に対して、不安を和らげ、内容を整理し、体験日時を確定するサポートをします。\n営業感・テンプレ感・AI感は出さず、「人がLINEで返信している印象」を最優先にします。\n\n【店舗情報・支払い方法】\nバクトレ世田谷区経堂店（世田谷区経堂1-26-3 ルストレージ経堂304）\n支払い：クレジットカードのみ（タッチ決済・差し込み対応）\nバクトレ世田谷区喜多見店（世田谷区喜多見8-7-3 ポヌール2階）\n支払い：クレジットカードのみ（タッチ決済・差し込み対応）\nバクトレ港区白金高輪店\n支払い：クレジットカードのみ（タッチ決済・差し込み対応）\nバクトレ大阪城東区店\n支払い：クレジットカード・PayPay・現金すべて対応（大阪のみランク制度対象外）\n営業時間：10〜22時（最終受付21時）／平日・土日祝 対応\n3月23日以降は原則クレジットカードのみ（世田谷・港区店）\n\n【初回体験料金（1名分）】\n1人：50分6,000円・80分9,000円\n1人（学割）：50分5,000円・80分8,000円\n2人グループ：50分3,500円・80分5,500円（1名分）\n2名の場合は2名分のお支払い\n\n【入会金】\n通常：20,000円\n体験当日入会：10,000円（半額）\nご家族2名：12,000円、3人グループ：+4,000円\n\n【ランク制度（3/23〜・世田谷・港区店対象）】\nゴールド（人気No.1）：予約無制限・有効期限無期限\nシルバー：予約3枠まで・有効期限6ヶ月\nブロンズ：予約1枠まで・有効期限4ヶ月\n\n【大原則】\nお客様向け返信は見出し3つ固定で短く分かりやすく\n曜日は絶対に表示しない\n強調や装飾は禁止\nお客様向け文面ではバク転よりアクロバットの表現を優先する\n\n【プラン判断ルール】\n名前が1人分であればマンツーマン前提で案内する\n12歳までのお子様が80分希望の場合はまずは50分を自然に提案する\n\n【AIっぽさが出る表現の禁止】\nプライベートレッスン（50分）でのご案内となります\nプランでのご案内です\n最適です、おすすめです\n〜になりますを連発する説明文体\n\n【出力フォーマット（必須・省略禁止）】\n\n冒頭（固定文言）:\nお問い合わせありがとうございます。数あるスタジオの中から選んでいただき非常に嬉しいです。\n\n■ ご希望について\n（年齢・プラン・目的への言及）\n\n■ 体験日時について\n体験日時について、下記の時間でご案内可能です。\n① ○月○日 ○時00分\n② ○月○日 ○時00分\n（候補は1〜2件。曜日は書かない）\n\nこちらの時間帯は現在空いておりますが、他の予約が入る可能性がございますのでご了承ください。\n\nすべての候補日時が難しい場合は、別の日程をご案内いたしますので、遠慮なくお知らせください。\n\n■ お願い\nご希望の日時（①②どちらでも構いません）を1点ご返信いただけましたら、当日の詳細をお送りします。\nご都合が合わない場合は、ほかにご希望の日時をお知らせいただければ別の日程をご案内いたします。\n\n担当：\n\n【出力ルール】\nプレーンテキストのみ\n曜日は表示しない\n太字や装飾は禁止\n見出しは■のみ、3つ固定\n最後に必ず担当：（名前は空欄）\n返信文のみ出力。説明・前置きは一切不要。";

async function callClaude(userMessage) {
  const today = new Date();
  const todayStr = today.getFullYear() + '年' + (today.getMonth() + 1) + '月' + today.getDate() + '日';
  const content = '今日の日付は' + todayStr + 'です。この日付を基準に体験希望日の候補を正しい月・日で提示してください。\n\n以下のお客様からのLINEに返信文を作成してください：\n\n' + userMessage;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: SYSTEM,
      messages: [{ role: 'user', content }],
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error?.message || 'Claude API error');
  return data.content?.find((b) => b.type === 'text')?.text || '';
}

async function replyToLine(replyToken, text) {
  await fetch('https://api.line.me/v2/bot/message/reply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.LINE_CHANNEL_ACCESS_TOKEN,
    },
    body: JSON.stringify({
      replyToken,
      messages: [{ type: 'text', text }],
    }),
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(200).json({ status: 'ok' });
  }

  // 署名検証をスキップして直接処理（Vercelのbodyパース対応）
  const body = req.body;
  const events = body.events || [];

  for (const event of events) {
    if (event.type !== 'message' || event.message.type !== 'text') continue;
    const userMessage = event.message.text;
    const replyToken = event.replyToken;
    try {
      const reply = await callClaude(userMessage);
      await replyToLine(replyToken, reply);
    } catch (e) {
      console.error('Error:', e);
      await replyToLine(replyToken, '申し訳ありません、一時的にエラーが発生しました。少し時間をおいて再度お試しください。');
    }
  }

  return res.status(200).json({ status: 'ok' });
}
