<template>
  <div class="form-look">
    <h2>Set Password</h2>
    <div class="form-group">
    <b-form-input  placeholder="Enter Password" v-model="password"></b-form-input>
    </div>
    <div class="form-group">
    <b-form-input  placeholder="Re-enter Password" v-model="password_2"></b-form-input>
    </div>
    <button @click="setPassword" class="btn btn-dark btn-lg btn-block">
        Set Password
      </button>

  </div>
</template>

<script>
  import {firebaseAuth} from '../../firebase'

  export default {
    data(){
      return {
        password : '',
        password_2 : ''
      }
    },
    methods:{
      setPassword(){
        if(this.password != this.password_2){
          alert('Password did not match !')
        }else if(this.password.length != 6){
          alert('Password too small ! Lenght of Password should be atleast 6 !')
        }else{
          let vm = this
          var user = firebaseAuth().currentUser;
          //
          let newEmail = firebaseAuth().currentUser.phoneNumber + '@sprinkoo.com'
          let newPassword = this.password
          //
          user.updateEmail(newEmail).then(function() {
            user.updatePassword(newPassword).then(function() {
              alert('//Password Set successfully ! You can now Login with PHONE & PASSWORD !')
              vm.$router.replace('/Login')  //route to app home !
            }).catch(function(error) {
              alert('Error :' + error.message)
            });
          }).catch(function(error) {
            //Logout if session expires !
            if(error.code == 'auth/requires-recent-login'){
              alert("Your Session has been Expired to Set Password ! Please try again !")
              //
              vm.signout()
            }
          });
        }
      },
      signout(){
        firebaseAuth().signOut();
        this.$router.push({path:'/'})
        window.location.reload();  //reload on signout !
      }
    }
  }
</script>