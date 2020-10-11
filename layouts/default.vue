<template>  
  <div>
  <v-app>
    <Header />
     <nuxt />
     <Footer />
    </v-app>
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