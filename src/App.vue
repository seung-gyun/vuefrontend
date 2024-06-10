@import from '.css/main.css'

<template>
  <Header></Header>
  <!-- <div class="col" v-for="(item, idx) in state.items" v-bind:key ="idx" >
        {{ item }}
        <Card :item="item"></Card>
    </div>   -->
  <Home></Home>
  <Footer></Footer>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

export default{
  name : 'App',
  components : {
  Header,
  Footer,
  Home
   }

}  


</script>