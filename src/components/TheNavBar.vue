<template>
  <header class="nav-bar">
    <b-navbar variant="faded" style="backg" class="navbar-style">
      <section class="starting">
        <b-navbar-brand class="logo-style">
          <img
            src="../assets/images/profile.png"
            class="d-inline-block align-top img-style"
            alt="Logo-picture"
          />
        </b-navbar-brand>
      </section>
      <section class="center ml-5">
        <b-nav-item class="ml-auto mr-lg-3 mr-md-2">
          <a @click="gotoservices()" class="item-style">SERVICES</a>
        </b-nav-item>

          <b-nav-item class="ml-auto mr-lg-3 mr-md-2">
          <a @click="gototestimonial()" class="item-style">TESTIMONIAL</a>
        </b-nav-item>

        <b-nav-item class="ml-auto mr-lg-3 mr-md-2">
          <a @click="gotoprices()" class="item-style">PRICES</a>
        </b-nav-item>
        <b-nav-item class="ml-auto mr-lg-3 mr-md-2">
          <a @click="gotomap()" class="item-style">MAP</a>
        </b-nav-item>

        <b-nav-item class="ml-auto mr-lg-3 mr-md-2">
          <a @click="gotocontactus()" class="item-style">CONTACT US</a>
        </b-nav-item>

        <b-nav-item v-if="showLogin" class="ml-auto mr-lg-3 mr-md-2">
          <a @click="Login()" class="item-style">LOGIN</a>
        </b-nav-item>
        <b-nav-item v-else class="ml-auto mr-lg-3 mr-md-2">
          <a @click="userLogout()" class="item-style">LOGOUT</a>
        </b-nav-item>
      </section>
    </b-navbar>
  </header>
</template>

<script>
    // To change the navbar color on scroll
// window.addEventListener("scroll", function () {
//   var header = document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 0);
// });

import {firebaseAuth} from '../firebase'
export default {
    created(){
     return this.check()
   },
  data() {
    return {
      showLogin: true,
    };
  },
  methods: {
    gotoabout(){
    var element_to_scroll_to = document.querySelectorAll('.gallery')[0];
      element_to_scroll_to.scrollIntoView({behavior: "smooth"});
    },
    gototestimonial(){
      var element_to_scroll_to = document.querySelectorAll('.testimonials')[0];
      element_to_scroll_to.scrollIntoView({behavior: "smooth"});

    },
    gotoprices(){
    var element_to_scroll_to = document.querySelectorAll('.prices')[0];
      element_to_scroll_to.scrollIntoView({behavior: "smooth"});
    },
    gotoservices(){
      var element_to_scroll_to = document.querySelectorAll('.services')[0];
      element_to_scroll_to.scrollIntoView({behavior: "smooth"});
    },
     gotocontactus(){
      var element_to_scroll_to = document.querySelectorAll('.contact-us')[0];
      element_to_scroll_to.scrollIntoView({behavior: "smooth"});
    },
    gotomap(){
    var element_to_scroll_to = document.querySelectorAll('.mapzz')[0];
      element_to_scroll_to.scrollIntoView({behavior:'smooth'});
    },

     check() {
      let vm=this
      firebaseAuth().onAuthStateChanged(function (user) {
        if (user) {
          vm.showLogin=false
        } else {
          // No user is signed in.
        }
      });
    },

    // user logout function
    userLogout() {
      var vm = this
      firebaseAuth().signOut()
      .then(function () {
          vm.showLogin = true;
          vm.$store.commit('usernameDelete')
          console.log("name is",vm.$store.state.username)
          alert("Logged Out")
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    // Navbar navigation routes
    Login(){
      this.$router.push('Login')
    },
  },
};
</script>

<style scoped>
.center,
.starting {
  display: flex;
}

.nav-bar {
  background:#1A1A1A;
  position: fixed;
  width: 100%;
  list-style: none;
  z-index:1000;
  margin: auto;
}
.navbar-style{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}
header.sticky {
  position:sticky;
  top:0;
  margin-top: 0px;
  width: 100%;
  background: rgb(224, 75, 29);
  opacity: 90%;
}
.item-style {
  color: rgb(226, 210, 210);
}
.item-style:hover{
  color:red;
  text-decoration: none;
}
.img-style {
  width: 80px;
  height: auto;
  padding:0;
  margin:0;
  font-weight: px;
}
.logo-style {
  color: rgb(252, 248, 248);
  margin-left: 5px;
  text-decoration: none;
}
@media (max-width: 700px) {
  .navbar-style,
  .logo-style {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
  }
  .center{
    display:flex;
    flex-direction: column;
  }
  .nav-bar{
    background:transparent;
  }
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.scroll-bar{
  scrollbar-color: yellow brown;
}
</style>