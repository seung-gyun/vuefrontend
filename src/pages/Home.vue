<!-- eslint-disable vue/require-v-for-key -->
<template>

    <div  class="home">

    <section class="py-5 text-center container">
    <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Save Your Money</h1>
        </div>
    </div>
    </section>

    <div class="album py-5 bg-body-tertiary">
    <div class="container">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <!--<div class="col" v-for="i in 12" :key ="i">
                2024.06.07 첫 번째 방법 -> 2024.06.07 wingerms    
            --> 
            <div class="col" v-for="(item, idx) in state.items" v-bind:key ="idx" >
                <Card :item="item"></Card>
            </div>
         
        </div>
    </div>
    </div>



</div>

    <Footer></Footer>

</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';
import Card from '@/components/Card'

export default {
    name : 'Home',
    components : {Card},
    setup() {

        const state = reactive({
            items : []
        })

        /*axios.get("/api/items").then((res) => {
            state.items = res.data; 2024.06.07 wingerms
        })*/

        
        /* Line 55에 있는 res객체에서 바로 state.items에 담아줄 수 있는 값이다. */
        axios.get("/api/items").then(({data}) => {
            state.items = data;
        }).catch(error =>{
            console.error("There was an error!", error);
        })

        return {state}

    }
}
</script>




