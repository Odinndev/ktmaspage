<template>  
  <div>
  <v-app>
    <Header />

    <!-- <div class="uk-section uk-section-default">
      <div class="uk-container uk-container-large"> -->
        
        <nuxt />

        <Footer />
     </v-app>
      <!-- </div>
    </div> -->

  </div>
</template>

<script>  
import Header from '~/components/Header.vue' 
import Footer from '~/components/Footer.vue' 

export default {  
  components: {
    Header,
    Footer
  }
}
</script>