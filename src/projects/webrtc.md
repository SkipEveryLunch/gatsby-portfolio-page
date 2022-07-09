---
title: WebRTC+FireBaseの/ZOOMクローンアプリ
stack: React, WebRTC, FireBase
slug: react-webrtc-firebase
date: 2021-01-01T00:00:00+00:00
thumb: ../images/thumbs/WebRTC.png
url: https://webrtc-react-firebase-3d2d6.web.app
featuredImg: ../images/featured/WebRTC.png
importance: 2
---

説明：Udemy の下記の講座で作ったシンプルなビデオチャットアプリ。
　　　シグナリングサーバとして FireBase を使用し、
　　　 WebRTC を用いて P2P 接続を実現している。
　　　フロントエンドの実装には React と Material-UI を使用している。

[React と Firebase と WebRTC で P2P ビデオ会議システムを開発しよう！](https://www.udemy.com/course/webrtc-react-firebase/)

[GitHub の リポジトリはこちら](https://github.com/SkipEveryLunch/webrtc-react-firebase)

開発した目的：WebRTC を用いた P2P 通信に関する知見の獲得
　　　　　　　　 FireBase の基礎の習得
　　　　　　　　しばらく使っていなかった Material-UI の復習

用途や機能：
　　・自分の名前の入力
　　・会話相手の名前の入力
　　・双方の名前が合致したときに P2P 通信によるビデオチャットを開始
　　・音声のミュート
　　・音声の波形を表示

開発言語・DB・インフラ：
　　・React(CSS フレームワークとして Material-UI)
　　・シグナリングサーバとして FireBase
　　・FireBase 上にデプロイ

開発しての感想：WebRTC の API を使えば、比較的シンプルな実装で
　　　　　　　　　ビデオチャットを実装できることに驚いた。
　　　　　　　　　また、通信に必要な各情報・メソッドを一つのオブジェクトに
　　　　　　　　　まとめることで、高凝縮な設計を実現できた。

半面、FireBase の API については分からない部分も多く、
　　　　　　　　　習得のためにはさらなる学習が必要だと感じられた。
