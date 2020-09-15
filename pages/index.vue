<template>

  <div class="lenda">

  <div class="toppart" v-for="post in posts">

    <v-row justify="center">

    <v-col cols="12" sm="12">
      <v-card>
        <v-card-title class="teal darken-1">
          <span class="headline white--text"> <v-icon>mdi-shield-account</v-icon> {{ post.nafn }}</span>

          <v-spacer></v-spacer>

          <v-btn dark icon>
            <v-icon>mdi-card-account-mail-outline</v-icon> Árskort
          </v-btn>
          
        </v-card-title>

        <v-list>

          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ post.heimili }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>

              <v-icon>mdi-message-text</v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>mdi-map-marker</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ post.postnr }} {{ post.stadur }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-action>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>mdi-cellphone-android</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>7546598</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>mdi-shield-account</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ post.kt }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      </v-card>
    </v-col>

    </v-row>
  

  <div class="max-w-sm w-full lg:max-w-full lg:flex">
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
        <v-icon>mdi-card-account-mail-outline</v-icon>
         <span class="pl-2">Árskort</span>
      </p>
      <p class="text-gray-700 text-base"><b>Nafn:</b> {{ post.nafn }}</p>
      <p class="text-gray-700 text-base"><b>Kennitala:</b> {{ post.kt }}</p>
      <p class="text-gray-700 text-base"><b>Heimilisfang:</b> {{ post.heimili }}</p>
      <p class="text-gray-700 text-base"><b>Staður:</b> {{ post.stadur }}</p>
      <p class="text-gray-700 text-base"><b>Póstnr:</b> {{ post.postnr }}</p>
      <p class="text-gray-700 text-base"><b>Símanr:</b> {{ post.simi }}</p>
    </div>

    <div class="flex items-center"> 

      <span v-if="post.starfsmadur == 'odinn'"><img class="w-10 h-10 rounded-full mr-4" v-bind:src="odinn"></span>
      <span v-if="post.starfsmadur == 'robert'"><img class="w-10 h-10 rounded-full mr-4" v-bind:src="robert"></span>
      <span v-if="post.starfsmadur == 'oli'"><img class="w-10 h-10 rounded-full mr-4" v-bind:src="oli"></span>
      <span v-if="post.starfsmadur == 'torvald'"><img class="w-10 h-10 rounded-full mr-4" v-bind:src="torvald"></span>
      <span v-if="post.starfsmadur == 'steina'"><img class="w-10 h-10 rounded-full mr-4" v-bind:src="steina"></span>
      <span v-if="post.starfsmadur == 'halla'"><img class="w-10 h-10 rounded-full mr-4" v-bind:src="halla"></span>
      <span v-if="post.starfsmadur == 'ragna'"><img class="w-10 h-10 rounded-full mr-4" v-bind:src="ragna"></span>
      
      <div class="text-sm">
        <p class="sm text-gray-900 leading-none" v-if="post.starfsmadur == 'odinn'"> <v-icon>mdi-account</v-icon>Óðinn</p>
        <p class="sm text-gray-900 leading-none" v-if="post.starfsmadur == 'robert'"> <v-icon>mdi-account</v-icon>Róbert</p>
        <p class="sm text-gray-900 leading-none" v-if="post.starfsmadur == 'oli'"> <v-icon>mdi-account</v-icon>Óli</p>
        <p class="sm text-gray-900 leading-none" v-if="post.starfsmadur == 'torvald'"> <v-icon>mdi-account</v-icon>Þorvaldur</p>
        <p class="sm text-gray-900 leading-none" v-if="post.starfsmadur == 'steina'"> <v-icon>mdi-account</v-icon>Steinunn Valdís</p>
        <p class="sm text-gray-900 leading-none" v-if="post.starfsmadur == 'halla'"> <v-icon>mdi-account</v-icon>Halla</p>
        <p class="sm text-gray-900 leading-none" v-if="post.starfsmadur == 'ragna'"> <v-icon>mdi-account</v-icon>Ragna</p>
        <p class="sgray text-gray-600">
          <v-icon>mdi-calendar-cursor</v-icon>
            {{ post.created_at | moment('timezone', 'Atlantic/Reykjavik', 'dd') }}
            {{ post.created_at | moment('DD') }}
            {{ post.created_at | moment('MMM') }}
            <v-icon class="clock">mdi-clock</v-icon>
            {{ post.created_at | moment('H:mm') }}
        </p>
      </div>

    </div>

  </div>
</div>


  </div><!-- .toppart -->

  </div><!-- .lenda -->

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

},// computed

filters: {

},// filters

    async created() {
    axios.get(`http://localhost:1337/arskorts?_sort=created_at:desc`)
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