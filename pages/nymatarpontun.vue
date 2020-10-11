<template>

<div class="nymatarpontun">

<v-container>

  <v-row>

  <v-col cols="12">

  <v-card
  elevation="5"
  outlined
  class="p-5"
  >
  
  <p class="mt-5"><v-icon>mdi-silverware</v-icon>Veitingastaður
    <select class="uk-select uk-form-success" v-model="stadur">
      <option value="kk">KK Restaurant</option>
      <option value="hw">Hard Wok</option>
      <option value="gt">Gott í gogginn</option>
      </select>
    </p>

    <p class="mt-5"><v-icon>mdi-earth</v-icon>Vakt
    <select class="uk-select uk-form-success" v-model="vakt">
      <option value="fyrri">Fyrri vakt</option>
      <option value="seinni">Seinni vakt</option>
      </select>
    </p>

    <p><v-icon>mdi-account-box</v-icon> Starfsmaður
    <select class="uk-select uk-form-danger" v-model="starfsmadur">
     <option class="odinn" value="odinn">Óðinn</option>
     <option class="robert" value="robert">Róbert</option>
     <option class="oli" value="oli">Óli</option>
     <option class="torvald" value="torvald">Þorvaldur</option>
     <option class="steina" value="steina">Steina</option>
     <option class="halla" value="halla">Halla</option>
     <option class="ragna" value="ragna">Ragna</option>
    </select>
    </p>

    <v-btn class="ml-2" depressed color="error"><n-link style="color:white;text-decoration:none;" to="/arskort">Til baka</n-link></v-btn>

    <v-btn @click="nyPontun" depressed color="primary">Vista breytingu</v-btn>

    </v-card>

    </v-col>
  
    </v-row>

</v-container>

</div><!-- .nymatarpontun -->


</template>

<script>
import axios from 'axios'
import strapi from '~/utils/Strapi'
import { mapMutations } from 'vuex'
import { NotificationProgrammatic as Notification } from 'buefy'

export default {

data () {

return {
 posts: [],
 stadur: null,
 vakt: null,
 starfsmadur: null,

}

},

computed: {

},

methods: {
            async nyPontun(e) {
                e.preventDefault();
                let currentObj = this;
                axios.post('http://localhost:1337/pantanirs', {
                //axios.post('https://sundlaug.herokuapp.com/klormalingars', {
                    stadur: this.stadur,
                    vakt: this.vakt,
                    starfsmadur: this.starfsmadur,
                })
                .then(function (response) {
                    currentObj.output = response.data;

                    Notification.open({
                    message: 'Klórmæling Vistuð! <br> Eigðu Góðan dag😉',
                    type: 'is-success',
                    position: 'is-top',
                    })

                })
                .catch(function (error) {
                    currentObj.output = error;

                    Notification.open({
                    message: 'Þú hefur ekki leyfi til að Posta þessari Klórmælingu!',
                    type: 'is-danger',
                    position: 'is-top',
                    })

                });
            },
             ...mapMutations({
            setUser: 'auth/setUser'
            })
        },

}

</script>