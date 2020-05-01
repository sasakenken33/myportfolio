<template>
  <div>
    <section class="intro">
      <div class="container">
        <h1>I AM...</h1>
        <h2>Ken Sasaki / 1998 / 10 / 19</h2>
        <a href="https://twitter.com/sasakenken33" target="_blank"><span class="fab fa-twitter icon"></span></a>
        <a href="https://github.com/sasakenken33" target="_blank"><span class="fab fa-github icon"></span></a>
        <h3>Department of English Literature / Hosei University</h3>
      </div>
    </section>
    <section class="history"> 
      <div class="container">
        <div class="text">
          <h2>Profile</h2>
          <table>
            <tr>
              <th>Born in</th>
              <td>京都</td>
              <th>Raised in</th>
              <td>大阪・千葉</td>
              <th>live in</th>
              <td>千葉</td>
            </tr>
            <tr>
              <th>Drink</th>
              <td>抹茶系</td>
              <th>Food</th>
              <td>パン</td>
            </tr>
            <tr>
              <th>Sport</th>
              <td>水泳</td>
              <th>Hobby</th>
              <td>映画鑑賞</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="container">
        <div class="text">
          <h2>Until Now</h2>
          <table>
            <tr>
              <th>2017 / 04</th>
              <td>法政大学英文学科入学</td>
            </tr>
            <tr>
              <th>2017 / 05</th>
              <td>スイミングインストラクターのバイトを始める</td>
            </tr>
            <tr>
              <th>2019 / 03</th>
              <td><a href="https://www.venect.jp/" target="_blank">VENECT</a>でインターンを始める</td>
            </tr>
            <tr>
              <th>2020 / 10</th>
              <td>プログラミングを始める</td>
            </tr>
            <tr>
              <th>2020 / 03~</th>
              <td>休学しインターンにフルコミットする</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="container">
        <div class="text">
          <h2>Skill</h2>
          <table>
            <tr>
              <td>HTML5 / CSS3</td>
            </tr>
            <tr>
              <td>Ruby / Rails</td>
            </tr>
            <tr>
              <td>Python / Flask</td>
            </tr>
            <tr>
              <td>JavaScript / Vue.js</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
</script>

<style>
  .intro .container {
    max-width: 800px;
    max-width: var(--middle-width);
    margin-left: auto;
    margin-right: auto;
    padding: 30px 10px;
  }

  .intro h1 {
    padding-left: 0.5rem;
    border-left: solid 0.75rem #BF6A7A;
    border-left: solid 0.75rem var(--accent-color);
    font-size: 2rem;
  }

  .icon {
    font-size: 30px;
    margin-right: 10px;
  }

  .icon:hover {
    opacity: 0.8;
  }

  .fa-twitter {
    color: #1DA1F2;
  }

  .fa-github {
    color: #000000;
  }

  .history {
    background-color: #f5f5f5;
    color: #696969;
  }

  .container {
    margin:0 auto;
  }

  .history .text {
    padding: 30px;
    text-align: center;
  }

  .history h2 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1.8rem;
  }

  .history table {
    border-collapse: collapse;
    border-top: solid 1px #ddd;
    border-top: solid 1px var(--gray-color);
    font-size: 0.9rem;
    margin:0 auto;
  }

  .history th,
  .history td {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-right: 1.2rem;
    border-bottom: solid 1px #ddd;
    border-bottom: solid 1px var(--gray-color);
  }

  .history th {
    padding-right: 1rem;
    text-align: left;
    word-break: keep-all;
  }

  @media (min-width: 768px) {
    .history {
      display: flex;
      max-width: 1000px;
      max-width: var(--large-width);
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (min-width: 990px) {
    .history {
      max-width: 75rem;
    }
  }
</style>

