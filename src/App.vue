<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Top</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/project">My Project</router-link> |
      <router-link to="/thought">My Thought</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<script>
</script>

<style>
  @charset "UTF-8";

  /* 基本色 */
  :root {
    --main-color: #5D9AB2;
    --accent-color: #BF6A7A;
    --dark-main-color: #2B5566;
    --text-bright-color: #fff;
    --icon-color: #fff;
    --icon-bk-color: #ddd;
    --gray-color: #ddd;
    --large-width: 1000px;
    --middle-width: 800px;
  }
  body {
    margin: 0;
    font-family: "Montserrat", 'メイリオ', 'Hiragino Kaku Gothic Pro', sans-serif;
  }
  .nav {
    text-align: center; 
    margin-top: 30px; 
    margin-bottom: 10px;  
  }
  .nav a {
    position: relative;
    display: inline-block;
    text-decoration: none;
    font-weight: bold;  
    font-size: 1rem;
    color: #696969;  
  }
  .nav a::after {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background: #696969;
    transform: scale(0, 1);
    transform-origin: left top;
    transition: transform .3s;    
  }
  .nav a:hover::after {
    transform: scale(1, 1);    
  }

  @media screen and (min-width:768px){
    .nav a {
      font-size: 1.5rem;
    }
  }
</style>