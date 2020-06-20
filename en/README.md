## 個人用HPの為のコード

### serveとdeploy

`./serve` とすると、自動的に http://localhost:10000 にサービスを立ち上げる。ローカルで変更を確認したいときはこちら。

`./deploy` とすると、自動的にホームページを再生成した上で、github.ioを自動更新するcommit & pushを行う。変更を適用したいときはこちら。

### 変更場所の整理

#### ニュースを増やす
```
_i18n/ja/home_news.md
_i18n/en/home_news.md
```

