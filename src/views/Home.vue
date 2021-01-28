<template>
  <div>
    <the-nav-bar />
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        caption="GET YOUR CAR WASHED TODAY"
        img-src="../assets/images/coupe.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="CLEAN ALL THE RUST"
        img-src="../assets/images/car.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Exterior wash with Polishing"
        img-src="../assets/images/sports.jpg"
      ></b-carousel-slide>
    </b-carousel>
    <section>
      <!--Services Section-->
      <section id="services" class="services">
        <h1 class="services-ptag">SERVICES</h1>
        <p style="padding-bottom: 2rem; font-size: 20px">
          We provide all sort of car washing services including interior and
          exterior<br />
          wash with car checkup and servicing at door step.
        </p>
        <div class="section1-div1">
          <ul style="width: 80%; margin: auto" class="holder">
            <li class="li1">
              <img class="img1" src="../assets/images/wash1.jpg" />
              <div class="info">
                <p><b>Exterior wash</b></p>
                <div @click="gotomap()" class="button"></div>
              </div>
            </li>
            <li class="li1">
              <img
                class="img1"
                src="../assets/images/complete.jpg"
                alt="Logan Movie Poster"
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
                alt="Logan Movie Poster"
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
              <img class="img1" src="../assets/images/repair.jpg" />
              <div class="info">
                <p><b>Car Servicing</b></p>
                <div @click="gotomap()" class="button"></div>
              </div>
            </li>
            <li class="li1">
              <img
                class="img1"
                src="../assets/images/ss.jpg"
                alt="Logan Movie Poster"
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
                alt="Logan Movie Poster"
              />
              <div class="info">
                <p><b>Car Checkup</b></p>
                <div @click="gotomap()" class="button"></div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <!--About section-->
      <section id="testimonial" class="testimonials">
        <div class="inner">
          <h1>Testimonials</h1>
          <div class="border"></div>
          <div class="row">
            <div class="colz">
              <div class="testimonial">
                <img src="../assets/images/kiani.jpg" />
                <div class="name">Daniyal kiani</div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p>
                  I heard about this service and immediately wanted to check for
                  myself. I was blown away<br />
                  by the service they provide at lower cost than most of good
                  service stations<br />out there. Highly recommended.
                </p>
              </div>
            </div>
            <div class="colz">
              <div class="testimonial">
                <img src="../assets/images/mazahir.jpg" />
                <div class="name">Mazahir Hussain</div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <p>
                  Great service for such a reasonable price. Service was perfect
                  <Br />
                  I orderd exterior car wash which they provide for less the
                  average price in the market. Very good service indeed for a
                  company relaively new.
                </p>
              </div>
            </div>
            <div class="colz">
              <div class="testimonial">
                <img src="../assets/images/hassan.jpg" />
                <div class="name">Hassan Qureshi</div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p>
                  Absolutely great service. My car was so rusty and I did't have
                  much of hope to be honest because it's a new company, but I
                  was astonished by the quality of service they provided. Great
                  service recommended.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Happy customers-->
      <section class="Happy-Customers">
        <div class="container counter-section">
          <div class="row text-center items-align">
            <div class="col-md-3">
              <div class="icon-box"><i class="fa fa-briefcase"></i></div>
              <p class="counter" data-target="10">0</p>
              <p class="p1">PROJECTS COMPLETED</p>
            </div>

            <div class="col-md-3">
              <div class="icon-box"><i class="fa fa-trophy"></i></div>
              <p class="counter" data-target="9">0</p>
              <p class="p1">HAPPY CUSTOMERS</p>
            </div>

            <div class="col-md-3">
              <div class="icon-box"><i class="fa fa-users"></i></div>
              <p class="counter" data-target="10">0</p>
              <p class="p1">USERS</p>
            </div>
            <div class="col-md-3">
              <div class="icon-box"><i class="fa fa-coffee"></i></div>
              <p class="counter" data-target="95">0</p>
              <p class="p1">PEOPLE REACHED</p>
            </div>
          </div>
        </div>
      </section>
      <!-- map section-->
       <section class="mapzz">
        <Map/>
      </section>
      <!-- Price section-->
      <section class="prices">
        <h1 class="services-ptag">PRICES</h1>
        <p style="padding-bottom: 2rem; font-size: 20px">
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
            <h5 class="content-section">Car Checkup</h5>
            <h4 class="price-section-inner">Dynamic</h4>
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
              <ContactUsButton :onClick="sendMessage">Send Message</ContactUsButton>
            </div>
          </div>
        </div>
      </section>
      <!--Our team Section-->
      <!-- <section class="gallery" style="background: #81c644">
        <div class="wrapper">
          <h1 style="padding-top: 6rem">Our Team</h1>
          <div class="team">
            <div class="team_member">
              <div class="team_img">
                <img
                  class="img-round"
                  src="../assets/images/amir.jpg"
                  alt="Team_image"
                />
              </div>
              <h3>Amir Afzal</h3>
              <p class="role">Chief Administrative Officer (CAO)</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                quaerat tempora, voluptatum quas facere dolorum aut cumque nihil
                nulla harum nemo distinctio quam blanditiis dignissimos.
              </p>
            </div>
            <div class="team_member">
              <div class="team_img">
                <img
                  class="img-round"
                  src="../assets/images/danish.jpg"
                  alt="Team_image"
                />
              </div>
              <h3>Dasnish Afzal</h3>
              <p class="role">Marketing Lead</p>
              <p>
                A top notch business consultent with over 10 years of experiance in Marketing.
              </p>
            </div>
            <div class="team_member">
              <div class="team_img">
                <img
                  class="img-round"
                  src="../assets/images/umer.jpg"
                  alt="Team_image"
                />
              </div>
              <h3>Umer afzal</h3>
              <p class="role">Chief Technical Officer (CTO)</p>
              <p>
                Computer scientist with a self entreprenureai
              </p>
            </div>
          </div>
        </div>
      </section> -->
    </section>
    <!-- Footer section -->
    <the-footer />
  </div>
</template>
<script>
import TheNavBar from "../components/TheNavBar.vue";
import TheFooter from "@/components/TheFooter";
import ContactUsButton from '@/components/ContactUsButton'
import Map from "../components/Map.vue";
import { orderPlacedRef } from "../firebase";
export default {
  components: {
    TheNavBar,
    TheFooter,
    ContactUsButton,
     Map
  },
  data() {
    return {
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
  mounted() {
    const sectionOne = document.querySelector(".counter");
    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-200px",
    };
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.some((entry) => {
        //
        if (entry.isIntersecting === true) {
          const counters = document.querySelectorAll(".counter");
          const speed = 200;
          counters.forEach((counter) => {
            const updateCount = () => {
              const target = +counter.getAttribute("data-target");
              const count = +counter.innerText;

              const inc = target / speed;
              if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
              } else {
                return;
              }
            };
            updateCount();
          });
        }
      });
    }, options);
    observer.observe(sectionOne);

    // window.addEventListener("scroll", function () {
    //   var header = document.querySelector("header");
    //   header.classList.toggle("sticky", window.scrollY > 60);
    // });

    // const counters = document.querySelectorAll(".counter");
    // const speed = 200;
    // counters.forEach((counter) => {
    //   const updateCount = () => {
    //     const target = +counter.getAttribute("data-target");
    //     const count = +counter.innerText;

    //     const inc = target / speed;
    //     if (count < target) {
    //       counter.innerText = Math.ceil(count + inc);
    //       setTimeout(updateCount, 1);
    //     } else {
    //       return;
    //     }
    //   };
    //   updateCount();
    // });
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
        alert("please fil the form");
      } else {
        var name = this.nameOfUser.val;
        var email = this.emailOfUser.val;
        var message = this.messageOfUser.val;
        this.$store.commit("setEmailFromUser", { email, message });
        orderPlacedRef.doc(name).set(this.$store.getters.getEmailFromUser);
        alert("message sent");
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

//Happy Customers
.Happy-Customers {
  background: black;
  position:relative;
}
.items-align {
  padding-top: 15rem;
  padding-bottom: 10rem;
}
.counter-section {
  margin: 0 auto;
  color: white;
}
.icon-box {
  border: 1px solid #fff;
  height: 100px;
  width: 100px;
  margin: 20px auto;
  transform: rotate(45deg);
}
.icon-box .fa {
  font-size: 40px;
  margin: 25px auto;
  color: #ffc800;
  transform: rotate(-45deg);
}
.p1 {
  font-size: 20px;
}
.counter {
  font-size: 80px;
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
}

// about us section Or testimonial
.testimonials {
  padding: 40px 0;
  background: #f1f1f1;
  color: #434343;
  text-align: center;
}
.inner {
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
  padding: 0 20px;
}
.border {
  width: 160px;
  height: 5px;
  background: red;
  margin: 26px auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.colz {
  flex: 33.33%;
  max-width: 33.33%;
  box-sizing: border-box;
  padding: 15px;
}
.testimonial {
  background: #fff;
  padding: 30px;
}
.testimonial img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.name {
  font-size: 20px;
  text-transform: uppercase;
  margin: 20px 0;
}
.stars {
  color: #6ab04c;
  margin-bottom: 20px;
}
//TEAM section
@import url("https://fonts.googleapis.com/css?family=Allura|Josefin+Sans");

.gallery {
  height: 700px;
}
.wrapper {
  height: 600px;
}

.wrapper h1 {
  font-family: "Allura", cursive;
  font-size: 52px;
  margin-bottom: 60px;
  text-align: center;
}
.img-round {
  border-radius: 50%;
}
.team {
  display: flex;
  padding-top: 1rem;
  justify-content: center;
  width: auto;
  text-align: center;
  flex-wrap: wrap;
}

.team .team_member {
  background: #fff;
  margin: 5px;
  margin-bottom: 50px;
  width: 300px;
  padding: 20px;
  line-height: 20px;
  color: #8e8b8b;
  position: relative;
}

.team .team_member h3 {
  color: #81c644;
  font-size: 26px;
  margin-top: 50px;
}

.team .team_member p.role {
  color: #ccc;
  margin: 12px 0;
  font-size: 12px;
  text-transform: uppercase;
}

.team .team_member .team_img {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #fff;
}

.team .team_member .team_img img {
  width: 100px;
  height: 100px;
  padding: 5px;
}
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
}
</style>
