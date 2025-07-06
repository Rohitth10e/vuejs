export default{
    namespaced: true,
    state(){
        return{
            count:null
        }
    },
    mutations:{
        increment(state){
            state.count++;
        },
        decrement(state){
            if(state.count!=0){
                state.count--;
            }
        }
    },
    getters:{
        doubleCount(state){
            return state.count * state.count
        }
    },
    actions:{
        delayedIncrement({commit}){
            setTimeout(()=>{
                commit('increment');
            },3000)
        }
    }
};
