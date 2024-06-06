@import from '.css/main.css'

<template>
  <Header></Header>
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