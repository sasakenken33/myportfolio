<template>
  <div>
    <section class="logo">
      <a href="https://meiseki.herokuapp.com/" target="blank"><p><img src="../assets/Meiseki.png" class="logo"></p></a>
    </section>
    <section class="disc">
      <article class="post">
        <div class="container">
          <h1>Discription</h1>
        </div>
        <div class="content">
          <div class="text">
            <p>MEISEKI(inspired from "明晰")は入力で受け取った日本語文章に含まれる、「名詞」「形容詞」の出現回数をカウントすることができます。</p>
          </div>
        </div>
      </article>
      <article class="post">
        <div class="container">
          <h1>Episode</h1>
        </div>
        <div class="content">
          <div class="text">
            <p>文学研究に用いられるデータというものは専ら「定性的」なものだと思います。例えば、文中の表現であったり著者の文化的背景、作品当時の時代背景などです。しかし、見方によっては作品内に点在するデータを「定量的」なものと考えることもできると僕は思い、「語句の出現回数を作品解釈に利用できるのではないか」という仮説のものMEISEKIを作りました。現在仮説検証中です笑ちなみに、ロゴは"明晰さ"をイメージした"メガネ"がモチーフになっています。</p>
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