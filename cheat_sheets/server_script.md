# チートシート(サーバスクリプト)

[開発者向け機能：サーバスクリプト](https://pleasanter.org/ja/manual/server-script)

## 目次

- [例外処理](#例外処理)
- [項目一覧](#項目一覧)
- [ログ出力](#ログ出力)
- [エラー出力](#エラー出力)
- [プロセス制御](#プロセス制御)
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

## 項目一覧

| 項目名 | 期限付きテーブル | 記録テーブル |
| -- | -- | -- |
| ID | `IssueId` | `ResultId` |
| 分類項目 | `ClassA` ~ `ClassZ` |
| 数値項目 | `NumA` ~ `NumZ` |
| 日付項目 | `DateA` ~ `DateZ` |
| 説明項目 | `DescriptionA` ~ `DescriptionZ` |

## ログ出力

```javascript 
context.Log("ログメッセージ");
```

## エラー出力

```javascript
context.Error("エラーメッセージ");
```

## プロセス制御

プロセスボタンごとにサーバスクリプト側で処理を分岐させる場合、ControlIdを使用する。

**if文**

```javascript
if(context.ControlId === "プロセスボタンID") {
  // ここに処理を記述
}
```

**switch文**

```javascript
switch(context.ControlId) {
  case "プロセスボタンID1":
    // ここに処理を記述
    break;
  case "プロセスボタンID2":
    // ここに処理を記述
    break;
  default:
    break;
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
