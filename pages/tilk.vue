<template>

<div class="tilk">

 <v-container>
    <v-row justify="space-around">
      <v-card width="400">

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
           Tilkynningar
          </div>

          <v-timeline
            align-top
            dense
          >
          <span v-for="post in posts">

            <v-timeline-item
              v-if="post.starfsmadur == 'odinn'"
              color="yellow lighten-3"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Óðinn</strong> 
                  <v-icon size="14">mdi-calendar</v-icon> {{ post.created_at | moment('DD/MM') }} <v-icon size="14">mdi-clock</v-icon> {{ post.created_at | moment("H:mm") }}
                </div>
                <div>{{ post.desc }}</div>
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
                  <v-icon size="14">mdi-calendar</v-icon> {{ post.created_at | moment('DD/MM') }} <v-icon size="14">mdi-clock</v-icon> {{ post.created_at | moment("H:mm") }}
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
                  <v-icon size="14">mdi-calendar</v-icon> {{ post.created_at | moment('DD/MM') }} <v-icon size="14">mdi-clock</v-icon> {{ post.created_at | moment("H:mm") }}
                </div>
                <div>{{ post.desc }}</div>
              </div>
            </v-timeline-item>


            <v-timeline-item
              v-if="post.starfsmadur == 'torvald'"
              color="#C5CAE9"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>Þorvaldur</strong>
                  <v-icon size="14">mdi-calendar</v-icon> {{ post.created_at | moment('DD/MM') }} <v-icon size="14">mdi-clock</v-icon> {{ post.created_at | moment("H:mm") }}
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
                  <v-icon size="14">mdi-calendar</v-icon> {{ post.created_at | moment('DD/MM') }} <v-icon size="14">mdi-clock</v-icon> {{ post.created_at | moment("H:mm") }}
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
                  <v-icon size="14">mdi-calendar</v-icon> {{ post.created_at | moment('DD/MM') }} <v-icon size="14">mdi-clock</v-icon> {{ post.created_at | moment("H:mm") }}
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
                  <v-icon size="14">mdi-calendar</v-icon> {{ post.created_at | moment('DD/MM') }} <v-icon size="14">mdi-clock</v-icon> {{ post.created_at | moment("H:mm") }}
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

export default {

data () {

return {
 posts: [],
 // avatars
 odinn: 'https://lh3.googleusercontent.com/a-/AAuE7mB4dRHKqhaTxYA9CawE2YOf7Scvb5_EEFGola1SGEo=s96-cc',
 robert: 'https://scontent.frkv2-1.fna.fbcdn.net/v/t31.0-8/1493444_1377246689198452_1488600122_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=1DfxRFdhUuUAX-vu4y9&_nc_ht=scontent.frkv2-1.fna&oh=c20909f33ca0099b65d5c76319b69ffb&oe=5F869BA2',
 oli: 'https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-1/p100x100/54521146_10156401125097602_6650388366841872384_n.jpg?_nc_cat=105&_nc_oc=AQnYWEC6NV8s7ACHSfU4JVkypXCg7eKE0JAl5a8GWm1aCoQg5wGw1WrPsy09kgd8SOY&_nc_ht=scontent.frkv2-1.fna&oh=5ae5d74131a5e531601506455a70fb5a&oe=5E84D0F1',
 torvald: 'https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-1/p100x100/12998769_10206297823309072_533707040792698881_n.jpg?_nc_cat=110&_nc_oc=AQnqczaJAHhFgxRvyopVA_ZonW81JKntg6F3wSl4YXSPPo7uFbyz-Xqwnrlmc6wjquE&_nc_ht=scontent.frkv2-1.fna&oh=9341c777686b46d4a45b30399c6eb29f&oe=5E4DEC99',
 steina: 'https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-9/107006745_10216361647170515_7033380553091762226_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=Cw_Z7ryC0CYAX-RkjFG&_nc_oc=AQnoh5M_Wi5NVGJ6qQyiYSTPkUU52Wx2WOmjTdTp3qp9Au2rCcB-HHwBtisT3uSqCas&_nc_ht=scontent.frkv2-1.fna&oh=7a4eeaf19b39b70cecb1183be32f5487&oe=5F86E135',
 halla: 'https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-9/67403435_10157252483601832_2675199781374001152_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=RoUVzUcWHaoAX_9eJPD&_nc_ht=scontent.frkv2-1.fna&oh=bfe481fb21d18df9935ddb8c691050fb&oe=5F85AC5A',
 ragna: 'https://scontent.frkv2-1.fna.fbcdn.net/v/t31.0-1/p100x100/13613184_10205990141146999_3445103564979179267_o.jpg?_nc_cat=108&_nc_oc=AQk71-ivWS1NpHRU6fRPzFFU06a-VxudBffqnKIkJSM1Squnqi-d0tWkC_YYr5FRHqk&_nc_ht=scontent.frkv2-1.fna&oh=fb9769640cfb4c36479c63ae61b3c6eb&oe=5E4BE8B5',
}

},

computed: {

},

  async created() {
    axios.get(`http://localhost:1337/tilks?_limit=5&_sort=created_at:desc`)
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