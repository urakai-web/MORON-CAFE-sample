# 飲食店サイト テンプレート（3万円プラン）

React 19 + TypeScript + Tailwind CSS + Cloudflare Pages 構成の飲食店向けサイトテンプレートです。

---

## カスタマイズ手順

### 1. 店舗情報を入力
`src/data/store.ts` を開いて全項目を書き換えてください。

| 項目 | 内容 |
|------|------|
| `name` | 店舗名 |
| `nameEn` | 店舗名（英語表記） |
| `catchcopy` | ヒーローのキャッチコピー（\n で改行） |
| `description` | お店の説明文（\n で改行） |
| `address` | 住所 |
| `addressMapQuery` | Googleマップ検索クエリ |
| `phone` | 電話番号 |
| `businessHours` | 営業時間 |
| `closedDays` | 定休日 |
| `payment` | 支払い方法 |
| `sns` | 各SNSのURL |
| `news` | お知らせ（最大4件） |
| `menu` | メニュー（6件推奨） |
| `gallery` | ギャラリー（4件推奨） |

### 2. 画像を配置
以下のパスに画像ファイルを配置してください。

```
public/
  images/
    hero.png          ← ヒーローセクション背景
    about.png         ← 店舗外観写真
    menu/
      menu1.png       ← メニュー1
      menu2.png       ← メニュー2
      menu3.png       ← メニュー3
      menu4.png       ← メニュー4
      menu5.png       ← メニュー5
      menu6.png       ← メニュー6
    gallery/
      gallery1.png    ← 内観1
      gallery2.png    ← 内観2
      gallery3.png    ← 内観3
      gallery4.png    ← 内観4
```

画像を配置したら各コンポーネントのコメントアウトを解除してください：
- `src/components/Hero.tsx` … `<img src="/images/hero.png" ...>` の行
- `src/components/About.tsx` … `<img src="/images/about.png" ...>` の行
- `src/data/store.ts` … menu・gallery の `image` フィールドにパスを設定

### 3. Google マップを設定
`src/components/MapSection.tsx` の iframe src を実際の座標に変更してください。

```
https://maps.google.com/maps?q=緯度,経度&z=17&output=embed&hl=ja
```

### 4. Aboutセクションの見出し・統計を変更
`src/components/About.tsx` の上部にある定数を編集してください。

```ts
const ABOUT_HEADING = 'お店のキャッチフレーズ'
const ABOUT_STATS = [...]
```

### 5. テーマカラーを変更
`tailwind.config.js` の `primary` カラーを変更できます（デフォルト: 赤 #b91c1c）。

### 6. index.html を更新
`index.html` の `<title>` と `<meta name="description">` を実際の店舗情報に変更してください。

---

## 開発・デプロイ

```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build
```

### Cloudflare Pages デプロイ
1. GitHubにリポジトリを作成してプッシュ
2. Cloudflare Pages → Create → Pages → Connect to Git
3. Build command: `npm run build`
4. Build output directory: `dist`
