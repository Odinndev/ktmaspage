<template>

<div>

   <span class="seinni" v-for="post in posts">

        <div class="bg-teal-100 border-t-4 border-blue-180 rounded-b text-teal-900 px-4 shadow-lg" role="alert">
           <div class="flex">
            <div class="py-1">

              <span class="rounded-full h-10 w-10 flex items-center justify-center">
              {{ post.id }}
              </span>
             
            </div>
            <div>
             <p class="pl-2 pt-2">
                <v-icon>mdi-spray-bottle</v-icon>
                <span v-if="post.dagur == 'mon'">Mánudagur</span>
                <span v-if="post.dagur == 'tues'">Þriðjudagur</span>
                <span v-if="post.dagur == 'wed'">Miðvikudagur</span>
                <span v-if="post.dagur == 'thurs'">Fimmtudagur</span>
                <span v-if="post.dagur == 'fri'">Föstudagur</span>
                <span v-if="post.dagur == 'sat'">Laugardagur</span>
                <span v-if="post.dagur == 'sun'">Sunnudagur</span>
             </p>
             <p class="text-sm">
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

     </span><!-- .seinni -->  

</div>


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
  show: false,
}

},

computed: {

},

filters: {
 uppercase: function(valur) {
   if(!value) return '';
   value = value.toString();
   return value.tpUpperCase();
 },
 
 capitalize: function(value) {
   if(!value) return '';
   value = value.toString();
   return value.charAt(0).toUpperCase() + value.slice(1);
 }
},

      async created() {
      axios.get(`http://localhost:1337/seinnivakts?_sort=created_at:desc`)
      //axios.get(`https://sundlaug.herokuapp.com/klormalingars?_sort=created_at:desc`)
      .then(response => {
      this.posts = response.data
      })
      .catch(e => {

      })
    },
    ...mapMutations({
      setUser: 'auth/setUser'
    })

}

</script>