import { createStore } from 'vuex'

const store = createStore({
    state: function (){
        return {
            account: {
                id : 0
            }
        }
    },
    mutations : {
        setAccount(state, payload){
            state.account.id = payload;
        }
    }
})

export default store;