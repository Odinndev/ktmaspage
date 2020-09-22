<template>

<div class="klorval">

  <form @submit="formSubmit">
    <fieldset class="uk-fieldset">

      <div class="grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 grid-rows-3 gap-0">

        <!-- hiti /////////////////////////////////////////// -->   
        <div class="hiti">

         <h1 class="malinghiti" align="center"><dt class="name"><span><span style="color:#11c3fe;">°</span>C/</span>HITASTIG</dt></h1>  

        <div class="hitiker">
         <v-col lg="12" cols="12">

        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        
        <div>
        <dt class="laug" align="center">SUNDLAUG</dt>  
        <b-field>
          <b-numberinput size="is-small" min="1.0" type="number" step="0.1" v-model="hitisundlaug"></b-numberinput>
        </b-field>
        </div>

        </div><!-- grid -->

        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        
        <div>
        <dt class="kaldur" align="center">KALDUR POTTUR</dt>  
        <b-field>
          <b-numberinput size="is-small" min="1.0" type="number" step="0.1" v-model="hitikaldurpottur"></b-numberinput>
        </b-field>
        </div>

        <div>
        <dt class="heitur" align="center">HEITUR POTTUR</dt> 
        <b-field>
          <b-numberinput size="is-small" min="1.0" type="number" step="0.1" v-model="hitiheiturpottur"></b-numberinput>
        </b-field>
        </div>

        </div><!-- grid -->

        </v-col>
        </div><!-- .hitiker -->

        </div><!-- .hiti -->


        <!-- klormalingar /////////////////////////////////////////// -->
        <div class="klormalingar">

        <h1 class="malinglaug" align="center"><dt class="name"><span>KLÓRMÆLING</span> SUNDLAUG</dt></h1> 

        <!-- sundlaug ///////////////////////////////// -->
        <div class="klorlaug">
         <v-col lg="12" cols="12">
        <dl class="uk-description-list">
        <dt class="name">Normal 1.50 <span>Max 2.0+</span></dt>
       </dl>

        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        
        <div>
        <dt class="klorstod" align="center">Klórstöð</dt>  
        <b-field>
          <b-numberinput size="is-small" min="1.0" type="number" step="0.1" v-model="malingsundlaug"></b-numberinput>
        </b-field>
        </div>

        <div>
        <dt class="ker" align="center">Handmæling</dt> 
        <b-field>
          <b-numberinput size="is-small" min="1.0" type="number" step="0.1" v-model="testsundlaug"></b-numberinput>
        </b-field>
        </div>

        </div><!-- grid -->

        </v-col>
        </div><!-- .klorlaug -->

        <div class="leidlaug">
        <v-col lg="12" cols="12">

        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">  

        <dl class="uk-description-list">
        <dt class="name">Leiðrétting</dt>
       </dl>

        <b-field>
          <input class="uk-input" type="number" v-model="utkomasundlaug"></p>
        </b-field>
        
        </div><!-- grid -->

        </v-col>
        </div><!-- .leidlaug -->

        <h1 class="malingkaldur" align="center"><dt class="name"><span>KLÓRMÆLING</span> KALDUR POTTUR</dt></h1> 

        <!-- kaldur pottur ///////////////////////////// -->
        <div class="klorkaldur">
         <v-col lg="12" cols="12">
        <dl class="uk-description-list">
        <dt class="name">Normal 2.40 <span>Max 3.0+</span></dt>
       </dl>

        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        
        <div>
        <dt class="klorstod" align="center">Klórstöð</dt>
        <b-field>
          <b-numberinput size="is-small" min="1.0" type="number" step="0.1" v-model="malingkaldurpottur"></b-numberinput>
        </b-field>
        </div>

        <div>
        <dt class="ker" align="center">Handmæling</dt> 
        <b-field>
          <b-numberinput size="is-small" min="1.0" type="number" step="0.1" v-model="testkaldurpottur"></b-numberinput>
        </b-field>
        </div>

        </div>

        </v-col>
        </div><!-- .klorkaldur -->

        <div class="leidkaldur">
        <v-col lg="12" cols="12">
        
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">

        <dl class="uk-description-list">
        <dt class="name">Leiðrétting</dt>
       </dl>

        <b-field>
          <input class="uk-input" type="number" v-model="utkomakaldurpottur"></p>
        </b-field>

        </div><!-- grid -->

        </v-col>
        </div><!-- .leidkaldur -->

        <h1 class="malingheitur" align="center"><dt class="name"><span>KLÓRMÆLING</span> HEITUR POTTUR</dt></h1> 

        <!-- heitur pottur ///////////////////////////// -->
        <div class="klorheitur">
         <v-col lg="12" cols="12">
        <dl class="uk-description-list">
        <dt class="name">Normal 2.50 <span>Max 3.0+</span></dt>
       </dl>

        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        
        <div>
        <dt class="klorstod" align="center">Klórstöð</dt>  
        <b-field>
          <b-numberinput size="is-small" min="1.0" type="number" step="0.1" v-model="malingheiturpottur"></b-numberinput>
        </b-field>
        </div>

        <div>
        <dt class="ker" align="center">Handmæling</dt> 
        <b-field>
          <b-numberinput size="is-small" min="1.0" type="number" step="0.1" v-model="testheiturpottur"></b-numberinput>
        </b-field>
        </div>

        </div><!-- grid -->

        </v-col>
        </div><!-- .klorheitur -->

        <div class="leidheitur">
        <v-col lg="12" cols="12">

        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">

        <dl class="uk-description-list">
        <dt class="name">Leiðrétting</dt>
       </dl>

        <b-field>
          <input class="uk-input" type="number" v-model="utkomaheiturpottur"></p>
        </b-field>

        </div><!-- grid -->

        </v-col>
        </div><!-- .leidheitur -->

        </div><!-- .klormalingar -->

          <div class="minnisoginfo">

          <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">  

          <div class="minnismidi">

          <h1 class="minnismidi" align="center"><dt class="name">ATHUGA<span>SEMD</span></dt></h1>  

          <b-field type="is-info">
            <b-input size="is-medium" maxlength="200" type="textarea"></b-input>
          </b-field>
        </div><!-- .minnismidi -->

          <div class="klormagn">
          <h1 class="klormagn" align="center"><dt class="name">KLÓR<span>MAGN</span></dt></h1>

          <b-field type="is-info">
            <b-input size="is-medium" placeholder="Klórmagn/L"></b-input>
        </b-field>
        </div><!-- .klormagn -->

        </div><!-- grid -->

        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">

        <div class="starfsmadur">

          <h1 class="starfsmadur" align="center"><dt class="name">STARFS<span>MAÐUR</span></dt></h1>

          <b-field>
            <b-select size="is-medium" placeholder="Starfsmaður" icon="account">
                <option class="odinn" value="odinn">Óðinn</option>
                <option class="robert" value="robert">Róbert</option>
                <option class="oli" value="oli">Óli</option>
                <option class="torvald" value="torvald">Þorvaldur</option>
                <option class="steina" value="steina">Steina</option>
                <option class="halla" value="halla">Halla</option>
                <option class="ragna" value="ragna">Ragna</option>
            </b-select>
        </b-field>
        </div><!-- .starfsmadur -->

          <button class="uk-button uk-button-secondary uk-width-1-1 right">vista</button>
          <pre>
          {{output}}
          </pre>

        </div><!-- grid -->

        </div><!-- .minnisoginfo -->
  
</div><!-- grid -->

    </fieldset>

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

</div><!-- .klorval -->

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
     hitisundlaug: null,
     hitikaldurpottur: null,
     hitiheiturpottur: null,
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
  utkomasundlaug: function() {
      let calculatedTotal = this.malingsundlaug - this.testsundlaug;
      this.utkomasundlaug_total = calculatedTotal
      return calculatedTotal / '2';
    },

    utkomakaldurpottur: function() {
      let calculatedTotal = this.malingkaldurpottur - this.testkaldurpottur;
      this.utkomakaldurpottur_total = calculatedTotal
      return calculatedTotal / '2';
    },

    utkomaheiturpottur: function() {
      let calculatedTotal = this.malingheiturpottur - this.testheiturpottur;
      this.utkomaheiturpottur_total = calculatedTotal
      return calculatedTotal / '2';
    },
    
    // utkomasundlaug() {
    //   return this.malingsundlaug - this.testsundlaug;
    // },
    // utkomakaldurpottur() {
    //   return this.malingkaldurpottur - this.testkaldurpottur;
    // },
    // utkomaheiturpottur() {
    //   return this.malingheiturpottur - this.testheiturpottur;
    // },
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
                axios.post('http://localhost:1337/klors', {
                //axios.post('https://sundlaug.herokuapp.com/klormalingars', {
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