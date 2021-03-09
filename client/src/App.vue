<template>
  <div id="app">
    <div class="cent">
      <router-link to="/"><a class="waves-effect waves-light btn-large blue darken-3">Главная</a></router-link>  
      <router-link to="/top"><a class="waves-effect waves-light btn-large blue darken-3">Топ-5</a></router-link>   
      <router-link to="/full"><a class="waves-effect waves-light btn-large blue darken-3">Весь список</a></router-link>
    </div>
    
    <div class="container">
      
      <router-view/>

    </div>
    
  </div>
</template>

<script>

export default {
  name: 'app',
  
}
</script>


<style lang="scss">
  @import "~materialize-css/dist/css/materialize.min.css";
  .cent {
    text-align: center;
  }

  a {
    margin-top: 1rem;
    margin-right: 1rem;
  }
  
</style>
