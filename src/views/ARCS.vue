<template>
  <div>
    <section class="logo">
      <a href="https://arcs-at-cosme.herokuapp.com/" target="blank"><p><img src="../assets/ARCS_normal_cosme.png" class="logo"></p></a>
    </section>
    <section class="disc">
      <article class="post">
        <div class="container">
          <h1>Discription</h1>
        </div>
        <div class="content">
          <div class="text">
            <p>Automatically Reviews Collecting System、通称"ARCS"は、ECサイト（@cosme）のカスタマーレビューを自動収集するアプリケーションです。商品URLと取得レビュー数を入力すると、対象レビューが.xlsx形式でDLできます。</p>
            <p>完成版は社内サーバーにて運用しているため、herokuにあげているものはプロトタイプになります。取得可能レビュー数は最大5件までです。</p>
          </div>
        </div>
      </article>
      <article class="post">
        <div class="container">
          <h1>Episode</h1>
        </div>
        <div class="content">
          <div class="text">
            <p>従来、ECサイトのカスタマーレビューはすべて手作業で収集していましたが、ARCSにより収集が完全自動で行えるようになりました。ちなみに、ロゴはARCSの理念「自動化」をテーマに"一筆書き"をイメージしたデザインになっています。</p>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
</script>

<style>
  .logo {
    margin: 0 auto;
    padding-top: 2rem;
    width: 20rem;
  }

  .post .container {
    max-width: 800px;
    max-width: var(--middle-width);
    margin-left: auto;
    margin-right: auto;
    padding: 30px 10px;
  }

  .post h1 {
    padding-left: 0.5rem;
    margin-bottom: 0;
    border-left: solid 0.75rem #BF6A7A;
    border-left: solid 0.75rem var(--accent-color);
    font-size: 1rem;
  }

  .post .text {
    padding-top: 20px;
    padding-bottom: 20px;
    margin:0 auto;
    max-width: 20rem
  }
  
  .post .content {
    background-color: #f5f5f5;
    text-align: center;
  }

  .post .text p {
    color: #696969;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    line-height: 1.5em;
    font-family: "M PLUS Rounded 1c";
    margin-bottom: 0;
    margin-top: 0;
  }

  @media screen and (min-width:768px){
    .post h1 {
      font-size: 1.5rem;
    }
    .post .text {
      max-width: 40rem
    }
    .post .text p {
      font-size: 1rem;
    }
  }

  @media screen and (min-width:990px){
    .post .text {
      max-width: 60rem
    }
    .post .text p {
      font-size: 1rem;
    }
  }
</style>