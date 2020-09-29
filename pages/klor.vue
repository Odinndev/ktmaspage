<template>

  <div class="data">

   <v-data-table
   dense
   :items="posts"
   :headers="headers"
   :single-expand="singleExpand"
   :expanded.sync="expanded"
   show-expand
   :search="search"
    :footer-props="{
    'items-per-page-options': [10, 20, 50, 100, -1],
    }"
   :items-per-page-all-text="itemsPerPageAllText"
   :items-per-page="10"
   :options.sync="pagination"
   >

   <template v-slot:top>
         <v-col offset-lg="3" :lg="6" :sm="12"><v-text-field v-model="search" label="Leita... ensk orð t.d odinn - robert.. tími = 06:50.." class="mx-4"></v-text-field></v-col>
      </template>

   <template #item.created_at="{item}">
     <time><span class="date">{{ item.created_at | moment('DD') }}</span>    
     <span class="month">{{ item.created_at | moment('MMM') }}</span>
     <span class="dag">{{ item.created_at | moment('timezone', 'Atlantic/Reykjavik', 'dddd') }}</span> 
     <span class="timi" uk-icon="icon: clock"></span><span class="time">{{ item.created_at | moment("H:mm") }}</span>
     </time>
   </template>

   <template #item.starfsmadur="{item}">

        <div class="uk-grid-small uk-flex-middle" uk-grid>

             <div class="uk-width-auto" v-if="item.starfsmadur == 'odinn'">
                <img class="uk-border-circle" width="20" height="20" src="https://lh3.googleusercontent.com/a-/AAuE7mB4dRHKqhaTxYA9CawE2YOf7Scvb5_EEFGola1SGEo=s96-cc">
            </div>
            <div class="uk-width-auto" v-if="item.starfsmadur == 'robert'">
                <img class="uk-border-circle" width="20" height="20" src="https://scontent.frkv2-1.fna.fbcdn.net/v/t31.0-1/c17.0.100.100a/p100x100/1493444_1377246689198452_1488600122_o.jpg?_nc_cat=107&_nc_oc=AQlyOFG7uDQGIEDIuRPW08mhTNn5Uo9ALaD9Fi1gB9nPgo2ulLEIPIT-D5WkraZm09Y&_nc_ht=scontent.frkv2-1.fna&oh=34aca7f1a20401b84d96854885872a4d&oe=5E555B33">
            </div>
            <div class="uk-width-auto" v-if="item.starfsmadur == 'oli'">
                <img class="uk-border-circle" width="20" height="20" src="https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-1/p100x100/54521146_10156401125097602_6650388366841872384_n.jpg?_nc_cat=105&_nc_oc=AQnYWEC6NV8s7ACHSfU4JVkypXCg7eKE0JAl5a8GWm1aCoQg5wGw1WrPsy09kgd8SOY&_nc_ht=scontent.frkv2-1.fna&oh=5ae5d74131a5e531601506455a70fb5a&oe=5E84D0F1">
            </div>
            <div class="uk-width-auto" v-if="item.starfsmadur == 'torvald'">
                <img class="uk-border-circle" width="20" height="20" src="https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-1/p100x100/12998769_10206297823309072_533707040792698881_n.jpg?_nc_cat=110&_nc_oc=AQnqczaJAHhFgxRvyopVA_ZonW81JKntg6F3wSl4YXSPPo7uFbyz-Xqwnrlmc6wjquE&_nc_ht=scontent.frkv2-1.fna&oh=9341c777686b46d4a45b30399c6eb29f&oe=5E4DEC99">
            </div>
            <div class="uk-width-auto" v-if="item.starfsmadur == 'steina'">
                <img class="uk-border-circle" width="20" height="20" src="https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-1/p100x100/73294654_10214430438331501_7842106633156034560_o.jpg?_nc_cat=101&_nc_oc=AQliQ6awQus2jaeErc0N0FqK7BsTpzFJ0qPy9XcBFh4V_W20i84mpKVfpha_OUGgx5Y&_nc_ht=scontent.frkv2-1.fna&oh=a7c8de4647633f7cfb33cad2f9a02c6f&oe=5E5303E9">
            </div>
            <div class="uk-width-auto" v-if="item.starfsmadur == 'halla'">
                <img class="uk-border-circle" width="20" height="20" src="https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-1/p100x100/67403435_10157252483601832_2675199781374001152_n.jpg?_nc_cat=100&_nc_oc=AQmZJRkCTr-Gl0xlmGQHiQ95eLh9p-iNp-I3TTS6fZYeKSPgeF-oOaetEKOjfXWnE2U&_nc_ht=scontent.frkv2-1.fna&oh=fd81d3f3046cdbbe58b55488f80fdada&oe=5E58467E">
            </div>
            <div class="uk-width-auto" v-if="item.starfsmadur == 'ragna'">
                <img class="uk-border-circle" width="20" height="20" src="https://scontent.frkv2-1.fna.fbcdn.net/v/t31.0-1/p100x100/13613184_10205990141146999_3445103564979179267_o.jpg?_nc_cat=108&_nc_oc=AQk71-ivWS1NpHRU6fRPzFFU06a-VxudBffqnKIkJSM1Squnqi-d0tWkC_YYr5FRHqk&_nc_ht=scontent.frkv2-1.fna&oh=fb9769640cfb4c36479c63ae61b3c6eb&oe=5E4BE8B5">
            </div>
      
            <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom odinn" v-if="item.starfsmadur == 'odinn'">Óðinn</h3>
                <h3 class="uk-card-title uk-margin-remove-bottom robert" v-else-if="item.starfsmadur == 'robert'">Róbert </h3>
                <h3 class="uk-card-title uk-margin-remove-bottom olafur" v-else-if="item.starfsmadur == 'oli'">Ólafur</h3>
                <h3 class="uk-card-title uk-margin-remove-bottom valdi" v-else-if="item.starfsmadur == 'torvald'">Þorvaldur</h3>
                <h3 class="uk-card-title uk-margin-remove-bottom steina" v-else-if="item.starfsmadur == 'steina'">Steina</h3>
                <h3 class="uk-card-title uk-margin-remove-bottom halla" v-else-if="item.starfsmadur == 'halla'">Halla</h3>
                <h3 class="uk-card-title uk-margin-remove-bottom ragna" v-else-if="item.starfsmadur == 'ragna'">Ragna</h3>
            </div><!-- .uk-width-expand -->

        </div><!-- .uk-grid-small -->

   </template>

    <template #expanded-item="{ headers,item }" #post.minnismidi="{item}">
    <td :colspan="headers.length">
       {{ item.minnismidi }}
    </td>
    </template>

   <!-- sundlaug ///////////////////////////// -->
   <template #item.Sundlaug>
     <span class="ker">Sundlaug</span>
   </template>

   <template #post.hitisundlaug="{item}">
     <span class="hiti">{{ item.hitisundlaug }}</span>
   </template>

   <template #post.malingsundlaug="post">
     {{ post.malingsundlaug }}
   </template>

   <template #post.testsundlaug="post">
     {{ post.testsundlaug }}
   </template>

    <template #post.utkomasundlaug="post">
     <span class="leid">{{ post.utkomasundlaug }}</span>
   </template>
   
    <!-- kaldur pottur /////////////////////// -->
   <template #item.KaldurPottur>
     <span class="ker">Kaldur Pottur</span>
   </template>

   <template #post.hitikaldurpottur="post">
     <span class="hiti" v-html="post.hitikaldurpottur"></span>
   </template>

   <template #post.malingkaldurpottur="post">
     {{ post.malingkaldurpottur }}
   </template>

   <template #post.testkaldurpottur="post">
     {{ post.testkaldurpottur }}
   </template>

    <template #post.utkomakaldurpottur="post">
     {{ post.utkomakaldurpottur }}
   </template>

   <!-- heitur pottur ////////////////////// -->
   <template #item.HeiturPottur>
     <span class="ker">Heitur Pottur</span>
   </template>

   <template #post.hitiheiturpottur="post">
     {{ post.hitiheiturpottur }}
   </template>

   <template #post.malingheiturpottur="post">
     {{ post.malingheiturpottur }}
   </template>

   <template #post.testheiturpottur="post">
     {{ post.testheiturpottur }}
   </template>

    <template #post.utkomaheiturpottur="post">
     {{ post.utkomaheiturpottur }}
   </template>

   </v-data-table>

  </div><!-- .data -->

</template>

<script>
import axios from "axios";
import strapi from "~/utils/Strapi";
import { mapMutations } from "vuex";

export default {
  computed: {
    // Set your username thanks to your getter
    username() {
      return this.$store.getters["auth/username"];
    },
    avatar() {
      return this.$store.getters["auth/avatar"];
    },
    headers(){
     return [
      // dagsetning
      //{text: 'M', value: 'minnismidi'},
      {text: 'Dagsetning', value: 'created_at', 'sortable': true, 'filterable': true},
      {text: 'Starfsmaður', value: 'starfsmadur'},
      //sundlaug
      {text: 'Ker', value: 'Sundlaug', 'sortable': true},
      {text: '°C', value: 'hitisundlaug', 'sortable': true},
      {text: 'Klórstöð', value: 'malingsundlaug', 'sortable': true},
      {text: 'Mæling', value: 'testsundlaug', 'sortable': true},
      {text: 'Leiðrétt', value: 'utkomasundlaug', 'sortable': true},
      // kaldur pottur
      {text: 'Ker', value: 'KaldurPottur', 'sortable': true},
      {text: '°C', value: 'hitikaldurpottur', 'sortable': true},
      {text: 'Klórstöð', value: 'malingkaldurpottur', 'sortable': true},
      {text: 'Mæling', value: 'testkaldurpottur', 'sortable': true},
      {text: 'Leiðrétt', value: 'utkomakaldurpottur', 'sortable': true},
      // heitur pottur
      {text: 'Ker', value: 'HeiturPottur', 'sortable': true},
      {text: '°C', value: 'hitiheiturpottur', 'sortable': true},
      {text: 'Klórstöð', value: 'malingheiturpottur', 'sortable': true},
      {text: 'Mæling', value: 'testheiturpottur', 'sortable': true},
      {text: 'Leiðrétt', value: 'utkomaheiturpottur', 'sortable': true},
      {text: '', value: 'data-table-expand'},
     ]
    },
    utkomasundlaugLimited(){
      if ( this.utkomasundlaug.length > 19 ) {
        return this.utkomasundlaug.substring(0,4) + '...'
      } else {
        return this.utkomasundlaug
      }
    },
  },

  data() {
    return {
     posts: [],
     expanded: [],
     singleExpand: false,
     search: '',
     itemsPerPageItems: [5, 10, 15, 20, 30, 40, 50, 100, -1],
     pagination: {
        itemsPerPage: 10
     },
     itemsPerPageAllText: "Allar",
    }
  },
  // wp reminders import
  async created() {
    axios
      .get(`http://localhost:1337/klors?_sort=created_at:desc`)
      //.get(`https://sundlaug.herokuapp.com/klormalingars?_sort=created_at:desc`)
      .then(response => {
        this.posts = response.data;
      })
      .catch(e => {});
  },
  methods: {
      filterOnlyCapsText (value, search, item) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },
    },
}
</script>