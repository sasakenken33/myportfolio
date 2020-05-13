<template>
  <section class="project">
    <div class="container">
      <div class="text">
        <a href="https://v-research-database.herokuapp.com/" target="_blank"><p><img src="../assets/VRD.png" class="logo"></p></a>
        <h2><a href="/myportfolio/project/vrd" class="app">V_Research_Database</a></h2>
        <p>リサーチソースをタグ付管理するアプリケーション</p>
        <p>ID: test PW: test でログインできます！</p>
        <p>使用技術：Ruby, Ruby on Rails<a href="https://github.com/sasakenken33/VRD" target="_blank" class="github"><span class="fab fa-github"></span></a></p>
        <a href="https://v-research-database.herokuapp.com/" target="_blank" class="app">Jump to App
        <span class="fa fa-chevron-right"></span>
        </a>
      </div>
      <div class="text">
        <a href="https://arcs-atcosme.herokuapp.com/" target="_blank"><p><img src="../assets/ARCS_normal_cosme.png" class="logo"></p></a>
        <h2><a href="/myportfolio/project/arcs" class="app">ARCS_@cosme</a></h2>
        <p>@cosmeレビューを自動収集するスクレイピングツール(Ruby on Rails版)</p>
        <p>使用技術：Ruby, Ruby on Rails<a href="https://github.com/sasakenken33/ARCS_atcosme" target="_blank" class="github"><span class="fab fa-github"></span></a></p>
        <a href="https://arcs-atcosme.herokuapp.com/" target="_blank" class="app">Jump to App
        <span class="fa fa-chevron-right"></span>
        </a>
      </div>
      <div class="text">
        <a href="https://arcs-at-cosme.herokuapp.com/" target="_blank"><p><img src="../assets/ARCS_normal_cosme.png" class="logo"></p></a>
        <h2><a href="/myportfolio/project/arcs" class="app">ARCS_@cosme</a></h2>
        <p>@cosmeレビューを自動収集するスクレイピングツール(Flask版)</p>
        <p>使用技術：Python, Flask<a href="https://github.com/sasakenken33/ARCS_at_cosme" target="_blank" class="github"><span class="fab fa-github"></span></a></p>
        <a href="https://arcs-at-cosme.herokuapp.com/" target="_blank" class="app">Jump to App
        <span class="fa fa-chevron-right"></span>
        </a>
      </div>
      <div class="text">
        <a href="https://meiseki.herokuapp.com/" target="_blank"><p><img src="../assets/Meiseki.png" class="logo"></p></a>
        <h2><a href="/myportfolio/project/meiseki" class="app">MEISEKI</a></h2>
        <p>文学作品を形態素解析し、傾向値を算出するツール</p>
        <p>使用技術：Python, Flask<a href="https://github.com/sasakenken33/morpheme_analyzer" target="_blank" class="github"><span class="fab fa-github"></span></a></p>
        <a href="https://meiseki.herokuapp.com/" target="_blank" class="app">Jump to App
        <span class="fa fa-chevron-right"></span>
        </a>
      </div>
      <div class="text">
        <span class="fab fa-twitter icon"></span>
        <h2>Twitter Analyzer</h2>
        <p>Twitter投稿分析ツール</p>
        <p>使用技術：Python, Flask, COTOHA API<a href="https://github.com/sasakenken33/twitter_analyzer" target="_blank" class="github"><span class="fab fa-github"></span></a></p>
      </div>
      <div class="text">
        <span class="fas fa-portrait icon"></span>
        <h2>My Portfolio Site</h2>
        <p>このポートフォリオサイト</p>
        <p>使用技術：JavaScript, Vue.js<a href="https://github.com/sasakenken33/myportfolio" target="_blank" class="github"><span class="fab fa-github"></span></a></p>
        <a href="https://sasakenken33.github.io/myportfolio/" target="_blank" class="app">Jump to App
        <span class="fa fa-chevron-right"></span>
        </a>
      </div>
      <div class="text">
        <span class="fas fa-mail-bulk icon"></span>
        <h2>Gmail自動整理ツール</h2>
        <p>Gmailを自動で整理してくれるツール</p>
        <p>使用技術：JavaScript, Google App Script<a href="https://github.com/sasakenken33/Gmail_Manager3" target="_blank" class="github"><span class="fab fa-github"></span></a></p>
      </div>
      <div class="text">
        <span class="far fa-calendar-alt icon"></span>
        <h2>Slack bot for Google-Calendar</h2>
        <p>Google-Calendarの予定を毎朝知らせるSlack bot</p>
        <p>使用技術：JavaScript, Google App Script<a href="https://github.com/sasakenken33/G-Calendar_Manager" target="_blank" class="github"><span class="fab fa-github"></span></a></p>
      </div>
      <div class="text">
        <span class="fas fa-book icon"></span>
        <h2>自己分析SNS(仮)現在絶賛開発中！！</h2>
        <p>自己分析×SNSがテーマのアプリケーション</p>
        <p>使用技術：Ruby, Ruby on Rails</p>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style>
  .project .container {
    padding-top: 80px;
    padding-bottom: 20px;

  }
  .project .text {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 60px;
    text-align: center;
  }
  .project h2 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 20px;
  }
  .project p {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 1.8;
    opacity: 0.8;
  }
  .project a {
    color: #000;
    text-decoration: none;
    position: relative;
  }
  .project a.app::after {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background: #000;
    transform: scale(0, 1);
    transform-origin: left top;
    transition: transform .3s;    
  }
  .project a.app:hover::after {
    transform: scale(1, 1);    
  }
  .project .icon	{
    display: inline-block;
    margin-bottom: 30px;
    font-size: 30px;
    width: 2em;
    line-height: 2em;
    border-radius: 50%;
    text-align: center;
    background-color: #ddd;
    background-color: var(--icon-bk-color);
    color: #fff;
    color: var(--icon-color);
  }
  .logo {
    width: 15rem;
  }
  .github {
    color: #000000;
    margin-left: 0.5rem;
    font-size: 1.5rem;
  }
  .github:hover {
    opacity: 0.8;
  }
  
  @media (min-width: 768px) {
    .project .container {
      display: flex;
      flex-wrap:wrap;
      margin:0 auto;
      width: 1200px;
    }
    .project .text	{
      width: 30%;
    }
  }
</style>

