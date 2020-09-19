<template>

<div class="arskortfront">

  <v-card v-for="post in posts" :key="id"
    class="mx-auto"
    max-width="344"
    outlined
  >

    <v-list-item five-line>
      <v-list-item-content>
        <div class="overline">Árskort</div>
        <v-list-item-title class="headline mb-1">{{ post.nafn }}</v-list-item-title>
        <v-list-item-subtitle>
         <v-icon>mdi-home</v-icon> {{ post.heimili }} <br>
         <v-icon>mdi-nature-people</v-icon> {{ post.postnr }} {{ post.stadur }} <br>
         <v-icon>mdi-card-account-details-star-outline</v-icon> {{ post.kt }} <br>
         <span><v-icon>mdi-card-account-phone-outline</v-icon> {{ post.simi }}</span> <br>
         <span><v-icon>mdi-calendar-range</v-icon> <span class="gildir">Gildir til:</span> {{ post.gildir | moment('DD/MM/YYYY') }}</span>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
     <v-btn text><v-icon>mdi-smart-card-outline</v-icon>
     <span v-if="post.starfsmadur == 'odinn'">Óðinn</span>
     <span v-if="post.starfsmadur == 'robert'">Róbert</span>
     <span v-if="post.starfsmadur == 'oli'">Óli</span>
     <span v-if="post.starfsmadur == 'torvald'">Valdi</span>
     <span v-if="post.starfsmadur == 'steina'">Steina</span>
     <span v-if="post.starfsmadur == 'halla'">Halla</span>
     <span v-if="post.starfsmadur == 'ragna'">Ragna</span>
     </v-btn>
      <v-btn text>
       <v-icon>mdi-calendar-range</v-icon> {{ post.created_at | moment('timezone', 'Atlantic/Reykjavik', 'DD/MM/YYYY') }}
      </v-btn>
      <v-btn text><v-icon class="ml-16">mdi-clipboard-edit-outline</v-icon></v-btn>
    </v-card-actions>

  </v-card>

</div><!-- .arskortfront -->

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

}

},

computed: {

},

    async created() {
        axios.get(`http://localhost:1337/arskorts?_limit=2&_sort=created_at:desc`)
        //axios.get(`https://sundlaug.herokuapp.com/klormalingars?_sort=created_at:desc`)
        .then(response => {
        this.posts = response.data
        })
        .catch(e => {

        })
    },

methods: {

},

}

</script>