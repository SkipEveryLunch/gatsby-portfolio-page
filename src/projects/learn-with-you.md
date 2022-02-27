---
title: Learn with you
stack: Vue.js,TypeScript,vue-testing-library,tailwind.css,laravel,Docker,Docker-compose,nginx,elastic beanstalk,RDS,Route53,github action
slug: learn-with-you
date: 2021-01-01T00:00:00+00:00
url: learn-with-you.com
thumb: ../images/thumbs/lwu.png
featuredImg: ../images/featured/lwu-banner.png
---

初めてネット上にデプロイした自作アプリです。
[Anki](https://apps.ankiweb.net/)のような単語帳アプリを、皆が例文を投稿できるWebアプリにしたら面白いのではないか、という構想から生まれたものです。各カードと学習中のユーザを紐づけ、[忘却曲線](https://ja.wikipedia.org/wiki/%E5%BF%98%E5%8D%B4%E6%9B%B2%E7%B7%9A)に沿ったスパンで問題が出るように工夫しているのですが、これもAnkiを手本にしています。
このアプリは（Webは実務未経験なりに）自分の技術レベルをアピールするため、「可能な限りチャレンジする」ことをテーマに作成しました。使用したスキルスタックは以下の通りです。

- フロントエンドはVue.jsによる完全SPA。言語はTypeScriptを採用。スタイリングはTailwind.cssを用いて、vue-testing-utilsによるテスト駆動で開発する。

- バックエンドはLaravelによるAPI。こちらもテスト駆動開発を採用。

- インフラにはDocker-composeを採用。フロントエンド、バックエンドともにnginxで動かす。

- デプロイ先はAWSのElastic beanstalk。データベースにはRDSを使い、Route53で独自ドメインを取得。

- github actionでデプロイ作業を自動化。継続的な開発とデプロイ（CI/CD）の実現

これだけスキルスタックが充実していれば、「可能な限りチャレンジする」というテーマにはきちんと沿ったものになったのかな、という自己評価です。
しかしスキルスタックを充実させることを優先した結果、デプロイまでに9か月もかかってしまいました。またCSSアニメーションを多く盛り込んだ結果、全体としてもっさりとしたデザインになってしまったのも事実。