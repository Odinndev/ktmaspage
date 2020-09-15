<template>

<div class="valmoguleikar">

  <form @submit="formSubmit">
    <fieldset class="uk-fieldset">

     <v-container>
     <v-row no-gutters>
           
    
        <div class="hitilaug uk-width-1-1">
         <v-col lg="12" cols="12">
        <dl class="uk-description-list">
        <dt>Hiti Sundlug</dt>
        <dd>Normal 29.7°c <span>Max 33°c</span></dd>
       </dl>
        <b-field>
          <b-numberinput min="26.0" type="number" step="0.1" v-model="hitilaug"></b-numberinput>
        </b-field>
        </v-col>
        </div><!-- .hitilaug -->

        <div class="hitikaldur uk-width-1-1">
        <v-col lg="12" cols="12">
       <dl class="uk-description-list">
        <dt>Hiti Kaldur Pottur</dt>
        <dd>Normal 37.7°c <span>Max 39.4°c</span></dd>
       </dl>
        <b-field>
          <b-numberinput min="30.0" type="number" step="0.1" v-model="hitikaldur"></b-numberinput>
        </b-field>
        </v-col>
        </div><!-- .hitikaldur -->

        <div class="hitiheitur uk-width-1-1">
        <v-col lg="12" cols="12">
        <dl class="uk-description-list">
        <dt>Hiti Heitur Pottur</dt>
        <dd>Normal 40-42°c / <span>Max 45°c</span></dd>
       </dl>
        <b-field>
          <b-numberinput min="38.0" type="number" step="0.1" v-model="hitiheitur"></b-numberinput>
        </b-field>
        </v-col>
        </div><!-- .hitiheitur -->

        </v-row>
     </v-container>
  
    </fieldset>
    
    <button class="uk-button uk-button-secondary uk-width-1-1 right">vista</button>
    <pre>
    {{output}}
    </pre>
</form>

<!-- <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Vue Axios Post - ItSolutionStuff.com</div>
    
                    <div class="card-body">
                        <form @submit="formSubmit">
                        <strong>Hiti Sundlaug</strong>
                        <input type="text" class="form-control" v-model="hitisundlaug">
                        <strong>Hiti kaldur pottur:</strong>
                        <textarea class="form-control" v-model="hitikaldurpottur"></textarea>
    
                        <button class="btn btn-success">Submit</button>
                        </form>
                        <strong>Output:</strong>
                        <pre>
                        {{output}}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

</div><!-- .valmoguleikar -->

</template>

<script>
import axios from 'axios'
import strapi from '~/utils/Strapi'
import { mapMutations } from 'vuex'
import { NotificationProgrammatic as Notification } from 'buefy'

export default {
name: "valmoguleikar",

components: {
},

data () {

    return {
     posts: [],
     hitilaug: null,
     hitikaldur: null,
     hitiheitur: null,
     malingsundlaug: null,
     malingkaldurpottur: null,
     malingheiturpottur: null,
     testsundlaug: null,
     testkaldurpottur: null,
     testheiturpottur: null,
     //utkomasundlaug: null,
     //utkomakaldurpottur: null,
     //utkomaheiturpottur: null,
     minnismidi: null,
     klormagn: null,
     tokamotiklor: null,
     treifklornema: null,
     mynd: "",
     id: "",
     starfsmadur: "",
     veljadate: "",
     output: '',
     showWeekNumber: false,

      rules: [
        value => !!value || 'Fylltu inn!.',
        //value => (value && value.length >= 2) || 'Minst 3 stafir.',
      ],

    }
  },
 
 computed: {
  total: function() {
      let calculatedTotal = this.malingsundlaug - this.testsundlaug;
      this.utkomasundlaug_total = calculatedTotal
      return calculatedTotal;
    },
    total: function() {
      let calculatedTotal = this.malingkaldurpottur - this.testkaldurpottur;
      this.utkomakaldurpottur_total = calculatedTotal
      
      return calculatedTotal;
    },
    total: function() {
      let calculatedTotal = this.malingheiturpottur - this.testheiturpottur;
      this.utkomaheiturpottur_total = calculatedTotal
      
      return calculatedTotal;
    },
    utkomasundlaug() {
      return this.malingsundlaug - this.testsundlaug;
    },
    utkomakaldurpottur() {
      return this.malingkaldurpottur - this.testkaldurpottur;
    },
    utkomaheiturpottur() {
      return this.malingheiturpottur - this.testheiturpottur;
    },
  },

/*    computed: {
    total: function() {
      let calculatedTotal = this.form.sale_quantity * this.form.sale_rate;
      this.sale_total = calculatedTotal;
      
      return calculatedTotal;
    },
 */
   // Pushes posts to the server when called.
    methods: {
            async formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                //axios.post('http://localhost:1337/klormalingars', {
                axios.post('https://sundlaug.herokuapp.com/klormalingars', {
                    hitisundlaug: this.hitilaug,
                    hitikaldurpottur: this.hitikaldurr,
                    hitiheiturpottur: this.hitiheitur,
                    malingsundlaug: this.malingsundlaug,
                    malingkaldurpottur: this.malingkaldurpottur,
                    malingheiturpottur: this.malingheiturpottur,
                    testsundlaug: this.testsundlaug,
                    testkaldurpottur: this.testkaldurpottur,
                    testheiturpottur: this.testheiturpottur,
                    utkomasundlaug: this.utkomasundlaug,
                    utkomakaldurpottur: this.utkomakaldurpottur,
                    utkomaheiturpottur: this.utkomaheiturpottur,
                    minnismidi: this.minnismidi,
                    klormagn: this.klormagn,
                    tokamotiklor: this.tokamotiklor,
                    treifklornema: this.threifklornema,
                    mynd: this.mynd,
                    id: this.id,
                    starfsmadur: this.starfsmadur,
                    veljadate: this.veljadate
                })
                .then(function (response) {
                    currentObj.output = response.data;

                    Notification.open({
                    message: 'Klórmæling Vistuð! <br> Eigðu Góðan dag😉',
                    type: 'is-success',
                    position: 'is-top',
                    })

                })
                .catch(function (error) {
                    currentObj.output = error;

                    Notification.open({
                    message: 'Þú hefur ekki leyfi til að Posta þessari Klórmælingu!',
                    type: 'is-danger',
                    position: 'is-top',
                    })

                });
            },
             ...mapMutations({
            setUser: 'auth/setUser'
            })
        }
}
</script>