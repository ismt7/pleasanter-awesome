# チートシート(スクリプト)

[開発者向け機能：スクリプト](https://pleasanter.org/ja/manual/script)

## 目次

- [入力項目の操作](#入力項目の操作)
  - [入力項目に値を設定](#入力項目に値を設定)
  - [入力項目の値を取得](#入力項目の値を取得)
- [他サイトからデータを取得](#他サイトからデータを取得)
  - [他サイトからデータを取得(フィルターなし)](#他サイトからデータを取得フィルターなし)
  - [他サイトからデータを取得(フィルター条件あり)](#他サイトからデータを取得フィルター条件あり)
- [イベント処理](#イベント処理)
  - [キーを押し下げた時のイベント](#キーを押し下げた時のイベント)
  - [変更時のイベント](#変更時のイベント)
  - [ページを完全に読み込んだ時のイベント](#ページを完全に読み込んだ時のイベント)
- [日付操作(Day.js編)](#日付操作dayjs編)
  - [ライブラリの読み込み](#ライブラリの読み込み)
  - [ローカライズ](#ローカライズ)
- [メッセージ](#メッセージ)
  - [成功](#成功)
  - [警告](#警告)
  - [エラー](#エラー)
  - [クリア](#クリア)


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

**公式ドキュメント**

- [開発者向け機能：スクリプト：$p.on](https://pleasanter.org/ja/manual/script-on)

### キーを押し下げた時のイベント

```javascript
$p.on("keydown", "監視項目", () => {
  // イベント発火時の処理
});
```

- `監視項目`: イベントを定義したい入力項目を指定
- `イベント発火時の処理`: イベント発火時に処理したい内容

### 変更時のイベント

```javascript
$p.on("change", "ClassA", () => {
  // イベント発火時の処理
});
```

- `監視項目`: イベントを定義したい入力項目を指定
- `イベント発火時の処理`: イベント発火時に処理したい内容

### ページを完全に読み込んだ時のイベント

```javascript
window.addEventListener("load", (event) => {
  // イベント発火時の処理
});
```

## 日付操作(Day.js編)

### ライブラリの読み込み

`管理 > テーブルの管理 > HTML`を開き次のスクリプトを追加します。

| 項目名 | 値 | 備考 |
| -- | -- | -- |
| タイトル | `Day.js` | 名称は任意 |
| 挿入位置 | `Header top` |
| HTML | (後述の内容) |
| 出力先 | `新規作成`、`編集` | 選択箇所は任意 |

HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/locale/ja.js"></script>
```

**公式ドキュメント**

- [Day.js](https://day.js.org/docs/en/installation/installation)

### ローカライズ

日本語ローカライズを設定する場合は、次のスクリプトを追加します。

```javascript
dayjs.locale('ja');
```

**公式ドキュメント**

- [Changing locale globally - Day.js](https://day.js.org/docs/en/i18n/changing-locale)

## メッセージ

[開発者向け機能：スクリプト：$p.setMessage](https://pleasanter.org/ja/manual/script-set-message)

### 成功

```javascript
$p.setMessage("#Message", JSON.stringify({
  Css: "alert-success",
  Text: "メッセージ"
}));
```

### 警告

```javascript
$p.setMessage("#Message", JSON.stringify({
  Css: "alert-warning",
  Text: "メッセージ"
}));
```

### エラー

```javascript
$p.setMessage("#Message", JSON.stringify({
  Css: "alert-error",
  Text: "メッセージ"
}));
```

### クリア

[開発者向け機能：スクリプト：$p.clearMessage](https://pleasanter.org/ja/manual/script-clear-message)

```javascript
$p.clearMessage();
```
