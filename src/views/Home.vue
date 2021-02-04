<template>
  <div>
    <the-nav-bar />
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      alt="car wash"
      indicators
      img-width="1024"
      img-height="480"
      class="cara-style"
    >
      <b-carousel-slide
        caption="GET YOUR CAR WASHED TODAY"
        img-src="../assets/images/coupe.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="CLEAN ALL THE RUST"
        img-src="../assets/images/car.jpg"
        alt="car wash"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Exterior wash with Polishing"
        img-src="../assets/images/sports.jpg"
        alt="car wash"
      ></b-carousel-slide>
    </b-carousel>
    <section class="controler-section">
      <!--Services Section-->
      <section id="services" class="services">
        <h1 class="services-ptag">SERVICES</h1>
        <p class="text-class-all">
          We provide all sort of car washing services including interior and
          exterior<br />
          wash with car checkup and servicing at door step.
        </p>
        <div class="section1-div1">
          <ul class="holder">
            <li class="li1">
              <img class="img1" alt="car wash" src="../assets/images/wash1.jpg" />
              <div class="info">
                <p><b>Exterior wash</b></p>
                <div @click="gotomap()" class="button"></div>
              </div>
            </li>
            <li class="li1">
              <img
                class="img1"
                src="../assets/images/complete.jpg"
                alt="car wash"
              />
              <div class="info">
                <p><b>Interior And Exterior</b></p>
                <div @click="gotomap()" class="button"></div>
              </div>
            </li>
            <li class="li1">
              <img
                class="img1"
                src="../assets/images/wash3.jpg"
                alt="car wash"
              />
              <div class="info">
                <p><b>Exterior wash with Polishing</b></p>
                <div @click="gotomap()" class="button"></div>
              </div>
            </li>
          </ul>
        </div>
        <div class="section1-div2">
          <ul style="width: 80%; margin: auto" class="holder">
            <li class="li1">
              <img class="img1" alt="car wash" src="../assets/images/ss.jpg" />
              <div class="info">
                <p><b>Interior Wash</b></p>
                <div @click="gotomap()" class="button"></div>
              </div>
            </li>
            <li class="li1">
              <img
                class="img1"
                src="../assets/images/IE.jpg"
                alt="car wash"
              />
              <div class="info">
                <p><b>Complete Car Wash</b></p>
                <div @click="gotomap()" class="button"></div>
              </div>
            </li>
            <li class="li1">
              <img
                class="img1"
                src="../assets/images/checkup.jpg"
                alt="car wash"
              />
              <div class="info">
                <p><b>Car Servicing</b></p>
                <div @click="gotomap()" class="button"></div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <!-- Subscription model hello -->
      <section class="purchase" id="buy-now">
        <h1 class="services-ptag" style="font-size: 50px">
          <b>Our packages</b>
        </h1>
        <p class="text-class-all">
          Our subscribers will be provided with coupon which they can use to
          <br />
          get bonus services according to their subscription.
        </p>
        <div class="container-div-subscription">
          <ul>
            <li>
              <a class="a22" href="https://app.payhere.co/adveria/sprinku" target="__blank">
                <strong>Silver</strong>
                <span class="purchase-description">5 Exterior wash </span>
                <span class="purchase-description">Plus Polishing Free</span>

                <big class="purchase-price">9$</big>
                <span class="purchase-button">Buy Now</span>
              </a>
            </li>

            <li>
              <a class="a22" href="https://app.payhere.co/adveria/gold-package" target="__blank">
                <strong>Gold</strong>
                <span class="purchase-description">5 Exterior wash</span>
                <span class="purchase-description">5 Interior Wash</span>
                <big class="purchase-price">15$</big>
                <span class="purchase-button">Buy Now</span>
              </a>
            </li>

            <li>
              <a class="a22" style="cursor: " href="https://app.payhere.co/adveria/sprinku" target="__blank">
                <strong>Platinum</strong>
                <span class="purchase-special">6 Exterior with Polishing</span>
                <span class="purchase-special">6 Interior </span>
                <big class="purchase-price">20$</big>
                <span class="purchase-button">Buy Now</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section class="prices">
        <h1 class="services-ptag">PRICES</h1>
        <p class="text-class-all">
          Our periority are customers and trust. Keeping that in mind we provide
          the lowest<br />
          prices possible to our customers.
        </p>
        <div class="section-prices-div1">
          <div class="prices-inner-div1">
            <h5 class="content-section">Car Wash Exterior</h5>
            <h4 class="price-section-inner">300</h4>
          </div>
          <div class="prices-inner-div2">
            <h5 class="content-section">Car Wash Exterior(With polishing)</h5>
            <h4 class="price-section-inner">400</h4>
          </div>
        </div>
        <div class="section-prices-div1">
          <div class="prices-inner-div1">
            <h5 class="content-section">Car Wash Interior & Exterior</h5>
            <h4 class="price-section-inner">600</h4>
          </div>
          <div class="prices-inner-div2">
            <h5 class="content-section">Interior Wash</h5>
            <h4 class="price-section-inner">350</h4>
          </div>
        </div>
        <div class="section-prices-div2">
          <div class="prices-inner-div1">
            <h5 class="content-section">Complete Car Wash</h5>
            <h4 class="price-section-inner">2500</h4>
          </div>
          <div class="prices-inner-div2">
            <h5 class="content-section">Car Servicing</h5>
            <h4 class="price-section-inner">Dynamic</h4>
          </div>
        </div>
      </section>
      <!-- map section-->
         <section class="mapzz">
        <Map />
      </section>
        <!-- Alert Section-->
      <div>
        <transition name="slide" appear>
          <div class="modals" v-if="showModal">
            <h1 class="h11">{{ title }}</h1>
            <p class="p11">{{ msg }}</p>
            <button class="button22" @click="showModal = false">Okay</button>
          </div>
        </transition>
      </div>

      <!-- Contact US -->
      <section class="contact-us">
        <h1 class="services-ptag" style="color: white">Contact Us</h1>
        <p style="font-size: 20px; color: white">
          Feel free to send us your feedback. We will be more than happy to
          solve our customers issues.
        </p>
        <div class="controler-div">
          <div class="contactus-div1">
            <h1 class="contactus-div1-h1">Contact Us</h1>
          </div>
          <div class="contactus-div2">
            <div class="contactus-div2-inner-div1">
              <form @submit.prevent="">
                <div class="divv1" :class="{ invalid: !nameOfUser.isValid }">
                  <label class="labelCorrection">USERNAME</label>
                  <input
                    type="text"
                    placeholder="Username"
                    v-model="nameOfUser.val"
                    @blur="userExp('nameOfUser')"
                  />
                </div>
                <div class="divv2" :class="{ invalid: !emailOfUser.isValid }">
                  <label class="labelCorrection">E-MAIL</label>
                  <input
                    type="email"
                    placeholder="Email"
                    v-model="emailOfUser.val"
                    @blur="userExp('emailOfUser')"
                  />
                </div>
                <div class="divv3" :class="{ invalid: !messageOfUser.isValid }">
                  <label class="labelCorrection">MESSAGE</label>
                  <textarea
                    name="message-box"
                    rows="4"
                    cols="5"
                    placeholder="Enter your message"
                    v-model="messageOfUser.val"
                    @blur="userExp('messageOfUser')"
                  ></textarea>
                </div>
              </form>
            </div>
            <div class="contactus-div2-inner-div2">
              <ContactUsButton :onClick="sendMessage"
                >Send Message</ContactUsButton
              >
            </div>
          </div>
        </div>
      </section>
    </section>
    <!-- Footer section -->
    <the-footer />
  </div>
</template>
<script>
import TheNavBar from "../components/TheNavBar.vue";
import TheFooter from "@/components/TheFooter";
import ContactUsButton from "@/components/ContactUsButton";
import Map from "../components/Map.vue";
import { orderPlacedRef } from "../firebase";
export default {
  components: {
    TheNavBar,
    TheFooter,
    ContactUsButton,
    Map,
  },
  data() {
    return {
      title: "",
      msg: "",
      showModal: false,
      nameOfUser: {
        val: "",
        isValid: true,
      },
      emailOfUser: {
        val: "",
        isValid: true,
      },
      messageOfUser: {
        val: "",
        isValid: true,
      },
    };
  },

  methods: {

    userExp(input) {
      this[input].isValid = true;
    },
    wrongInput() {
      if (this.nameOfUser.val === "") {
        this.nameOfUser.isValid = false;
      }
      if (this.emailOfUser.val.length < 13) {
        this.emailOfUser.isValid = false;
      }
      if (this.messageOfUser.val.length < 10) {
        this.messageOfUser.isValid = false;
      }
    },
    sendMessage() {
      this.wrongInput();
      if (
        !this.nameOfUser.isValid === true ||
        !this.emailOfUser.isValid == true ||
        !this.messageOfUser.isValid === true
      ) {
        this.title = "Empty form!";
        this.msg = "Please Fill in the form";
        this.showModal = true;
      } else {
        var name = this.nameOfUser.val;
        var email = this.emailOfUser.val;
        var message = this.messageOfUser.val;
        this.$store.commit("setEmailFromUser", { email, message });
        orderPlacedRef.doc(name).set(this.$store.getters.getEmailFromUser);
        this.title = "Message sent";
        this.msg =
          "Thanks for reaching out to us. We will get in touch with you shortly";
        this.showModal = true;
      }
    },
    gotomap() {
      var element_to_scroll_to = document.querySelectorAll(".mapzz")[0];
      element_to_scroll_to.scrollIntoView({ behavior: "smooth" });
    },
    onScrell() {
      var exampleHeading = this.$refs["example"];

      if (exampleHeading) {
        var marginTopExample = exampleHeading.getBoundingClientRect().top;
        var innerHeight = window.innerHeight;

        if (marginTopExample - innerHeight < -50) {
          this.getExamplesWriting();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// Subscription model
.a22 {
  text-decoration: none;
  cursor: pointer;
}
.container-div-subscription {
  margin-bottom: 10rem;
}
.purchase {
  border-top: 0px;
  padding: 89px 0 0;
  text-align: center;
  font-family: "Lato";
}
.purchase h1 {
  font-size: 26px;
  letter-spacing: 3px;
  line-height: 40px;
  text-transform: uppercase;
}
.purchase p {
  font-size: 26px;
  line-height: 45px;
  max-width: 750px;
  margin: 0 auto;
}
.purchase-trigger {
  margin-top: 50px;
  border: 1px solid #e85700;
  border-radius: 50px;
  font-size: 26px;
  display: inline-block;
  cursor: pointer;
  position: relative;
}

.purchase-trigger * {
  -webkit-transition: 0.3s cubic-bezier(0.54, 1.41, 0.54, 0.87);
  -moz-transition: 0.3s cubic-bezier(0.54, 1.41, 0.54, 0.87);
  -o-transition: 0.3s cubic-bezier(0.54, 1.41, 0.54, 0.87);
  transition: 0.3s cubic-bezier(0.54, 1.41, 0.54, 0.87);

  -webkit-transition: 0.4s cubic-bezier(0.165, 0.925, 0.51, 1.005);
  -moz-transition: 0.4s cubic-bezier(0.165, 0.925, 0.51, 1.005);
  -o-transition: 0.4s cubic-bezier(0.165, 0.925, 0.51, 1.005);
  transition: 0.4s cubic-bezier(0.165, 0.925, 0.51, 1.005);

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.purchase-trigger span {
  padding: 17px 80px;
  color: #e85700;
  width: 246px;
  display: inline-block;
}
.purchase-trigger .bubble {
  position: absolute;
  background: #e85700;
  top: 0;
  border-radius: 50px;
  left: 0;
  height: 74px;
  width: 246px;
  z-index: -1;
}
.purchase-trigger.right .bubble {
  margin-left: 246px;
}

.purchase-trigger:not(.right) .annual {
  color: #fff;
}
.purchase-trigger.right .monthly {
  color: #fff;
}

.purchase ul {
  display: table;
  margin: 70px auto 0;
  width: 100%;
  max-width: 1100px;
}
.purchase li {
  display: table-cell;
  width: 33.333%;
  padding: 43px 0 0;
  -webkit-transition: 0;
  -webkit-transition: all 0.25s, color 0s;
  -moz-transition: all 0.25s, color 0s;
  -o-transition: all 0.25s, color 0s;
  transition: all 0.25s, color 0s;
  position: relative;
  z-index: 0;
  border: 1px solid #bbb;
}

.purchase li:first-child {
  position: relative;
  right: -1px;
}
.purchase li:last-child {
  position: relative;
  left: -1px;
}

.purchase li:hover {
  box-shadow: 0 13px 48px rgba(0, 0, 0, 0.2);
  z-index: 1;
  color: #fff;
  background: #e85700;
  border-color: #e85700;
  -webkit-transform: scale(1.05);
}

.purchase li * {
  -webkit-transition: 0 !important;
  -moz-transition: 0 !important;
  -o-transition: 0 !important;
  transition: 0 !important;
}

.purchase li:hover * {
  color: #fff !important;
  border-color: rgba(255, 255, 255, 0.27) !important;
}

.purchase li strong {
  font-size: 19px;
  text-transform: uppercase;
  color: #2f3740;
  letter-spacing: 2.4px;
  line-height: 45px;
  font-weight: 400;
  margin-bottom: 25px;
  display: inline-block;
}
.purchase-special{
  display: block;
  font-size: 19px;
  line-height: 30px;
}
.purchase ul .purchase-description {
  display: block;
  font-size: 19px;
  line-height: 30px;
}

.purchase .purchase-price {
  font-size: 70px;
  letter-spacing: 2px;
  padding-top: 20px;
  display: block;
  font-weight: 400;
  padding-bottom: 12px;
}
.purchase .purchase-button {
  text-transform: uppercase;
  font-size: 19px;
  color: #2f3740;
  text-decoration: none;
  line-height: 1;
  padding: 28px 0 24px;
  border-top: 1px solid #bbb;
  width: 100%;
  display: inline-block;
  margin-top: 6px;
  display: block;
}
.purchase li:hover .purchase-button {
  -webkit-transition: 0;
  -moz-transition: 0;
  -o-transition: 0;
  transition: 0;
}

.purchase ul a:hover {
  color: #e85700;
}

.purchase ul a,
.purchase ul a:hover .purchase-price,
.purchase ul a:hover .purchase-description {
  color: #6c6c6c;
}

//prices section
.prices {
  background: rgb(233, 223, 223);
  height: 800px;
}
.section-prices-div1 {
  display: flex;
  width: 80%;
  margin: auto;
  margin-top: 3rem;
}
.section-prices-div2 {
  display: flex;
  width: 80%;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 10rem;
}
.prices-inner-div1 {
  display: flex;
  border: 1px solid black;
  height: 90px;
  justify-content: space-between;
  align-items: center;
  margin-right: 7rem;
  width: 100%;
}
.prices-inner-div2 {
  display: flex;
  border: 1px solid black;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.content-section {
  margin-left: 1rem;
}
.price-section-inner {
  margin-right: 1rem;
}

// Mixins
@mixin centerItem {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
}

@mixin trans($t) {
  transition: all $t;
}

@mixin flex($flex: null, $dir: null, $alignItems: null, $just: null) {
  display: $flex;
  flex-direction: $dir;
  align-items: $alignItems;
  justify-content: $just;
}

// Base Styles

ul {
  list-style: none;
}

ul,
.info,
.button {
  @include flex($flex: flex, $dir: row);
}

// Services
.services-ptag {
  padding-top: 7rem;
  padding-bottom: 2rem;
  font-size: 50px;
  font-weight: bold;
}
.text-class-all{
  padding-bottom: 2rem;
 font-size: 20px;
}
.services {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  background: rgb(194, 186, 186);
  height: 1100px;
}
.section1-div2 {
  margin-top: 5rem;
}
.img1 {
  @include trans(0.5s);
  width: 350px;
  height: 300px;
  border: 0.3px solid white;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.info {
  @include centerItem;
  @include flex($alignItems: center, $just: space-between);
  @include trans(0.6s);
  box-shadow: 0 1.5em 6em rgba(0, 0, 0, 0.15);
  z-index: 1;
  background: white;
  height: 4em;
  bottom: 0em;
  p {
    margin: 1.1em 1.25em;
    color: lightslategray;
    font-weight: 400;
  }
}

.li1 {
  @include trans(0.5s);
  position: relative;
  margin: auto;
  &:hover {
    transform: scale(1.1);
    img {
      box-shadow: 0 1em 2em rgba(0, 0, 0, 0.2);
      transform: scale(1.1);
    }
    .info {
      bottom: -3.75em;
      margin-bottom:3rem;
    }
  }
}

.button {
  @include trans(0.5s);
  @include flex($alignItems: center, $just: center);
  height: 3.75em;
  width: 6em;
  background: tomato;
  color: white;
  &:before {
    @include trans(0.5s);
    content: "Order";
    transform: translatex(0.9em);
  }
  &:after {
    @include trans(0.5s);
    content: "Now";
    opacity: 0;
    transform: translatex(1.5em);
  }
  &:hover {
    cursor: pointer;
    background: lightslategray;
    &:before {
      transform: translatex(-1.5em);
      opacity: 0;
    }
    &:after {
      transform: translatex(-1.5em);
      display: inline;
      opacity: 1;
    }
  }
}
.holder {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: auto
}

//TEAM section
@import url("https://fonts.googleapis.com/css?family=Allura|Josefin+Sans");

@media (max-width: 1300px) {
  .gallery {
    height: 800px;
  }
  //Contact us
  .contactus-div2-inner-div1 input {
    width: 400px;
  }
  .contactus-div2-inner-div1 textarea {
    width: 400px;
  }
  //
  .holder {
    display: flex;
    flex-direction: row;
  }
  .services {
    height: 1600px;
  }
  .li1 {
    margin-top: 1rem;
  }
}
@media (max-width: 900px) {
  //contact us
  .contactus-div2-inner-div1 input {
    width: 300px;
  }
  .contactus-div2-inner-div1 textarea {
    width: 300px;
  }
  //
  .gallery {
    height: 1100px;
  }
  .colz {
    flex: 100%;
    max-width: 80%;
  }
  .holder {
    flex: 100%;
    max-width: 80%;
  }
  .services {
    height: 2200px;
  }
  .li1 {
    margin-top: 1rem;
  }
  .services-ptag {
    padding-top: 2.5rem;
  }
}
@media (max-width: 700px) {
  .contactus-div2-inner-div1 input {
    width: 250px;
  }
  .contactus-div2-inner-div1 textarea {
    width: 250px;
  }
}
@media screen and (max-width: 600px) {
  .contactus-div2-inner-div1 input {
    width: 200px;
  }
  .contactus-div2-inner-div1 textarea {
    width: 200px;
  }
  .gallery {
    height: 1300px;
  }
  .colz {
    flex: 100%;
    max-width: 100%;
  }
  .services-ptag {
  padding-top: 10rem;
  padding-bottom: 2rem;
  font-size: 50px;
  width:100%;
  font-weight: bold;
}
.contact-us {
  background: rgb(94, 89, 185);
  background: linear-gradient(
    90deg,
    rgba(94, 89, 185, 1) 9%,
    rgba(122, 145, 201, 1) 26%,
    rgba(69, 83, 182, 1) 46%,
    rgba(58, 168, 172, 1) 63%,
    rgba(128, 72, 195, 1) 87%
  );
  height: 170vh;
  width: 150%;
}

.services {
    height: 2400px;
    width:150%;
  }
  .prices {
  background: rgb(233, 223, 223);
  height: 800px;
  width:150%;
}
.cara-style{
  width:150%;
}
.purchase{
  width:150%;
}
.text-class-all{
  width:96%;
}
.purchase-special{
  display: block;
  font-size: 19px;
  line-height: 19.9px;
}
}

</style>
