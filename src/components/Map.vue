<template>
  <div style="position: relative">
     <section class="typer">
       <form @submit.prevent="" class="typer">
      <label for="Location">Location</label>
      <input class="input1" placeholder="Enter location" id="autocomplete" />
      <label for="cars">Choose a Service:</label>
      <select class="selector-class" name="cars" id="cars" v-model="userSelection" required>
        <option value="">None</option>
        <option value="Exterior Wash RS:(300)">Exterior Wash RS:(300)</option>
        <option value="Interior Wash RS:(600)">Interior Wash RS:(600)</option>
        <option value="Exterior and polish RS:(400)">Exterior and polish RS:(400)</option>
        <option value="Car Service RS:(dynamic)">Car Service RS:(dynamic)</option>
        <option value="Car Checkup RS:(dynamic)">Car Checkup RS:(dynamic)</option>
        <option value="Complete wash RS:(2500)">Complete wash RS:(2500)</option>
      </select>
      <Buttonz class="Order-button" :onClick="insertOrderIntoFirebase" type="submit">Order Now</Buttonz>
      <!-- <div id="current" >hero</div> -->
    </form>
    </section>

    <section class="map-styles" id="map">
    </section>
  </div>
</template>

 <script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyABgsIsFGl_sny2w3ZXMnmKdaHQeSRRKm4">
 </script>
<script>
import axios from "axios";
import Buttonz from "./Button";
import {firebaseAuth,dbMenuRef} from '../firebase'
export default {
  components: {
    Buttonz,
  },
  data(){
    return{
      MarkerDrag:'',
      userSelection:''
    }
  },
  mounted() {
    let autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete")
    );
    autocomplete.addListener("place_changed", () => {
      let place = autocomplete.getPlace();
      this.showUser(
        place.geometry.location.lat(),
        place.geometry.location.lng(),
        place.formatted_address
      );
    });
      navigator.geolocation.getCurrentPosition(
      (position) => {
        let latcord = position.coords.latitude;
        let longcord = position.coords.longitude;
        this.showUser(position.coords.latitude, position.coords.longitude);
        this.locationInWords(
          position.coords.latitude,
          position.coords.longitude
        );
      },
      (error) => {

      }
    );
  },
  methods: {
    insertOrderIntoFirebase() {
      if(this.userSelection==''){
        alert("select service option")
      }else{
       let vm=this
      firebaseAuth().onAuthStateChanged( (user)=> {
        if (user) {
           var choice=vm.userSelection
          var userPhoneNumberIs=user.phoneNumber
          var nameOfUserIs=this.$store.state.username
          var locationOfUserIs=this.$store.state.locationOfUser
          vm.$store.commit('setOrder',{userPhoneNumberIs,locationOfUserIs,nameOfUserIs,choice})
          dbMenuRef.doc(nameOfUserIs).set(this.$store.state.order)
          alert("Order Submitted As: "+choice)

        } else {
          alert("Sign in to Order")
        }
      });
      }
    },
    currentLocation() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let latcord = position.coords.latitude;
          let longcord = position.coords.longitude;
          this.showUser(position.coords.latitude, position.coords.longitude);
          this.locationInWords(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        (error) => {
          console.log("error", error.message);
        }
      );
    },
     locationInWords(lat, long) {
      axios
        .get(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            lat +
            "," +
            long +
            "&key=AIzaSyABgsIsFGl_sny2w3ZXMnmKdaHQeSRRKm4"
        )
        .then((response) => {
           const locationOfUser = response.data.results[0].formatted_address;
          this.$store.commit("setlocationOfUser", locationOfUser);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showUser(latitude, longitude, addressOfUser) {
      let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: new google.maps.LatLng(latitude, longitude),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      });
      var myMarker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map,
        draggable: true,
      });


        // Very imp!! (noticing location on drag marker)

      google.maps.event.addListener(myMarker, "dragend",  (evt)=> {
        let nono=evt.latLng.lat()
        let lolo=evt.latLng.lng()
        this.locationInWords(nono,lolo)

          // this.locationInWords(evt.latLng.lat(),evt.latLng.lng());
        // document.getElementById("current").innerHTML =
        //   "<p>Marker dropped: Current Lat: " +
        //   evt.latLng.lat() +
        //   " Current Lng: " +
        //   evt.latLng.lng() +
        //   "</p>";
      });

      this.$store.commit("setlocationOfUser", addressOfUser);
    },



  },
};
</script>

<style scoped>
.Order-button {
  position: relative;
  top: 40rem;
  left: -20rem;
}
#map {
  position:relative;
  top:0;
  z-index:1;
  width: 100%;
  height: 700px;
}
.input1 {
  height: 40px;
}
.selector-class{
  height: 40px;
}
label{
  font-size:15px;
  font-weight: bold;
}
.typer {
  position: relative;
  background: rgb(32, 204, 204);
  z-index: 999;
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
}
</style>