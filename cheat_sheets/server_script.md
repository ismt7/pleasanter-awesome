# チートシート(サーバスクリプト)

## 目次

- [他サイトからデータを取得する](#他サイトからデータを取得する)

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
