# チートシート(サーバスクリプト)

## 目次

- [例外処理](#例外処理)
- [他サイトからデータを取得する](#他サイトからデータを取得する)

## 例外処理

スクリプト全体におまじないのように記述しておくと、例外が発生したときに詳細なエラーメッセージが表示される。

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

