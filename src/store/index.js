import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locationOfUser:'',
    username:'',
    order:[],
    emailFromUser:[],
    subscription:[]
  },
  mutations: {
    setSubscription(state,payload){
      state.subscription=[]
      state.subscription=payload
    },
    setOrder(state,payload){
      state.order=[]
        state.order=payload
    },
    setEmailFromUser(state,payload){
      state.emailFromUser=[]
        state.emailFromUser=payload
    },
    setlocationOfUser(state,payload){
      state.locationOfUser=[]
      state.locationOfUser=payload
    },
    usernameUpdate(state,payload){
      state.username=[]
      state.username=payload
    },
    usernameDelete(state){
      state.username=[]
    }
  },
  getters:{
    getEmailFromUser(state){
     return state.emailFromUser
    }
  },
  actions: {
  },
  modules: {
  }
})
