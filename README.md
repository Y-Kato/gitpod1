# gitpod + phaser3

Gitpodを使用してPhaser 3で簡単なアプリを作成し、ブラウザで動作を確認する手順を以下に示します。

### 1. Gitpodワークスペースの準備

1.1. GitHubに新しいリポジトリを作成します。
1.2. 作成したリポジトリのURLの前に`https://gitpod.io/#`を付けて、ブラウザでアクセスします。例: `https://gitpod.io/#https://github.com/your-username/your-repository`
1.3. Gitpodワークスペースが開くのを待ちます。

### 2. Phaser 3のセットアップ

2.1. 新しいnpmプロジェクトを初期化します：

```bash
npm init -y
```

2.2. Phaser 3をインストールします：

```bash
npm install phaser
```

### 3. ゲームの基本コードを作成

3.1. `index.html` ファイルを作成し、以下の内容を追加します：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Phaser 3 Game in Gitpod</title>
    <script src="node_modules/phaser/dist/phaser.min.js"></script>
</head>
<body>
    <script src="game.js"></script>
</body>
</html>
```

3.2. `game.js` ファイルを作成し、以下の基本的なゲームのコードを追加します：

```javascript
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('star', 'https://labs.phaser.io/assets/sprites/star.png');
}

function create() {
    this.add.text(400, 300, 'Hello Phaser!', { fontSize: '32px', color: '#ffffff' }).setOrigin(0.5);
    this.add.image(400, 400, 'star');
}

function update() {
}
```

### 4. ゲームの動作確認

4.1. 以下のコマンドを使用して、ローカルサーバを起動します：

```bash
npx http-server
```

4.2. Gitpodが自動的に検出して公開ポートの通知を表示します。通知の「プレビュー」または「ブラウザで開く」をクリックして、ゲームの動作を確認します。

以上で、Gitpod上でPhaser 3を使用して簡単なゲームを作成し、ブラウザでその動作を確認することができます。