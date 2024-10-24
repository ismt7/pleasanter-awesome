# サーバースクリプト ライブラリ

## 目次

- [日付をYYYY/MM/DD形式に変換する - formatDisplayDate()](#日付をyyyymmdd形式に変換する---formatdisplaydate)
- [すべてのコンテキストをログに出力する - allContexts()](#すべてのコンテキストをログに出力する---allcontexts)
- [Slackにメッセージを送信する - sendSlack()](#slackにメッセージを送信する---sendslack)
- [items.Get()で取得したデータ(Object)を配列に変換する - convertItemsDataToArray()](#itemsgetで取得したデータobjectを配列に変換する---convertitemsdatatoarray)


## 日付をYYYY/MM/DD形式に変換する - formatDisplayDate()

日付をYYYY/MM/DD形式に変換します。

**使用例1**

```javascript
$v.formatDisplayDate(items.DateA);
```

## すべてのコンテキストをログに出力する - allContexts()

すべてのコンテキストをログに出力します。一部のコンテキストは、ログに出力されない場合があります。

**使用例1**

```javascript
$v.allContexts();
```

## Slackにメッセージを送信する - sendSlack()

Slackにメッセージを送信します。

**パラメーター**

| パラメーター名 | 説明 |
| --- | --- |
| webHookUrl | SlackのWebhook URL |
| channel | チャンネル名 |
| username | ユーザー名 |
| message | メッセージ |

**使用例1**

```javascript
const webHookUrl = "https://hooks.slack.com/...";
const channel = "#general";
const username = "Pleasanter";
const message = "Hello, Slack!";

$v.sendSlack(webHookUrl, channel, username, message);
```

## items.Get()で取得したデータ(Object)を配列に変換する - convertItemsDataToArray()

items.Get()で取得したデータ(Object)を配列に変換します。配列に変換することで、map()やforEach()などの配列メソッドを使用できます。

**使用例1**

```javascript
const data = items.Get(サイトID);
const array = $v.convertItemsDataToArray(data);
```
