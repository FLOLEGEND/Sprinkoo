<template>
  <div class="form-look">
    <form @submit.prevent="login()">
      <h3>Sign In</h3>
<!--Name-->
    <div class="form-group" :class="{invalid:!name.isValid}">
        <label class="label1">Name</label>
        <b-input-group class="mb-2">
          <b-input-group-prepend is-text>
            <b-icon icon="person-fill"></b-icon>
          </b-input-group-prepend>
          <b-form-input type="text" placeholder="Name" v-model="name.val"></b-form-input>
           <p v-if="!name.isValid">Please enter Valid Name</p>
        </b-input-group>
      </div>

      <div class="form-group" :class="{invalid:!phone.isValid}">
        <label class="label1">Phone Number</label>
        <!--Phone number-->
        <b-input-group size="md">
          <b-input-group-prepend is-text>
            <b-icon icon="telephone"></b-icon>
          </b-input-group-prepend>
          <b-form-input
            type="text"
            placeholder="  eg: 3038357489"
            v-model="phone.val"
          ></b-form-input>
          <p v-if="!phone.isValid">Please enter Valid Number</p>
        </b-input-group>
      </div>


      <!--passowrd input-->
      <div class="form-group" :class="{invalid:!password.isValid}">
        <label class="label1">Password</label>
        <b-input-group class="mb-2">
          <b-input-group-prepend is-text>
            <b-icon icon="person-fill"></b-icon>
          </b-input-group-prepend>
          <b-form-input type="text" placeholder="Password" v-model="password.val"></b-form-input>
           <p v-if="!password.isValid">Please enter Valid Password</p>
        </b-input-group>
      </div>

      <!--Sign in button-->
      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign In
      </button>

      <!--Forget passowrd and signup links-->
      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/ForgetPassword">Forgot password |</router-link>
        <router-link to="/SignUp"> SignUp!</router-link>
      </p>

      <!--Social media link Icons-->
      <!-- <div class="social-icons">
        <ul>
          <li>
            <a href="#" @click="GoogleSignIn()"><i class="fa fa-google"></i></a>
          </li>
          <li>
            <a href="#" @click="FacebookSignIn()"><i class="fa fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-twitter"></i></a>
          </li>
        </ul>
      </div> -->
    </form>
  </div>
</template>

<script>
  import {firebaseAuth} from '../../firebase'

  export default {
    data(){
      return{
        name:{
          val:'',
          isValid:true
        },
         phone:{
          val:'',
          isValid:true
        },
        password: {
          val:'',
          isValid:true
        }
      }
    },
    methods:{
        wrongInput(){
          if(this.name.val===''){
          this.name.isValid=false
        }
        if(this.password.val.length <6){
          this.password.isValid=false
        }
        if (this.phone.val.length !=10){
           this.phone.isValid=false
        }
      },
    async  login(){
        this.wrongInput()
        let vm = this
        let countryCode = '+92' //pakistan
        let email = countryCode + this.phone.val  +'@sprinkoo.com'
        let password = this.password.val
        let username= this.name.val
        //
       await firebaseAuth().signInWithEmailAndPassword(email, password).then(function(){
          vm.$store.commit('usernameUpdate',username)
          vm.$router.replace('/')
        }).catch(function(error) {
          console.log(error)
          let errMsg = error.message.toLowerCase()
          while(errMsg.indexOf('email') != -1){
            errMsg = errMsg.replace("email address", "phone number");
          }
          //
          alert('Error: ' + errMsg)
        });
      }
    }
  }
</script>
<style scoped>
.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>