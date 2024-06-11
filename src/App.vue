@import from '.css/main.css'

<template>
  <Header></Header>
  <RouterView></RouterView>
  <Footer></Footer>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'

export default{
  name : 'App',
  components : {
  Header,
  Footer,
   }

}  


</script>