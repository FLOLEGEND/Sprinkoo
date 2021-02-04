<template>
  <div class="main-container">
    <div class="main-div">
      <div class="div1">
        <h5>PRODUCTS</h5>
        <a class="effectOnB" @click="gotoservices()"> Exterior Wash</a><br />
        <a class="effectOnB" @click="gotoservices()"> Interior WAsh</a><br />
        <a class="effectOnB" @click="gotoservices()"> Interior and Exterior wash</a> <br />
        <a class="effectOnB" @click="gotoservices()"> Complete Wash</a> <br />
        <a class="effectOnB" @click="gotoservices()"> Car Service</a><br />
        <a class="effectOnB" @click="gotoservices()"> Car Checkup</a>
      </div>
      <div class="div2">
        <h5>HELP & FAQ</h5>
        <a class="effectOnA" @click="gotocontactus()"> Faq</a> <br />
        <a class="effectOnA" @click="gotocontactus()"> Delivery</a> <br />
        <a class="effectOnA" @click="gotocontactus()"> Locker</a><br />
        <a class="effectOnA" @click="gotocontactus()"> Legal Notice</a> <br />
        <a class="effectOnA" @click="gotocontactus()"> CGV</a><br />
      </div>
      <div class="div3">
        <h5>ABOUT</h5>
          <a href="https://www.facebook.com/Sprinkoo-102994038470999" target="_blank"> <i class="fab fa-facebook"></i> facebook</a><br />
          <a href="https://www.instagram.com/sprink00" target="_blank"><i class="fab fa-instagram"></i> Instagram</a><br />
      </div>
      <div class="div4">
        <h5>CONTACT</h5>

        <a style="cursor:cell;" href="tel:+923038054489"><i class="fas fa-phone-volume"></i> Phone: +3038054489</a><br />
        <a href="mailto:sprinkoo417@gmail.com"><i class="fas fa-envelope"></i> Email: sprinkoo417@gmail.com</a>
        <br />
      </div>
    </div>
    <div class="Preserved">
      <p style="margin-top: 1rem">© 2021 Intendance - All rights reserved.</p>
      <div class="footer-icons">
        <i class="fab fa-cc-visa fa-3x"></i>
        <i style="margin-left: 5px" class="fab fa-cc-paypal fa-3x"></i>
        <i style="margin-left: 5px" class="fab fa-cc-amex fa-3x"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
     gotocontactus(){
      var element_to_scroll_to = document.querySelectorAll('.contact-us')[0];
      element_to_scroll_to.scrollIntoView({behavior: "smooth"});
    },
    gotoservices(){
      var element_to_scroll_to = document.querySelectorAll('.services')[0];
      element_to_scroll_to.scrollIntoView({behavior: "smooth"});
    },
  }
}
</script>
<style scoped>
.effectOnA{
  cursor:help;
}
.effectOnB{
  cursor:pointer;
}
.effectOnB{
  cursor:cell;
}
.main-container {
  height:400px;
  background: rgb(219, 210, 210);
  width: 150%;
}
.Preserved {
  display: flex;
  justify-content: flex-start;
  margin-left: 15rem;
  margin-top: 2rem;
}
@media (max-width: 700px) {
  .Preserved {
    display: flex;
    justify-content: flex-start;
    margin-left: 0rem;
    margin-top: 2rem;
  }
}
.footer-icons {
  display: flex;
  margin-left: 10rem;
  justify-content: flex-end;
}
.main-div {
  padding-top: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin-left: 10rem;
}
@media (max-width: 700px) {
  .main-div {
    display: flex;
    flex-direction: row;
    bottom: 0;
    margin: 0;
    width: 100%;
  }
}
</style>