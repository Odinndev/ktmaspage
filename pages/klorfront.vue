<template>

<div class="klorfront">

<div v-for="post in posts">

 <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"> 

    <div class="text-center py-4 lg:px-4">
  <div class="p-2 bg-gray-400 items-center text-gray-800 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
    <span class="flex rounded-full bg-gray-500 uppercase px-2 py-1 text-xs font-bold mr-3">{{ post.created_at | moment("H:mm") }}</span>
    <span class="font-semibold mr-2 text-left flex-auto">{{ post.created_at | moment('timezone', 'Atlantic/Reykjavik', 'DD/MM/YYYY') }}</span>
    
  </div>
</div>

  <div class="text-center py-4 lg:px-4">
  <div class="p-2 bg-gray-400 items-center text-green-800 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
    <span class="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3">Sundlaug</span>
    <span class="font-semibold mr-2 text-left flex-auto">{{ post.hitilaug }}<span style="color:gray;">°c</span></span>
    
  </div>
</div>

  <div class="text-center py-4 lg:px-4">
  <div class="p-2 bg-gray-400 items-center text-orange-800 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
    <span class="flex rounded-full bg-orange-500 uppercase px-2 py-1 text-xs font-bold mr-3">Kaldur pottur</span>
    <span class="font-semibold mr-2 text-left flex-auto">{{ post.hitikaldur }}<span style="color:gray;">°c</span></span>
    
  </div>
</div>

  <div class="text-center py-4 lg:px-4">
  <div class="p-2 bg-gray-400 items-center text-red-800 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
    <span class="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">Heitur pottur</span>
    <span class="font-semibold mr-2 text-left flex-auto">{{ post.hitiheitur }}<span style="color:gray;">°c</span></span>
    
  </div>
</div>

  <div class="text-center py-4 lg:px-4">
  <div class="p-2 bg-gray-400 items-center text-gray-800 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
    <span class="flex rounded-full bg-gray-500 uppercase px-2 py-1 text-xs font-bold mr-3">Klórmagn</span>
    <span class="font-semibold mr-2 text-left flex-auto">
      <span v-if="post.klormagn == '1000'">1T</span>
      <span v-if="post.klormagn == '100'">Panta Klór</span>
      <span v-else>{{ post.klormagn }}<span style="color:gray;">L</span> </span>
    </span>
    
  </div>
</div>

  <div class="text-center py-4 lg:px-4">
  <div class="p-2 bg-gray-400 items-center text-yellow-800 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
    <span class="flex rounded-full bg-yellow-500 uppercase px-2 py-1 text-xs font-bold mr-3">Panta klór eftir:</span>
    <span class="font-semibold mr-2 text-left flex-auto">
      <span v-if="post.klormagn == '1000'">30+ daga</span>
      <span v-if="post.klormagn == '900'">30+ daga</span>
      <span v-if="post.klormagn == '800'">30+ daga</span>
      <span v-if="post.klormagn == '700'">30+ daga</span>
      <span v-if="post.klormagn == '600'">30+ daga</span>

      <span v-if="post.klormagn == '500'">20+ daga</span>
      <span v-if="post.klormagn == '490'">15+ daga</span>
      <span v-if="post.klormagn == '480'">15+ daga</span>
      <span v-if="post.klormagn == '470'">15+ daga</span>
      <span v-if="post.klormagn == '460'">15+ daga</span>
      <span v-if="post.klormagn == '450'">15+ daga</span>
      <span v-if="post.klormagn == '440'">15+ daga</span>
      <span v-if="post.klormagn == '430'">15+ daga</span>
      <span v-if="post.klormagn == '420'">15+ daga</span>
      <span v-if="post.klormagn == '410'">15+ daga</span>
      <span v-if="post.klormagn == '400'">15+ daga</span>

      <span v-if="post.klormagn == '300'">10 daga</span>
      <span v-if="post.klormagn == '290'">9 daga</span>
      <span v-if="post.klormagn == '280'">9 daga</span>
      <span v-if="post.klormagn == '260'">8 daga</span>
      <span v-if="post.klormagn == '240'">7 daga</span>
      <span v-if="post.klormagn == '220'">6 daga</span>
      <span v-if="post.klormagn == '210'">5 daga</span>
      <span v-if="post.klormagn == '200'">5 daga</span>
      <span v-if="post.klormagn == '180'">4 daga</span>
      <span v-if="post.klormagn == '160'">3 daga</span>
      <span v-if="post.klormagn == '140'">2 daga</span>
      <span v-if="post.klormagn == '120'">1 daga</span>
    </span>
    
  </div>
</div>

 </div>

</div><!-- posts -->

</div><!-- .klorfront -->

</template>

<script>
import axios from 'axios'
import strapi from '~/utils/Strapi'
import { mapMutations } from 'vuex'
import { NotificationProgrammatic as Notification } from 'buefy'


export default {

components: {

},

data () {

    return {
     posts: [],

    }
  },
 
 computed: {
    total: function() {
      let calculatedTotal = this.malingsundlaug - this.testsundlaug;
      this.utkomasundlaug_total = calculatedTotal
      return calculatedTotal;
    },
  },

   // Pushes posts to the server when called.
    async created() {
    axios.get(`http://localhost:1337/klors?_limit=1&_sort=created_at:desc`)
    //axios.get(`https://sundlaug.herokuapp.com/klormalingars?_sort=created_at:desc`)
    .then(response => {
    this.posts = response.data
    })
    .catch(e => {
    
    })
    },
}
</script>