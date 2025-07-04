import { createStore } from 'vuex'

const store = createStore({
    state(){
        return{
            count:0,
            isLiked:true,
            isReset:false
        }
    },
    mutations:{
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        },
        like(state){
            state.isLiked = !state.isLiked;
            if(state.isLiked){
                state.count++
            }else{
                state.count--
            }
        },
        reset(state){
            state.isReset = !state.isReset
            state.count = 0
        }
    }
})

export default store;