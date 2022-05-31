---
title: Learn with you
stack: Vue,TypeScript,tailwind,laravel,Docker,Docker-compose,nginx,EB,RDS,Route53,github action
slug: learn-with-you
date: 2021-01-01T00:00:00+00:00
url: https://learn-with-you.com
thumb: ../images/thumbs/lwu.png
featuredImg: ../images/featured/lwu-banner.png
---

**サーバー料金削減のため、このアプリは現在 8:30 ～ 20:30 のみ稼働しております。**
**ご了承のほどを宜しくお願いします。**

初めてネット上にデプロイした自作アプリです。<br>
[Anki](https://apps.ankiweb.net/)のような単語帳アプリを、皆が例文を投稿できる Web アプリにしたら面白いのではないか、という構想から生まれたものです。各カードと学習中のユーザを紐づけ、[忘却曲線](https://ja.wikipedia.org/wiki/%E5%BF%98%E5%8D%B4%E6%9B%B2%E7%B7%9A)に沿ったスパンで問題が出るように工夫しているのですが、これも Anki を手本にしています。<br><br>
このアプリは（Web は実務未経験なりに）自分の技術レベルをアピールするため、<br>
**「可能な限りチャレンジする」**<br>
ことをテーマに作成しました。使用したスキルスタックは以下の通りです。<br><br>

- フロントエンドは Vue.js による完全 SPA。言語は TypeScript を採用。スタイリングは Tailwind.css を用いて、vue-testing-utils によるテスト駆動で開発する。
- バックエンドは Laravel による API。こちらもテスト駆動開発を採用。
- インフラには Docker-compose を採用。フロントエンド、バックエンドともに nginx で動かす。
- デプロイ先は AWS の Elastic beanstalk。データベースには RDS を使い、Route53 で独自ドメインを取得。
- github action でデプロイ作業を自動化。継続的な開発とデプロイ（CI/CD）の実現

<br>これだけスキルスタックが充実していれば、「可能な限りチャレンジする」というテーマにはきちんと沿ったものになったのかな、という自己評価です。<br>
しかしスキルスタックを充実させることを優先した結果、デプロイまでに 9 か月もかかってしまいました。また CSS アニメーションを多く盛り込んだ結果、もっさりとしたデザインになってしまったのも事実。何より<b>「スキルのアピール」が目的化しすぎて、「何のためのアプリ」かが分かりづらくなってしまった</b>のは否めません。<br><br>
良くも悪くも多くの教訓と知見を得た開発経験でした。
