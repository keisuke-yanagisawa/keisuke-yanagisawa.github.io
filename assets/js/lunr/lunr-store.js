var store = [{
        "title": "因子分析と主成分分析",
        "excerpt":"因子分析と主成分分析は似通った手法のように見える。 しかし、実際には大きく異なる点がある。      因子分析：人間が「こういう組み合わせが共通因子として存在するのではないか」と考えて因子負荷量を決める            人間が考えながら因子を作り出すので、解釈性の高い結果を作りだせる。他人への説明が容易。           主成分分析：「データに基づいて共通因子（＝主成分）を探してみる」方法で、因子負荷量はデータから自動的に決まる            自動的に作成されるので、得られた因子負荷量から、その因子が何を意味しているのかを人間が検討する。新しい発見につながる可能性がある。           ようするに、目的が異なるのである。   参考文献     江崎貴裕『分析者のためのデータ解釈学入門　データの本質をとらえる技術』（ソシム、2020年）  ","categories": ["データサイエンス・機械学習"],
        "tags": ["因子分析","主成分分析","教師なし学習"],
        "url": "/202201/factor-analysis-and-principal-component-analysis/",
        "teaser": null
      },{
        "title": "内挿と外挿",
        "excerpt":"機械学習モデルを構築する上で、 本来データが存在するはずなのにサンプリングできていない（データを取得できていない）空間があると、 その部分の予測精度は落ちてしまう。これについて少し触れてみたい。 データの疎密と誤差の大小 とりあえず実験してみよう。ここでは、\\(x\\) が \\([-5,5]\\) の範囲における \\(\\cos x\\) を使ってモデルを構築し、 \\(x\\) が \\([-10,10]\\) の範囲の予測を行ってみている。 import numpy as np import matplotlib.pyplot as plt # データセット作成 train_X = np.arange(-5, 5, 0.2)[:, np.newaxis] train_y = np.cos(train_X[:,0]) test_X = np.arange(-10, 10, 0.2)[:, np.newaxis] test_y = np.cos(test_X[:,0]) # 予測モデルの構築 from sklearn.svm import SVR svr...","categories": ["データサイエンス・機械学習"],
        "tags": ["教師あり学習","予測誤差"],
        "url": "/202202/interpolation_and_extrapolation/",
        "teaser": null
      },{
        "title": "共溶媒分子動力学 (MSMD) 法 EXPRORER",
        "excerpt":"2021年6月に論文に掲載された、EXPRORER (EXtendedPRObes set construction by REpresentative Retrieval) の話。 研究背景 共溶媒分子動力学 (mixed-solvent molecular dynamics; MSMD) 法は、 タンパク質を溶質、水分子と共溶媒分子を溶媒とした分子動力学 (molecular dynamics; MD) 法である。 共溶媒（プローブ分子）として、芳香環や疎水基、正負に帯電している分子などを用いることで、 水分子では観測できないタンパク質表面のホットスポットの発見や、 低分子結合部位の検出、低分子結合親和性の予測など、 薬剤開発の様々なステップで活用することが出来る。 既存の MSMD 手法である MixMD, SILCS, MDmix などは、結合親和性の評価精度改善に注力する一方、 どのような共溶媒を用いるか、のコンセンサスが取れていない。 また、分子構造は極めて多様であるが、その多様性に比べると余りにも少ないのが現状である。 研究成果 このような問題に対して、薬剤分子に頻出する部分構造を共溶媒として切り出し、 これに対するMSMDシミュレーションを行うことで、 「網羅的」な共溶媒セットの構築を行う EXPRORER を開発した1。 前述のように、この手法は「セットの構築」が主要な目的ではあるが、 他方、MSMDシミュレーションのためのシミュレーション空間の構築や MSMDシミュレーションの実施をフリーソフトウェアのみで完結する 仕組みをgithub上で公開している。 Keisuke Yanagisawa, Yoshitaka Moriwaki, Tohru Terada, Kentaro...","categories": ["研究成果"],
        "tags": ["共溶媒分子動力学法","分子動力学法"],
        "url": "/202202/exprorer/",
        "teaser": null
      }]
