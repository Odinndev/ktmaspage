<template>

  <div class="skolakort">

    <section>
         <b-field grouped message="Leita að nafni?...">
             <b-input placeholder="Leita að Skólakorti..." expanded v-model="search"></b-input>
             <p class="control">
                 <button class="button is-primary"><v-icon>mdi-book-search-outline</v-icon></button>
             </p>
         </b-field>
     </section>

     <v-container>
      <v-row no-gutters>

  <v-card v-for="post in filteredList" :key="post.id"
    class="mx-auto"
    max-width="344"
    min-height="218"
    max-height="218"
    outlined
  >

    <div v-if="post.status == 'pontun'">

    <v-col cols="12" sm="12">

    <v-list-item five-line>
      <v-list-item-content>
        <div class="overline">Skólakort 
        <n-link :to="`/skort/${post.id}`"><v-icon class="ml-16">mdi-clipboard-edit-outline</v-icon></n-link></div>
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
      <v-btn text>
        <span class="sund" v-if="post.status == 'sund'">Sundlaug</span>
        <span class="uti" v-if="post.status == 'uti'">Korthafi</span>
        <span class="pontun" v-if="post.status == 'pontun'">Í Pöntun</span>
      </v-btn>
    </v-card-actions>

  </v-col>

  </div>

  </v-card>

     </v-row>
   </v-container>

  </div><!-- .skolakort -->

</template>

<script>
import axios from 'axios'
import strapi from '~/utils/Strapi'
import { mapMutations } from 'vuex'
import { NotificationProgrammatic as Notification } from 'buefy'

export default {

data() {

return {
  posts: [],
  search: '',
  // starsmennn myndir
  odinn: 'https://lh3.googleusercontent.com/a-/AAuE7mB4dRHKqhaTxYA9CawE2YOf7Scvb5_EEFGola1SGEo=s96-cc',
  robert: 'https://scontent.frkv2-1.fna.fbcdn.net/v/t31.0-8/1493444_1377246689198452_1488600122_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=1DfxRFdhUuUAX-vu4y9&_nc_ht=scontent.frkv2-1.fna&oh=c20909f33ca0099b65d5c76319b69ffb&oe=5F869BA2',
  oli: 'https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-1/p100x100/54521146_10156401125097602_6650388366841872384_n.jpg?_nc_cat=105&_nc_oc=AQnYWEC6NV8s7ACHSfU4JVkypXCg7eKE0JAl5a8GWm1aCoQg5wGw1WrPsy09kgd8SOY&_nc_ht=scontent.frkv2-1.fna&oh=5ae5d74131a5e531601506455a70fb5a&oe=5E84D0F1',
  torvald: 'https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-1/p100x100/12998769_10206297823309072_533707040792698881_n.jpg?_nc_cat=110&_nc_oc=AQnqczaJAHhFgxRvyopVA_ZonW81JKntg6F3wSl4YXSPPo7uFbyz-Xqwnrlmc6wjquE&_nc_ht=scontent.frkv2-1.fna&oh=9341c777686b46d4a45b30399c6eb29f&oe=5E4DEC99',
  steina: 'https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-9/107006745_10216361647170515_7033380553091762226_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=Cw_Z7ryC0CYAX-RkjFG&_nc_oc=AQnoh5M_Wi5NVGJ6qQyiYSTPkUU52Wx2WOmjTdTp3qp9Au2rCcB-HHwBtisT3uSqCas&_nc_ht=scontent.frkv2-1.fna&oh=7a4eeaf19b39b70cecb1183be32f5487&oe=5F86E135',
  halla: 'https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-9/67403435_10157252483601832_2675199781374001152_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=RoUVzUcWHaoAX_9eJPD&_nc_ht=scontent.frkv2-1.fna&oh=bfe481fb21d18df9935ddb8c691050fb&oe=5F85AC5A',
  ragna: 'https://scontent.frkv2-1.fna.fbcdn.net/v/t31.0-1/p100x100/13613184_10205990141146999_3445103564979179267_o.jpg?_nc_cat=108&_nc_oc=AQk71-ivWS1NpHRU6fRPzFFU06a-VxudBffqnKIkJSM1Squnqi-d0tWkC_YYr5FRHqk&_nc_ht=scontent.frkv2-1.fna&oh=fb9769640cfb4c36479c63ae61b3c6eb&oe=5E4BE8B5',

}// return

},// data

    computed: {
    filteredList() {
     return this.posts.filter(post => {
     return post.nafn.toLowerCase().includes(this.search.toLowerCase())
          })
        }
    },// computed

filters: {

},// filters

    async fetch() {
    axios.get(`http://localhost:1337/skolakorts?_sort=created_at:desc`)
    //axios.get(`https://sundlaug.herokuapp.com/klormalingars?_sort=created_at:desc`)
    .then(response => {
    this.posts = response.data
    })
    .catch(e => {

    })
    },

    methods: {

    },// methods

}// export default

</script>