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
      <section class="center ml-5" :class="{'nav-active':show}">
        <b-nav-item class="ml-auto mr-lg-3 mr-md-2">
          <a @click="gotoservices()" class="item-style">SERVICES</a>
        </b-nav-item>

        <b-nav-item class="ml-auto mr-lg-3 mr-md-2">
          <a @click="gotoSubscription()" class="item-style">SUBSCRIPTION</a>
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
      <div class="burger" @click=" showNav()">
        <div class="line1"></div>
         <div class="line2"></div>
          <div class="line3"></div>
      </div>
    </b-navbar>
  </header>
</template>

<script>

import { firebaseAuth } from "../firebase";
import TheFooterVue from './TheFooter.vue';
export default {
  created() {
    return this.check();
  },
  data() {
    return {
      showLogin: true,
      show:false
    };
  },
  methods: {
    showNav(){
      if(this.show){
        this.show=false
      }else{
        this.show=TheFooterVue
      }
    },
    gotoabout() {
      var element_to_scroll_to = document.querySelectorAll(".gallery")[0];
      element_to_scroll_to.scrollIntoView({ behavior: "smooth" });
    },
    gotoSubscription() {
      var element_to_scroll_to = document.querySelectorAll(".purchase")[0];
      element_to_scroll_to.scrollIntoView({ behavior: "smooth" });
    },
    gotoprices() {
      var element_to_scroll_to = document.querySelectorAll(".prices")[0];
      element_to_scroll_to.scrollIntoView({ behavior: "smooth" });
    },
    gotoservices() {
      var element_to_scroll_to = document.querySelectorAll(".services")[0];
      element_to_scroll_to.scrollIntoView({ behavior: "smooth" });
    },
    gotocontactus() {
      var element_to_scroll_to = document.querySelectorAll(".contact-us")[0];
      element_to_scroll_to.scrollIntoView({ behavior: "smooth" });
    },
    gotomap() {
      var element_to_scroll_to = document.querySelectorAll(".mapzz")[0];
      element_to_scroll_to.scrollIntoView({ behavior: "smooth" });
    },

    check() {
      let vm = this;
      firebaseAuth().onAuthStateChanged(function (user) {
        if (user) {
          vm.showLogin = false;
        } else {
          // No user is signed in.
        }
      });
    },

    // user logout function
    userLogout() {
      var vm = this;
      firebaseAuth()
        .signOut()
        .then(function () {
          vm.showLogin = true;
          vm.$store.commit("usernameDelete");
          alert("Logged Out!")
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    // Navbar navigation routes
    Login() {
      this.$router.push("Login");
    },
  },
};
</script>

<style scoped>
.center,
.starting {
  display: flex;
}
.burger{
  display:none;
}
.burger div{
  width:25px;
  height:3px;
  background-color: white;
  margin:5px;
}
.nav-bar {
  background: #1a1a1a;
  position: fixed;
  width: 100%;
  list-style: none;
  z-index: 1000;
  margin: auto;
}
.navbar-style {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}
header.sticky {
  position: sticky;
  top: 0;
  margin-top: 0px;
  width: 100%;
  background: rgb(224, 75, 29);
  opacity: 90%;
}
.item-style {
  color: rgb(226, 210, 210);
}
.item-style:hover {
  color: red;
  text-decoration: none;
}
.img-style {
  width: 80px;
  height: auto;
  padding: 0;
  margin: 0;
  font-weight: px;
}
.logo-style {
  color: rgb(252, 248, 248);
  margin-left: 5px;
  text-decoration: none;
}
@media (max-width: 700px) {
  .navbar-style{
    width:80%;
    position:relative;
  }
  .logo-style {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;
  }
  .center {
    display: flex;
    flex-direction: column;
  }
  .nav-bar {
    background: transparent;
  }
}
@media (max-width: 600px) {
  .navbar-style {
    height: 9vh;
    width: 100%;
  }
  .burger{
    display:block;
    cursor: pointer;
  }
  .logo-style {
    display: flex;
    width: 100%;
    align-items: flex-start;
  }
  .center {
    display: flex;
    flex-direction: column;
    height: 0vh;
    transform: translateX(200%);
    transition: transform 0.5s ease-in;
  }
  .nav-bar {
    background: rgb(37, 24, 24);
    top:0px;
    align-items: center;
    height:3rem;
  }
}
.nav-active{
  background-color: black;
  margin-top: 32rem;
  height:30rem;
  transform: translateX(103%);
}
</style>