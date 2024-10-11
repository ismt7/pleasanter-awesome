# チートシート(スクリプト)

## 入力項目の操作

### 入力項目に値を設定

```javascript
$p.set($p.getControl("項目名"), 値);
```
- `項目名`: 入力項目のID(`NumA〜Z`や`DateA〜Z`など)
- `値`: 設定したい値

**公式ドキュメント**

- [開発者向け機能：スクリプト：$p.set](https://pleasanter.org/ja/manual/script-set)
- [開発者向け機能：スクリプト：$p.getControl](https://pleasanter.org/ja/manual/script-get-control)

**ユースケース**

<details><summary>状況を完了に更新</summary>

```javascript
$p.set($p.getControl("Status"), 900);
```

</details>

### 入力項目の値を取得

```javascript
$p.getControl(項目名).val();
```

- `項目名`: 入力項目のID(`NumA〜Z`や`DateA〜Z`など)

**公式ドキュメント**

- [開発者向け機能：スクリプト：$p.getControl](https://pleasanter.org/ja/manual/script-get-control)

## 他サイトからデータを取得

### 他サイトからデータを取得(フィルターなし)

```javascript
const doneHandler = (data) => {
  console.log(data);
};

const failHandler = (e) => {
  console.log(e);
};

$p.apiGet({
  id: サイトID,
  done: doneHandler,
  fail: failHandler
});
```

- `サイトID`: 取得したいデータのサイトID

**公式ドキュメント**

- [開発者向け機能：スクリプト：$p.apiGet](https://pleasanter.org/ja/manual/script-api-get)

### 他サイトからデータを取得(フィルター条件あり)

```javascript
const data = {
  View: {
    ColumnFilterHash:{
      Title: タイトルの値,
      DateA: dateA,
      NumA: () => $p.getControl(...).val(),
      ...
    }
  },
  TableType: 'Normal'
};

const doneHandler = (data) => {
  console.log(data);
};

const failHandler = (e) => {
  console.log(e);
};

$p.apiGet({
  id: サイトID,
  data,
  done: doneHandler,
  fail: failHandler
});
```

- `サイトID`: 取得したいデータのサイトID
- `Title`: 固定値を渡す例
- `DataA`: 変数を渡す例
- `NumA`: 関数の実行結果で渡す例

**公式ドキュメント**

- [開発者向け機能：スクリプト：$p.apiGet](https://pleasanter.org/ja/manual/script-api-get)
- [開発者向け機能：スクリプト：$p.getControl](https://pleasanter.org/ja/manual/script-get-control)
- [開発者向け機能：JSONデータレイアウト：View](https://pleasanter.org/ja/manual/api-view)

## イベント処理

### キーを押し下げた時のイベント

```javascript
$p.on("keydown", 監視項目, () => {
  イベント発火時の処理
});
```

- `監視項目`: イベントを定義したい入力項目を指定
- `イベント発火時の処理`: イベント発火時に処理したい内容

**公式ドキュメント**

- [開発者向け機能：スクリプト：$p.on](https://pleasanter.org/ja/manual/script-on)
