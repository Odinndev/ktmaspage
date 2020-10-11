<template>

<div class="tilk">

 <v-container>
    <v-row justify="space-around">
      <v-card width="400">

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            
          <b-collapse :open="false" aria-id="tilks">
            
            <!-- +nytilkynning -->
                <v-btn
                  color="orange"
                  fab
                  dark
                  small
                  absolute
                  right
                  slot="trigger"
                  aria-controls="tilks"
                >
                <v-icon>mdi-plus</v-icon>
                </v-btn>
                
                
                <div class="notification">
                <div class="content">
                  
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

                  <v-btn @click="nyTilk" style="color:black;text-decoration:none;">Birta</v-btn>

                </div>
            </div>
        </b-collapse>
              

          <!-- <div id="modal-close-outside" class="uk-flex-top" uk-modal>
          <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
              <button style="color:black!important;" class="uk-modal-close-default" type="button" uk-close></button>
              <nytilk />
          </div>
      </div> -->
          <span>Tilkynningar</span>
          </div>

          <v-timeline
            align-top
            dense
          >
          <span v-for="post in posts" :key="id">

            <v-timeline-item
              v-if="post.starfsmadur == 'odinn'"
              color="yellow lighten-3"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Óðinn</strong> 
                  <v-icon size="12" color="blue-grey darken-1">mdi-calendar</v-icon><small>{{ post.created_at | moment('DD/MM') }}</small> <v-icon size="12" color="blue-grey darken-1">mdi-clock</v-icon><small>{{ post.created_at | moment("H:mm") }}</small>
                </div>
                <div>{{ post.desc }} </div>
              </div>
            </v-timeline-item>

            <v-timeline-item
              v-if="post.starfsmadur == 'robert'"
              color="#C8C8C8"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Róbert</strong>
                  <v-icon size="12" color="blue-grey darken-1">mdi-calendar</v-icon><small>{{ post.created_at | moment('DD/MM') }}</small> <v-icon size="12" color="blue-grey darken-1">mdi-clock</v-icon><small>{{ post.created_at | moment("H:mm") }}</small>
                </div>
                <div>{{ post.desc }}</div>
              </div>
            </v-timeline-item>

            <v-timeline-item
              v-if="post.starfsmadur == 'oli'"
              color="#BDD6EE"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Óli</strong>
                  <v-icon size="12" color="blue-grey darken-1">mdi-calendar</v-icon><small>{{ post.created_at | moment('DD/MM') }}</small> <v-icon size="12" color="blue-grey darken-1">mdi-clock</v-icon><small>{{ post.created_at | moment("H:mm") }}</small>
                </div>
                <div>{{ post.desc }}</div>
              </div>
            </v-timeline-item>

            <v-timeline-item
              v-if="post.starfsmadur == 'steina'"
              color="#BF9000"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Steina</strong>
                  <v-icon size="12" color="blue-grey darken-1">mdi-calendar</v-icon><small>{{ post.created_at | moment('DD/MM') }}</small> <v-icon size="12" color="blue-grey darken-1">mdi-clock</v-icon><small>{{ post.created_at | moment("H:mm") }}</small>
                </div>
                <div>{{ post.desc }}</div>
              </div>
            </v-timeline-item>

            <v-timeline-item
              v-if="post.starfsmadur == 'halla'"
              color="#FF0000"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Halla</strong>
                  <v-icon size="12" color="blue-grey darken-1">mdi-calendar</v-icon><small>{{ post.created_at | moment('DD/MM') }}</small> <v-icon size="12" color="blue-grey darken-1">mdi-clock</v-icon><small>{{ post.created_at | moment("H:mm") }}</small>
                </div>
                <div>{{ post.desc }}</div>
              </div>
            </v-timeline-item>

            <v-timeline-item
              v-if="post.starfsmadur == 'ragna'"
              color="#8496B0"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Ragna</strong>
                  <v-icon size="12" color="blue-grey darken-1">mdi-calendar</v-icon><small>{{ post.created_at | moment('DD/MM') }}</small> <v-icon size="12" color="blue-grey darken-1">mdi-clock</v-icon><small>{{ post.created_at | moment("H:mm") }}</small>
                </div>
                <div>{{ post.desc }}</div>
              </div>
            </v-timeline-item>

            <v-timeline-item
              v-if="post.starfsmadur == 'auka'"
              color="#C5CAE9"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Auka</strong>
                  <v-icon size="12" color="blue-grey darken-1">mdi-calendar</v-icon><small>{{ post.created_at | moment('DD/MM') }}</small> <v-icon size="12" color="blue-grey darken-1">mdi-clock</v-icon><small>{{ post.created_at | moment("H:mm") }}</small>
                </div>
                <div>{{ post.desc }}</div>
              </div>
            </v-timeline-item>

            </span><!-- posts -->

          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>

</div><!-- .tilk -->


</template>

<script>
import axios from 'axios'
import strapi from '~/utils/Strapi'
import { mapMutations } from 'vuex'
import { NotificationProgrammatic as Notification } from 'buefy'
//import nytilk from './nytilk'

export default {

components: {
 //nytilk
},

data () {

return {
 posts: [],
 clicked: false,
 desc: null,
 newDesc: null,
 starfsmadur: null,
}

},

computed: {

},

  async created() {
    axios.get(`http://localhost:1337/tilks?_limit=10&_sort=created_at:desc`)
    //axios.get(`https://sundlaug.herokuapp.com/klormalingars?_sort=created_at:desc`)
    .then(response => {
    this.posts = response.data
    })
    .catch(e => {

    })
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
                    })

                })

                .catch(function (error) {
                    currentObj.output = error;

                    Notification.open({
                    message: 'Þú hefur ekki leyfi til að Posta þessari Tilkynningu!',
                    type: 'is-danger',
                    position: 'is-bottom-right',
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