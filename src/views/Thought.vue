<template>
  <section class="main">
    <article class="post">
      <div class="container">
        <h1>First Meet with Programming</h1>
      </div>
      <div class="content">
        <div class="text">
          <p>僕がプログラミングと出会ったはvenectでのインターンがきっかけです。当初はマーケティングに興味があり、市場・競合調査、SNSやECサイト・Webサイト内でのユーザーの行動分析を行っていました。膨大なデータを収集するにあたり、初めは手作業でExcelに数値を打ち込む＆コピペ、、、みたいな作業をしていましたが、段々と「こんな単純作業はやってて面白くないな。人間がやるようなことじゃないな・・・」と感じ始め、独学でVBAを勉強し作業の効率化を行いました。勉強すればするほどプログラムに作業を任せられ、自分が楽できるようになったのでモチベーションは尽きることなく、気づけば社内の業務効率化のことばかり考えるようになってしまった・・・というのが始まりです笑笑</p>
        </div>
      </div>
    </article>
    <article class="post">
      <div class="container">
        <h1>Trigger of Programming</h1>
      </div>
      <div class="content">
        <div class="text">
          <p>当初のプログラミングのモチベーションは「自分が楽できるから！！」というなんとも自己中なものでした。自分のためだけにツールを作っていましたが、そんな僕にもある日気づいたことがあって、それは「案外、他の人も自分と同じように単純作業を面倒くさく感じているんだな。」ということです。自分一人だけではなく、他の人が抱える課題もプログラミングで解決できることに気づきました。この気づきは本当に大きかったです。自分一人のためだけにやるよりも、もっと多くの人たちのために頑張るほうがモチベーションも上がりましたし、やりがいも大きかったです。</p>
        </div>
      </div>
    </article>
    <article class="post">
      <div class="container">
        <h1>I wish to do...</h1>
      </div>
      <div class="content">
        <div class="text">
          <p>特定の技術や分野に固執することなく、好奇心を持って色々な言語やスキルを学んでいきたい。</p>
        </div>
      </div>
    </article>
    <article class="post">
      <div class="container">
        <h1>I wish to be...</h1>
      </div>
      <div class="content">
        <div class="text">
          <p>「人生の"生きがい""やりがい"を増やす機会を提供し続ける」こと。あらゆる人々が、その時どきの人生の生きがい・やりがいを見つけられるような機会を、プログラミングを通じて提供し続けたい。</p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
</script>

<style>
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