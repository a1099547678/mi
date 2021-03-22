<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<style>
  @import './assets/base.css';
  @import './assets/fonts/iconfont.css';
</style>

<script>
export default {
  name: 'app',
  data(){
    return{
      data:''
    }
  },
  components: {
    
  },
  mounted(){
    // axios.get('http://localhost:3000/product/xiaomi?begin=0&ending=5')
    // .then(function(response){
    //   console.log(response)
    // })
  }
}
</script>
