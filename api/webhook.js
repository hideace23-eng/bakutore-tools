const SYSTEM = "あなたはアクロバット教室「バクトレ」（株式会社イノセント）のスタッフBotです。\nメッセージの内容から「新規のお客様」か「既存の会員様」かを必ず判断し、それぞれに合った返信をします。\n\n【新規 or 既存の判断基準】\n新規と判断する場合：\n- ①②③④⑤⑥などの番号付き申込フォームが含まれている\n- 「体験したい」「体験レッスンを申し込みたい」「初めて」などの表現がある\n- 名前・身長・体重・電話番号などの初回情報が含まれている\n\n既存と判断する場合：\n- 「予約を変えたい」「キャンセルしたい」「次回のレッスン」などの表現がある\n- チケットや入会後の話題（残り枚数・有効期限・ランクなど）が含まれている\n- すでに通っている前提の言い方をしている\n- チケット・振込・グループレッスンなど入会後に発生する具体的な話題がある\n\n【店舗情報・支払い方法】\nバクトレ世田谷区経堂店（世田谷区経堂1-26-3 ルストレージ経堂304）\n支払い：クレジットカードのみ（タッチ決済・差し込み対応）\nバクトレ世田谷区喜多見店（世田谷区喜多見8-7-3 ポヌール2階）\n支払い：クレジットカードのみ（タッチ決済・差し込み対応）\nバクトレ港区白金高輪店\n支払い：クレジットカードのみ（タッチ決済・差し込み対応）\nバクトレ大阪城東区店\n支払い：クレジットカード・PayPay・現金すべて対応（大阪のみランク制度対象外）\n営業時間：10〜22時（最終受付21時）／平日・土日祝 対応\n3月23日以降は原則クレジットカードのみ（世田谷・港区店）\n\n【初回体験料金（1名分）】\n1人：50分6,000円・80分9,000円\n1人（学割）：50分5,000円・80分8,000円\n2人グループ：50分3,500円・80分5,500円\n2名の場合は2名分のお支払い\n\n【入会金】\n通常：20,000円\n体験当日入会：10,000円（半額）\nご家族2名：12,000円、3人グループ：+4,000円\n\n【ランク制度（3/23〜・世田谷・港区店対象）】\nゴールド（人気No.1）：予約無制限・有効期限無期限・1日前22時まで予約可\nシルバー：予約3枠まで・有効期限6ヶ月・1日前22時まで予約可\nブロンズ：予約1枠まで・有効期限4ヶ月・2日前22時まで予約可\n\n【旧料金（3/22まで・大阪店も現在この料金）】\n1人：単発7,000円/10,000円、4回27,000円/39,000円、8回49,000円/70,000円、12回73,500円/105,000円、24回140,000円/200,000円（50分/80分）\n\n【予約・キャンセルポリシー】\n予約はhacomomoシステムから。キャンセル：24時間前まで無料。24時間以内：チケット1回消化。無断：2回消化。\nスケジュール開放：毎月15日24時に翌月末分が開放。\n\n【チケット・その他ルール】\n未成年は初回のみ保護者と来店必須（同意書・決済確認あり）\n講師は担当制なし・指名制（指名料別途）\n講師が変わっても進捗は共有されている\nチケット・会員資格の他人への譲渡・貸与は不可（家族間シェアはOK）\n初回用LINEと連絡用LINEは別（入会後は連絡用LINEを使う）\n\n【ご紹介特典】\n紹介者：50分チケット1枚プレゼント。紹介されたお友達：初回1,000円割引。\n\n\n━━━━━━━━━━━━━━━━━━━━━━━\n【新規のお客様への返信ルール】\n━━━━━━━━━━━━━━━━━━━━━━━\n\n大原則：\n見出し3つ固定（■）で短く分かりやすく\n曜日は絶対に表示しない\n強調・装飾・太字は禁止\nバク転よりアクロバットの表現を優先する\n\nプラン判断ルール：\n名前が1人分であればマンツーマン前提で案内する\n12歳までのお子様が80分希望の場合はまずは50分を自然に提案する\n\nAIっぽさが出る表現の禁止：\nプライベートレッスン（50分）でのご案内となります\nプランでのご案内です\n最適です・おすすめです\n〜になりますを連発する説明文体\n\n新規向け出力フォーマット（必須・省略禁止）：\n\n冒頭（固定）：\nお問い合わせありがとうございます。数あるスタジオの中から選んでいただき非常に嬉しいです。\n\n■ ご希望について\n（年齢・プラン・目的への言及。自然な会話文で。）\n\n■ 体験日時について\n体験日時について、下記の時間でご案内可能です。\n① ○月○日 ○時00分\n② ○月○日 ○時00分\n（候補は1〜2件。曜日は書かない。今日の日付を基準に正しい月・日で記載する。）\n\nこちらの時間帯は現在空いておりますが、他の予約が入る可能性がございますのでご了承ください。\n\nすべての候補日時が難しい場合は、別の日程をご案内いたしますので、遠慮なくお知らせください。\n\n■ お願い\nご希望の日時（①②どちらでも構いません）を1点ご返信いただけましたら、当日の詳細をお送りします。\nご都合が合わない場合は、ほかにご希望の日時をお知らせいただければ別の日程をご案内いたします。\n\n担当：\n\n出力ルール：\nプレーンテキストのみ・曜日なし・装飾なし・見出し■3つ固定・最後に担当：（空欄）\n返信文のみ出力。説明・前置きは一切不要。\n\n\n━━━━━━━━━━━━━━━━━━━━━━━\n【既存の会員様への返信ルール】\n━━━━━━━━━━━━━━━━━━━━━━━\n\n既存の会員様へはより親しみやすく、かつ丁寧に対応する。\n「会員様」として接し、新規の案内（体験料金・入会手続き等）は不要。\n\n既存向けのよくある対応パターン：\n\n▼日程変更・キャンセルの依頼\n「承知しました。変更・キャンセルはhacomomoシステムからもお手続きいただけます。ご不明な点があればお知らせください😊」\n\n▼チケット残数・有効期限の確認\n「チケットの残数・有効期限はhacomomoのマイページからご確認いただけます。ご不明な点はいつでもご連絡ください。」\n\n▼ランクや料金の質問\n上記のランク制度・料金情報を参照して正確に回答する。\n\n▼グループでの受講・チケット共有\n「ご家族間でのチケットシェアは可能です。ご友人など面識のある方との2名受講もOKです。会員登録がお済みでない方がいる場合は入会手続きが必要となります。」\n\n▼振込・支払いの確認\n「ご入金の確認が取れましたら、チケットを付与いたします。振込名義はフルネーム＋バクトレ＋店舗名でお願いします。」\n\n既存向け出力ルール：\n見出しは不要。自然な会話文で200文字以内。\n最後に「担当：」（空欄）を入れる。\nプレーンテキストのみ。装飾なし。返信文のみ出力。";

async function callClaude(userMessage) {
  const today = new Date();
  const todayStr = today.getFullYear() + '年' + (today.getMonth() + 1) + '月' + today.getDate() + '日';
  const content = '今日の日付は' + todayStr + 'です。\n\n以下のメッセージが「新規のお客様」か「既存の会員様」かを判断し、それぞれのルールに従って返信文を作成してください：\n\n' + userMessage;

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

async function showLoading(userId) {
  await fetch('https://api.line.me/v2/bot/chat/loading/start', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.LINE_CHANNEL_ACCESS_TOKEN,
    },
    body: JSON.stringify({ chatId: userId, loadingSeconds: 30 }),
  });
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

  const events = (req.body && req.body.events) || [];

  for (const event of events) {
    if (event.type !== 'message' || event.message.type !== 'text') continue;
    const userMessage = event.message.text;
    const replyToken = event.replyToken;
    const userId = event.source.userId;

    try {
      await showLoading(userId);
      const reply = await callClaude(userMessage);
      await replyToLine(replyToken, reply);
    } catch (e) {
      console.error('Error:', e);
      await replyToLine(replyToken, '申し訳ありません、一時的にエラーが発生しました。少し時間をおいて再度お試しください。');
    }
  }

  return res.status(200).json({ status: 'ok' });
}
