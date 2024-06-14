<template>
  <div class = "cart">
    <div class="container">
        <ul>
            <li v-for="(i, idx) in state.items" :key="idx">
              <img :src="i.IMGPATH">
              <span class="name">{{ i.NAME }}</span>
              <span class="price">{{ i.PRICE }}</span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';

export default {
    name : 'Login',
    setup() {
        const state = reactive({
            items:[]
        })

        axios.get("api/cart/items").then(({data}) => {
          console.log(data);
          state.items =data;
        });

        return {state};

    }
  }

// setup(){

  //   window.alert("test111");

  //   axios.get("/api/cart/items").then(({data}) => {
  //     console.log(data);
  //   })
  // }

//

</script>    

