<template>
  <div>
    <section class="logo">
      <a href="https://v-research-database.herokuapp.com/"><p><img src="../assets/VRD.png" class="logo"></p></a>
    </section>
    <section class="disc">
      <article class="post">
        <div class="container">
          <h1>Discription</h1>
        </div>
        <div class="content">
          <div class="text">
            <p>Venect-Research-Database、通称"VRD"は社内インターン生向けリサーチソース管理アプリケーションです。リサーチで収集した各種ソースをタグ付きで一括管理＆検索することが出来ます。管理者アカウントは複数のアカウントを作成することが可能です。</p>
          </div>
        </div>
      </article>
      <article class="post">
        <div class="container">
          <h1>Episode</h1>
        </div>
        <div class="content">
          <div class="text">
            <p>従来、インターンのリサーチ業務は各個人で行っていたため業務が属人化していました。VRDの導入によりインターン間のソース共有・管理が容易になり、効率的・効果的なリサーチが行えるようになりました。</p>
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