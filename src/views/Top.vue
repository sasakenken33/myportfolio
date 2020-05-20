<template>
  <section class="top">
    <div class="container">
      <h1>KEN SASAKI</h1>
    </div>
  </section>
</template>

<script>
</script>

<style>
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    min-height: 450px;
    background-position: center;
    /*background-image: url("../assets/top.png");*/
    background-size: cover;
    color: #696969;
    text-align: center;
    opacity: 1;
  }
  .top h1 {
    margin-top: 0;
    margin-bottom: 50px;
    font-family: "Montserrat", sans-serif;
    font-size: 15vw;
    color: #ddd;
    letter-spacing: 0.2em;
    margin-left: 0.2em;
    opacity: 0.8;
  }
  @media (min-width: 768px) {
    .top h1 {
      font-size: 115px;
    }
  }
  
</style>