<template>
<!-- <div v-if="$fetchState.pending">Fetching post #{{$route.params.id}}...</div> -->
  

<div class="matid">



  <div>
    <h1 align="center" style="font-size:24px;margin:0;">Breyta Matarpöntun</h1> <br>

    <p><v-icon>mdi-silverware</v-icon> Veitingastaður
    <select class="uk-select uk-form-danger" v-model="post.stadur">
     <option class="odinn" value="kk">KK Restaurant</option>
     <option class="robert" value="hw">Hard wok</option>
     <option class="oli" value="gt">Gott í gogginn</option>
    </select>
    </p>

    <p><v-icon>mdi-select-group</v-icon> Vakt
    <select class="uk-select uk-form-danger" v-model="post.vakt">
     <option class="odinn" value="fyrri">Fyrri vakt</option>
     <option class="robert" value="seinni">Seinni vakt</option>
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

    <v-btn class="ml-2" depressed color="error"><n-link style="color:white;text-decoration:none;" to="/arskort">Til baka</n-link></v-btn>

    <v-btn @click="editMatur" depressed color="primary">Vista breytingu</v-btn>

  </div>

</div><!-- .matid -->

</template>

<script>
import axios from 'axios'
import strapi from '~/utils/Strapi'
import { mapMutations } from 'vuex'
import { NotificationProgrammatic as Notification } from 'buefy'


  export default {
    name: "matur",

    data() {
      return {
        post: {},
        stadur: null,
        vakt: null,
        starfsmadur: null,
      }
    },

    async fetch() {
    axios.get(`http://localhost:1337/maturs/${this.$route.params.id}`)
    .then(response => {
    this.post = response.data
    })
    .catch(e => {

    })
    },

    methods: {

    async editMatur(e) {
        e.preventDefault();
        let currentObj = this;
        const res = await axios.put(`http://localhost:1337/maturs/${this.$route.params.id}`, {
          stadur: this.post.stadur,
          vakt: this.post.vakt,
          starfsmadur: this.post.starfsmadur,
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
        message: 'Þú hefur ekki leyfi til að breyta þessari Matarpöntun!',
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