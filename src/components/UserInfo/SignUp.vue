<template>
  <div class="form-look">
    <form @submit.prevent="">
    <h2>SignUp</h2>
      <div class="form-group" :class="{invalid:!phone.isValid}">
        <label class="label1">Phone</label>
        <input
          type="text"
          id="phone"
          class="form-control form-control-lg"
          placeholder="Phone-Number"
          v-model="phone.val"
        />
        <p v-if="!phone.isValid">Enter 10 digits Number (eg: 3038054489) </p>
      </div>
    <button
        type="submit"
        class="btn btn-dark btn-lg btn-block"
        @click="sendcode"
      >
        Send Code
      </button>
    <div id="recaptcha-container"></div><br>
    <div class="form-group" :class="{invalid:!code.isValid}">
        <label class="label1">VerifyCode</label>
        <input
          type="text"
          class="form-control form-control-lg"
          placeholder="code"
          v-model="code.val"
        />
      </div>
    <button
        type="submit"
        class="btn btn-dark btn-lg btn-block"
        @click="verifycode"
      >
        Verify Code
      </button>
       <p class="forgot-password text-right">
        <button @click="sendcode">Resend Code</button>
      </p>
      <p class="forgot-password text-right">
        Already registered
        <router-link :to="{ name: 'Login' }">sign in?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
  import {firebaseAuth} from '../../firebase'
require("firebase/auth");
  export default {
    data(){
      return{

        phone:{
          val:'',
          isValid:true
        },
        applicationVerifier : '',
        code : {
          val:'',
          isValid:true
        }
      }
    },
    methods :{
       userExp(input){
        this[input].isValid=true
      },
      wrongInput(){

        if (this.phone.val.length !=10){
           this.phone.isValid=false
        }
      },
      sendcode(){
        this.wrongInput();
        if(this.phone.val.length != 10 ){
          return
        }else{
          let countryCode = '+92' //Pakistan
          let phoneNumber = countryCode + this.phone.val

          //
          let applicationVerifier = this.applicationVerifier
          //
          firebaseAuth().signInWithPhoneNumber(phoneNumber, applicationVerifier)
            .then(function (confirmationResult) {
              window.confirmationResult = confirmationResult;
              alert('SMS sent')
            }).catch(function (error) {
            console.log(error)
            alert('Error ! SMS not sent')
          });
        }
      },
      //
      verifycode(){
        if(this.phone.val.length != 10 || this.code.val.length != 6){
          this.code.isValid=false
          return
        }else{
          //
          let vm = this
          let code = this.code.val
          //
          // eslint-disable-next-line no-unused-vars
          window.confirmationResult.confirm(code).then(function (result) {
            // User signed in successfully.
            vm.$router.replace({path:'/SignInPasswordSet'})
          }).catch(function (error) {
            console.log(error)
          });
        }
      },
      initReCaptcha(){
        setTimeout(()=>{

          window.recaptchaVerifier = new firebaseAuth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            // eslint-disable-next-line no-unused-vars
            'callback': function(response) {
              // reCAPTCHA solved, allow signInWithPhoneNumber.

            },
            'expired-callback': function() {
              // Response expired. Ask user to solve reCAPTCHA again.
              // ...
            }
          });
          //
          this.applicationVerifier =  window.recaptchaVerifier
        },1000)
      }
    },
    created(){
      this.initReCaptcha()
    }
  }
</script>
<style scoped>
.resend-code{
  border-radius: 20%;
  text-align: center;
  background: transparent;
  padding-bottom: 4px;
  color: black;
  background: grey;
  padding-top: 4px;
}
.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>