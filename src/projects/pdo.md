---
title: Laravelなし！/PDOでシンプルなAPI
stack: PHP,Heroku, React
slug: pdo-todo-list
date: 2021-01-01T00:00:00+00:00
thumb: ../images/thumbs/PDO.png
url: https://pdo-todo-spa.herokuapp.com/login
featuredImg: ../images/featured/PDO.png
importance: 4
---

説明：Udemy の下記の講座で作った todo リストの API に、
　　　 React で構築した簡素な SPA を加え、
　　　 heroku にデプロイしたもの

[APIs in PHP: from Basic to Advanced](https://www.udemy.com/course/php-apis/)

[GitHub の リポジトリ(フロント)](https://github.com/SkipEveryLunch/pdo-todolist-front)
[GitHub の リポジトリ(API)](https://github.com/SkipEveryLunch/php-todo-api)

開発した目的：Laravel を用いず、素の PHP のみで API を構築することで、
　　　　　　　　 Eloquent が隠蔽しているデータベースの操作や、
　　　　　　　　 Sanctum が隠蔽している認証/承認のフローに対する知見を得ること

用途や機能：
　　・ユーザーの登録
　　・ユーザーのログイン
　　・リストへの todo の追加
　　・ログインしているユーザーが追加した todo の閲覧
　　・todo の「完了」およびリストからの削除

開発言語・DB・インフラ：
　　・フロントエンドは React(CSS フレームワークとして Tailwind.css)
　　・バックエンドは PHP
　　・Heroku 上にデプロイ

開発しての感想：SPA と API を通信させるため、
　　　　　　　　　いわゆる Cors 問題を解決するのが難しかった。
　　　　　　　　　また、いわゆる preflight request を知らなかったため、
　　　　　　　　　 OPTION メソッドへの対応方法を知れたのは良い事だった。

また、Heroku へのデプロイ時に、
　　　　　　　　　 header("Access-Control-Allow-Origin: \*")を設定しておくと、
　　　　　　　　　 json 形式の body が header として解釈される不思議なバグが発生。

Stackoverflow などを見ても報告の見当たらないバグなので、
　　　　　　　　　この知見を得ることができたのはとてもよかった。
