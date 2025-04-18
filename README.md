# 工程指図アプリケーション

## 概要
生地の加工工程を管理するためのWebアプリケーションです。
生地の詳細情報から、裁断、縫製、加工、プレスまでの一連の工程を管理できます。

## 主な機能
- 生地内容の管理と詳細表示
- 裁断グループの追加・編集
- 縫製グループの追加・編集
- 加工グループの追加・編集
- プレスグループの管理
- 各グループの本数管理
- 工程ごとの詳細な指示入力

## 技術スタック
- Next.js 15.3.0
- React
- TypeScript
- Tailwind CSS

## ローカル環境での実行方法

### 前提条件
- Node.js
- npm または yarn

### セットアップ手順
1. リポジトリのクローン
```bash
git clone https://github.com/patternstorage-imai/OA.git
cd OA
```

2. 依存関係のインストール
```bash
npm install
# または
yarn install
```

3. 開発サーバーの起動
```bash
npm run dev
# または
yarn dev
```

4. アプリケーションへのアクセス
- ローカル環境: [http://localhost:3000](http://localhost:3000)
- ネットワーク内: [http://192.168.3.32:3000](http://192.168.3.32:3000)

## デプロイについて
現在、Vercelへのデプロイ設定が完了していない状態です。
本番環境でアプリケーションを利用するためには、以下のいずれかの対応が必要です：

1. Vercelダッシュボードでの手動デプロイ設定
   - GitHubリポジトリとVercelプロジェクトの連携
   - デプロイ設定の構成

2. プロジェクト所有者によるVercelとGitHubの連携設定
   - Vercelアカウントの作成
   - GitHubリポジトリの連携設定
   - 自動デプロイの設定

## 開発ステータス
- [x] 基本的なUI実装
- [x] 生地内容の管理機能
- [x] 各工程グループの追加・編集機能
- [x] モーダルでの詳細編集機能
- [ ] Vercelデプロイの設定
- [ ] ユーザー認証の実装
- [ ] データの永続化

## 注意事項
- 現在はフロントエンドの実装のみで、バックエンドとの連携は未実装です
- データは一時的なものとして扱われ、ページのリロードで初期状態に戻ります
