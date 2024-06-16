<template>
  <div class="order">
    <div class="container">
      <main>
        <div class="py-5 text-center">
          <h2>주문하기</h2>
        </div>
        <div class="row g-5">
          <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">장바구니 물건</span><span class="badge bg-primary rounded-pill">{{ state.items.length }}</span></h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-sm" v-for="(i, idx) in state.items" :key="idx">
                <div>
                  <h6 class="my-0">{{i.name}}</h6>
                </div>
                  <h6 class="my-0">{{ i.realprice }}</h6>
              </li>
            </ul>
            <div class="text- center total-price">
              {{computedPrice}}
            </div>
          </div>
          <div class="col-md-7 col-lg-8">
            <h4 class="mb-3">주문자 정보</h4>
            <div class="needs-validation" novalidate="">
              <div class="row g-3">
                <div class="col-12"><label for="name" class="form-label">이름</label>
                  <div class="input-group has-validation"><input type="text" class="form-control" id="name" v-model="state.form.name">
                  </div>
                </div>
                <div class="col-12"><label for="address" class="form-label">주소</label><input type="text"
                    class="form-control" id="address" v-model="state.form.address">
                </div>
              </div>
              <hr class="my-4">
              <h4 class="mb-3">결제수단</h4>
              <div class="my-3">
                <div class="form-check"><input id="card" name="paymentMethod" type="radio" class="form-check-input"
                    value="card" v-model="state.form.payment"><label class="form-check-label" for="card">신용카드</label></div>
                <div class="form-check"><input id="bank" name="paymentMethod" type="radio" class="form-check-input"
                  value="bank" v-model="state.form.payment"><label class="form-check-label" for="bank">무통장 입금</label></div>
              </div>
              <div class="row gy-3">
                <label for="cardnumber" class="form-label">카드 번호</label><input type="text"
                    class="form-control" id="cardnumber" v-model="state.form.cardnumber">
                  <div class="invalid-feedback"> Name on card is required </div>                
              </div>
              <hr class="my-4"><button class="w-100 btn btn-primary btn-lg" @click="submit()">결제하기</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import router from '@/scripts/router';
import axios from 'axios';
import { computed, reactive } from 'vue';

export default {
  name: 'Login',
  setup() {
    const state = reactive({
      items: [],
      form:{
        name:"",
        address:"",
        payment:"",
        cardnumber:"",
        items:"",

      }
    })

    const load = () => {

      axios.get("api/cart/items").then(({ data }) => {
        console.log(data);
        state.items = data;
      });

    }

    const submit =()=>{

      const args = JSON.parse(JSON.stringify(state.form));
      args.items = JSON.stringify(state.items);



      axios.post("api/orders", args).then(() => {
        alert("구입 완료하였습니다.");
        router.push({path:"/orders"})
      });

    }

    const computedPrice = computed(()=>{
      
      let result = 0;

      for(let i of state.items){

        let totalprice = 0;
        totalprice += parseInt(i.realprice.replace(/,/g, ''));
        result+=totalprice;

      }

      return result.toLocaleString();

    })

    load();

    return { state , computedPrice, submit };

  }
}


</script>

<style scoped></style>