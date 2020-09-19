<template>

<div class="lenda">

  <div class="matfront uk-align-right">

  <v-container>
    <v-row no-gutters>

        <span v-for="post in posts">

            <v-col cols="12" sm=12>

               <div class="bg-teal-100 border-t-4 border-blue-180 rounded-b text-teal-900 px-4 shadow-lg" role="alert">
                  
                  <div class="flex">

                     <div class="py-1">
                        <span v-if="post.starfsmadur == 'odinn'">
                        <img width="40" height="40" src="https://lh3.googleusercontent.com/a-/AAuE7mB4dRHKqhaTxYA9CawE2YOf7Scvb5_EEFGola1SGEo=s96-cc"></img>
                        </span>

                         <span v-if="post.starfsmadur == 'robert'">
                        <img class="rounded-full h-10 w-10 flex items-center justify-center" width="40" height="40" src="https://scontent.frkv2-1.fna.fbcdn.net/v/t31.0-8/1493444_1377246689198452_1488600122_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=1DfxRFdhUuUAX-vu4y9&_nc_ht=scontent.frkv2-1.fna&oh=c20909f33ca0099b65d5c76319b69ffb&oe=5F869BA2"></img>
                        </span>

                         <span v-if="post.starfsmadur == 'oli'">
                        <img class="rounded-full h-10 w-10 flex items-center justify-center"  width="40" height="40" src="https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-1/p100x100/54521146_10156401125097602_6650388366841872384_n.jpg?_nc_cat=105&_nc_oc=AQnYWEC6NV8s7ACHSfU4JVkypXCg7eKE0JAl5a8GWm1aCoQg5wGw1WrPsy09kgd8SOY&_nc_ht=scontent.frkv2-1.fna&oh=5ae5d74131a5e531601506455a70fb5a&oe=5E84D0F1"></img>
                        </span>

                         <span v-if="post.starfsmadur == 'torvald'">
                        <img class="rounded-full h-10 w-10 flex items-center justify-center" width="40" height="40" src="https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-1/p100x100/12998769_10206297823309072_533707040792698881_n.jpg?_nc_cat=110&_nc_oc=AQnqczaJAHhFgxRvyopVA_ZonW81JKntg6F3wSl4YXSPPo7uFbyz-Xqwnrlmc6wjquE&_nc_ht=scontent.frkv2-1.fna&oh=9341c777686b46d4a45b30399c6eb29f&oe=5E4DEC99"></img>
                        </span>

                         <span v-if="post.starfsmadur == 'steina'">
                        <img class="rounded-full h-10 w-10 flex items-center justify-center" width="40" height="40" src="https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-9/107006745_10216361647170515_7033380553091762226_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=Cw_Z7ryC0CYAX-RkjFG&_nc_oc=AQnoh5M_Wi5NVGJ6qQyiYSTPkUU52Wx2WOmjTdTp3qp9Au2rCcB-HHwBtisT3uSqCas&_nc_ht=scontent.frkv2-1.fna&oh=7a4eeaf19b39b70cecb1183be32f5487&oe=5F86E135"></img>
                        </span>

                         <span v-if="post.starfsmadur == 'halla'">
                        <img class="rounded-full h-10 w-10 flex items-center justify-center" width="40" height="40" src="https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-9/67403435_10157252483601832_2675199781374001152_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=RoUVzUcWHaoAX_9eJPD&_nc_ht=scontent.frkv2-1.fna&oh=bfe481fb21d18df9935ddb8c691050fb&oe=5F85AC5A"></img>
                        </span>

                         <span v-if="post.starfsmadur == 'ragna'">
                        <img class="rounded-full h-10 w-10 flex items-center justify-center" width="40" height="40" src="https://scontent.frkv2-1.fna.fbcdn.net/v/t31.0-1/p100x100/13613184_10205990141146999_3445103564979179267_o.jpg?_nc_cat=108&_nc_oc=AQk71-ivWS1NpHRU6fRPzFFU06a-VxudBffqnKIkJSM1Squnqi-d0tWkC_YYr5FRHqk&_nc_ht=scontent.frkv2-1.fna&oh=fb9769640cfb4c36479c63ae61b3c6eb&oe=5E4BE8B5"></img>
                        </span>
                     </div>

                     <div>
                        <p class="pl-2 pt-2">
                           <v-icon>mdi-silverware</v-icon>
                           <span v-if="post.stadur == 'kk'">KK restaurant</span>
                           <span v-else="post.stadur == 'hw'">Hard Wok</span>
                           <span v-else="post.stadur == 'gt'">Grettistak</span>
                        </p>
                        <p class="text-sm">
                           <v-icon>mdi-calendar-cursor</v-icon>
                           {{ post.created_at | moment('ddd DD MMM') }} /
                           <span v-if="post.vakt == 'fyrri'">Fyrri Vakt</span>
                           <span v-if="post.vakt == 'seinni'">Seinni Vakt</span>
                        </p>
                     </div>

                  </div><!-- .flex -->
               </div>

                  </v-col>

               </span>

           </v-row>
         </v-container>

  </div><!-- .matfront -->

<div class="kortfront uk-align-left">

    <skolakortfront />

    <arskortfront />

  </div><!-- .kortfront -->


</div><!-- .lenda -->

</template>

<script>
import axios from 'axios'
import strapi from '~/utils/Strapi'
import { mapMutations } from 'vuex'
import { NotificationProgrammatic as Notification } from 'buefy'
import arskortfront from './arskortfront'
import skolakortfront from './skolakortfront'

export default {

components: {
 arskortfront,
 skolakortfront,
},

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

    },// computed

     filters: {

     },// filters

    async created() {
    axios.get(`http://localhost:1337/maturs?_sort=created_at:desc`)
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