# チートシート(サーバスクリプト)

[開発者向け機能：サーバスクリプト](https://pleasanter.org/ja/manual/server-script)

## 目次

- [例外処理](#例外処理)
- [他サイトからデータを取得する](#他サイトからデータを取得する)
- [HTTPリクエスト](#httpリクエスト)
  - [Slack](#slack)

## 例外処理

Pleasanterでは、サーバサイドスクリプトで例外が発生すると、500エラーが発生してしまい、JavaScriptのどこでエラーが発生したのかが分かりにくい。そのため、スクリプト内で例外が発生した場合は、例外をキャッチしてエラーメッセージをログに出力すると良い。

```javascript
try {
  // ここにスクリプトを記述
} catch (e) {
  context.Log(e.stack);
}
```

## 他サイトからデータを取得する

```javascript
const result = items.Get(サイトID);
```

**公式ドキュメント**

- [開発者向け機能：サーバスクリプト：items.Get](https://pleasanter.org/ja/manual/server-script-items-get)

```javascript
const data = {
  "View": {
    "ColumnFilterHash": {
      "Status": "[\"900\"]"
    }
  }
};

const result = items.Get(サイトID, JSON.stringify(data));
```

## HTTPリクエスト

### Slack

```javascript
const webhookUrl = "https://hooks.slack.com/xxxxxx";
const data = {
  username: "Pleasanter",
  text: "テストメッセージです",
};

httpClient.RequestUri = webhookUrl;
httpClient.Content = JSON.stringify(data);

const response = httpClient.Post();
if(httpClient.IsSuccess) {
  context.Log('Success: ' + response);
}else{
  context.Log('Error: (' + httpClient.StatusCode + ')' + response);
}
```
