<template>
  <div id="app">
      
     


    
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

img {
width: 300px;
height: auto;
display: block;
margin-left: auto;
margin-right: auto;
margin-bottom: 75px;
}

h1{
  margin: 75px;
  
}
</style>
