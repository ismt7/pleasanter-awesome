# チートシート(スクリプト)

## 入力項目に値を設定

```javascript
$p.set($p.getControl(項目名), 値);
```
- `項目名`: 入力項目のID(`NumA〜Z`や`DateA〜Z`など)
- `値`: 設定したい値

**公式ドキュメント**

- [開発者向け機能：スクリプト：$p.set](https://pleasanter.org/ja/manual/script-set)
- [開発者向け機能：スクリプト：$p.getControl](https://pleasanter.org/ja/manual/script-get-control)

## 入力項目の値を取得

```javascript
$p.getControl(項目名).val();
```

- `項目名`: 入力項目のID(`NumA〜Z`や`DateA〜Z`など)

**公式ドキュメント**

- [開発者向け機能：スクリプト：$p.getControl](https://pleasanter.org/ja/manual/script-get-control)

## 他サイトから値を取得(フィルタなし)

```javascript
$p.apiGet({
  id: サイトID,
  done: (data) => { ... },
  fail: (e) => { ... }
});
```

**公式ドキュメント**

- [開発者向け機能：スクリプト：$p.apiGet](https://pleasanter.org/ja/manual/script-api-get)
