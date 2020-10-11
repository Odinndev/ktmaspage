<template>

<div class="nytilk">
  
    <v-text-field
     v-model="desc"
     label="Tilkynning"
     prepend-icon="mdi-information"
     clear-icon="mdi-close-circle"
     clearable
    ></v-text-field>

    <p><v-icon>mdi-account-box</v-icon> Starfsmaður
    <select class="uk-select" v-model="starfsmadur">
     <option class="odinn" value="odinn">Óðinn</option>
     <option class="robert" value="robert">Róbert</option>
     <option class="oli" value="oli">Óli</option>
     <option class="steina" value="steina">Steina</option>
     <option class="halla" value="halla">Halla</option>
     <option class="ragna" value="ragna">Ragna</option>
     <option class="torvald" value="auka">Auka</option>
    </select>
    </p>

    <v-btn @click="nyTilk" style="color:black;text-decoration:none;">Vista breytingu</v-btn>

</div><!-- .nytilk -->


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
 desc: null,
 starfsmadur: null,

}

},

computed: {

},

methods: {
            async nyTilk(e) {
                e.preventDefault();
                let currentObj = this;
                axios.post('http://localhost:1337/tilks', {
                //axios.post('https://sundlaug.herokuapp.com/klormalingars', {
                    //this.desc = Object.assign({}, this.desc), {this.desc}; 
                    desc: this.desc,
                    starfsmadur: this.starfsmadur
                })
                .then(function (response) {
                    currentObj.output = response.data;
                    
                    Notification.open({
                    message: 'Tilkynning Birt! <br> Eigðu Góðan dag😉',
                    type: 'is-success',
                    position: 'is-top',
                    })

                })

                .catch(function (error) {
                    currentObj.output = error;

                    Notification.open({
                    message: 'Þú hefur ekki leyfi til að Posta þessari Tilkynningu!',
                    type: 'is-danger',
                    position: 'is-top',
                    })

                });
            },
             ...mapMutations({
            setUser: 'auth/setUser'
            })
        
        // nyTilk() {
        // this.posts.push({
        // desc: this.desc,
        // starfsmadur: this.starfsmadur
        // })
        // },

        },

}

</script>