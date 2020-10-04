<template>

<div class="matur">

     <section>
         <b-field grouped message="Leita að nafni?...">
             <b-input placeholder="Leita að Árskorti..." expanded v-model="search"></b-input>
             <p class="control">
                 <button class="button is-primary"><v-icon>mdi-book-search-outline</v-icon></button>
             </p>
         </b-field>
     </section>

     <v-container>
      <v-row justify="center">
    <v-col cols="12" lg="3" xl="3" sm="8" xs="12">

<span v-for="post in filteredList" :key="post.id">

    <v-alert dense v-model="alert" color="grey darken-2" border="right" elevation="2" colored-border icon="mdi-silverware" v-if="post.stadur == 'kk'">
     {{ post.created_at | moment('timezone', 'Atlantic/Reykjavik', 'DD/MM') }}
     <span class="odinn" v-if="post.starfsmadur == 'odinn'">Óðinn</span>
     <span class="robert" v-if="post.starfsmadur == 'robert'">Róbert</span>
     <span class="oli" v-if="post.starfsmadur == 'oli'">Óli</span>
     <span class="steina" v-if="post.starfsmadur == 'steina'">Steina</span>
     <span class="halla" v-if="post.starfsmadur == 'halla'">Halla</span>
     <span class="ragna" v-if="post.starfsmadur == 'ragna'">Ragna</span>
     <span class="torvald" v-if="post.starfsmadur == 'torvald'">Auka</span>
     <span style="color:#616161" v-if="post.stadur == 'kk'">KK Restaurant</span>
     <span v-if="post.vakt == 'fyrri'">Fyrri vakt</span>
     <span v-if="post.vakt == 'seinni'">Seinni vakt</span>
     <n-link :to="`/matid/${post.id}`"><v-icon size="16" class="edit">mdi-clipboard-edit-outline</v-icon></n-link>
     <v-icon size="16" class="del">mdi-delete</v-icon>
    </v-alert>

    
    <v-alert dense v-model="alert" color="deep-purple lighten-2" border="right" elevation="2" colored-border icon="mdi-silverware" v-if="post.stadur == 'hw'">
     {{ post.created_at | moment('timezone', 'Atlantic/Reykjavik', 'DD/MM') }}
     <span class="odinn" v-if="post.starfsmadur == 'odinn'">Óðinn</span>
     <span class="robert" v-if="post.starfsmadur == 'robert'">Róbert</span>
     <span class="oli" v-if="post.starfsmadur == 'oli'">Óli</span>
     <span class="steina" v-if="post.starfsmadur == 'steina'">Steina</span>
     <span class="halla" v-if="post.starfsmadur == 'halla'">Halla</span>
     <span class="ragna" v-if="post.starfsmadur == 'ragna'">Ragna</span>
     <span class="torvald" v-if="post.starfsmadur == 'torvald'">Auka</span>
     <span style="color:#9575CD;" v-if="post.stadur == 'hw'">Hard Wok</span>
     <span v-if="post.vakt == 'fyrri'">Fyrri vakt</span>
     <span v-if="post.vakt == 'seinni'">Seinni vakt</span>
     <n-link :to="`/matid/${post.id}`"><v-icon size="16" class="edit">mdi-clipboard-edit-outline</v-icon></n-link>
     <v-icon size="16" class="del">mdi-delete</v-icon>
    </v-alert>

     <v-alert dense v-model="alert" color="light-blue darken-1" border="right" elevation="2" colored-border icon="mdi-silverware" v-if="post.stadur == 'gt'">
     {{ post.created_at | moment('timezone', 'Atlantic/Reykjavik', 'DD/MM') }}
     <span class="odinn" v-if="post.starfsmadur == 'odinn'">Óðinn</span>
     <span class="robert" v-if="post.starfsmadur == 'robert'">Róbert</span>
     <span class="oli" v-if="post.starfsmadur == 'oli'">Óli</span>
     <span class="steina" v-if="post.starfsmadur == 'steina'">Steina</span>
     <span class="halla" v-if="post.starfsmadur == 'halla'">Halla</span>
     <span class="ragna" v-if="post.starfsmadur == 'ragna'">Ragna</span>
     <span class="torvald" v-if="post.starfsmadur == 'torvald'">Auka</span>
     <span style="color:#039BE5;" v-if="post.stadur == 'gt'">Gott í gogginn</span>
     <span v-if="post.vakt == 'fyrri'">Fyrri vakt</span>
     <span v-if="post.vakt == 'seinni'">Seinni vakt</span>
     <n-link :to="`/matid/${post.id}`"><v-icon size="16" class="edit">mdi-clipboard-edit-outline</v-icon></n-link>
     <v-icon size="16" class="del">mdi-delete</v-icon>
    </v-alert>

    </span><!-- grid -->
     
     </v-col>
     </v-row>
   </v-container>


</div><!-- .matur -->


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
 search: '',
 alert: true,

}

},

    computed: {
    filteredList() {
     return this.posts.filter(post => {
     return post.starfsmadur.toLowerCase().includes(this.search.toLowerCase())
          })
        }
    },// computed

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

},

}

</script>