<template>
<!-- <div v-if="$fetchState.pending">Fetching post #{{$route.params.id}}...</div> -->
  

<div class="arsid">

<v-container>

  <v-row>

  <v-col cols="12">

  <v-card
  elevation="5"
  outlined
  class="p-5"
  >

  <div>
    <h1 align="center" style="font-size:24px;margin:0;">Breyta Árskorti</h1> <br>

    <!-- <span>Skólakort nr:{{$route.params.id}} </span><br> -->
    <!-- <v-text-field label="Nafn" v-model="post.nafn" hide-details="auto" ></v-text-field> -->
    <v-text-field
     v-model="post.nafn"
     label="Nafn"
     prepend-icon="mdi-account-circle"
    ></v-text-field>
    <!-- <v-text-field label="Heimili" v-model="post.heimili" hide-details="auto" ></v-text-field> -->
    <v-text-field
     v-model="post.heimili"
     label="Heimili"
     prepend-icon="mdi-home"
    ></v-text-field>
    <!-- <v-text-field label="Póstnr" v-model="post.postnr" hide-details="auto" ></v-text-field> -->
    <v-text-field
     v-model="post.postnr"
     label="Póstnr"
     prepend-icon="mdi-mailbox-up"
    ></v-text-field>
    <!-- <v-text-field label="Staður" v-model="post.stadur" hide-details="auto" ></v-text-field> -->
    <v-text-field
     v-model="post.stadur"
     label="Staður"
     prepend-icon="mdi-map-marker"
    ></v-text-field>
    <!-- <v-text-field label="Kennitala" v-model="post.kt" hide-details="auto" ></v-text-field> -->
    <v-text-field
     v-model="post.kt"
     label="Kennitala"
     prepend-icon="mdi-smart-card"
    ></v-text-field>
    <!-- <v-text-field label="Sími" v-model="post.simi" hide-details="auto" ></v-text-field> -->
    <v-text-field
     v-model="post.simi"
     label="Sími"
     prepend-icon="mdi-cellphone"
    ></v-text-field>
    <!-- <v-text-field label="Núverandi gildistími" disabled v-model="post.gildir"></v-text-field> -->
    <v-text-field
     disabled
     v-model="post.gildir"
     label="Núverandi Gildistími"
     prepend-icon="mdi-calendar"
    ></v-text-field>
    <b-datepicker
    v-model="post.gildir"
    placeholder="Nýr Gildistími"
    icon="calendar-today"
    :locale="locale"
    editable>
    </b-datepicker>

    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-0">

    <p class="mt-5"><v-icon>mdi-earth</v-icon>Staðsetning korts
    <select class="uk-select uk-form-success" v-model="post.status">
      <option value="sund">Geymt í Sundlaug</option>
      <option value="uti">Hjá Korthafa</option>
      <option value="pontun">Í Pöntun</option>
      </select>
    </p>  
    <p><v-icon>mdi-account-box</v-icon> Starfsmaður
    <select class="uk-select uk-form-danger" v-model="post.starfsmadur">
     <option class="odinn" value="odinn">Óðinn</option>
     <option class="robert" value="robert">Róbert</option>
     <option class="oli" value="oli">Óli</option>
     <option class="torvald" value="torvald">Þorvaldur</option>
     <option class="steina" value="steina">Steina</option>
     <option class="halla" value="halla">Halla</option>
     <option class="ragna" value="ragna">Ragna</option>
    </select>
    </p>

    </div><!-- grid -->

    <v-btn class="ml-2" depressed color="error"><n-link style="color:white;text-decoration:none;" to="/arskort">Til baka</n-link></v-btn>

    <v-btn @click="editAkort" depressed color="primary">Vista breytingu</v-btn>



  </div>

  </v-card>

    </v-col>
  
    </v-row>

</v-container>

</div><!-- .arsid -->

</template>

<script>
import axios from 'axios'
import strapi from '~/utils/Strapi'
import { mapMutations } from 'vuex'
import { NotificationProgrammatic as Notification } from 'buefy'


  export default {
    name: "akort",

    data() {
      return {
        post: {},
        output: '',
        nafn: null,
        heimili: null,
        postnr: null,
        stadur: null,
        kt: null,
        simi: null,
        gildir: null,
        status: null,
        locale: undefined // Browser locale
      }
    },

     computed: {
        sampleFormat() {
            const dtf = new Intl.DateTimeFormat(this.locale, { timezome: 'GMT' })
            return dtf.format(new Date(2000, 11, 25, 12))
        }
    },

    async fetch() {
    axios.get(`http://localhost:1337/arskorts/${this.$route.params.id}`)
    .then(response => {
    this.post = response.data
    })
    .catch(e => {

    })
    },

    methods: {

    async editAkort(e) {
        e.preventDefault();
        let currentObj = this;
        const res = await axios.put(`http://localhost:1337/arskorts/${this.$route.params.id}`, {
          nafn: this.post.nafn,
          heimili: this.post.heimili,
          postnr: this.post.postnr,
          stadur: this.post.stadur,
          kt: this.post.kt,
          simi: this.post.simi,
          gildir: this.post.gildir,
          status: this.post.status,
        })
      .then(function (response) {
        currentObj.output = response.data;

        Notification.open({
        message: 'Breyting vistuð! Eigðu Góðan dag😉',
        type: 'is-success',
        position: 'is-top',
        })

        })
        .catch(function (error) {
        currentObj.output = error;

        Notification.open({
        message: 'Þú hefur ekki leyfi til að breyta þessu Skólakorti!',
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