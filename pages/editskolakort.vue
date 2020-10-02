<template>
<!-- <div v-if="$fetchState.pending">Fetching post #{{$route.params.id}}...</div> -->
  <div>
    {{$route.params.id}} <br>
    {{ post.nafn }} <br>
    {{ post.heimili }} <br>
    {{ post.postnr }} {{ post.stadur }} <br>
    {{ post.kt }} <br>
    {{ post.simi }} <br>
    {{ post.gildir}} <br>
    <p><n-link to="/">Til baka</n-link></p>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        post: [],
      }
    },

    async fetch() {
    axios.get(`http://localhost:1337/skolakorts/${this.$route.params.id}`)
    //axios.get(`https://sundlaug.herokuapp.com/klormalingars?_sort=created_at:desc`)
    .then(response => {
    this.post = response.data
    })
    .catch(e => {

    })
    },

    // async fetch() {
    //   this.post = await this.$http.$get(`http://localhost:1337/skolakorts/${this.$route.params.id}`)
    // }
  }
</script>