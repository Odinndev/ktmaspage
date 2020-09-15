<template>

<div class="header">

<nav class="uk-navbar-container" uk-navbar>

    <div class="uk-navbar-left">

        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="#">Heim</a></li>
            <li>
                <a href="#">Klórmælingar</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><a href="#">+Ný Mæling</a></li>
                        <li><a href="#">klórmælingar</a></li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="#">Þrifaplan</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><a href="#">+Nýtt Þrifaplan</a></li>
                        <li><a href="#">Þrifaplön</a></li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="#">Árskort</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><a href="#">+Nýtt Árskort</a></li>
                        <li><a href="#">Í Pöntun</a></li>
                        <li><a href="#">Skoða Safn</a></li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="#">Matur</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><a href="#">+ Matarpöntun</a></li>
                        <li><a href="#">Matarpantanir</a></li>
                    </ul>
                </div>
            </li>
        </ul>

    </div>

    <div class="uk-navbar-right">

          <!-- // If you are logged in -->
          <ul class="uk-navbar-nav" v-if="username">

              <notifi />

              <li><a href="#" class="uk-link-reset"><img class="uk-border-circle" width="20" height="20" v-bind:src="avatar" alt="">{{ username }}</a></li>
              <li><a href="#" @click="logout"><span uk-icon="icon: sign-out"></span>Útskrá</a></li>
          </ul>

          <!-- // If you are not logged in -->
          <ul class="uk-navbar-nav" v-else>
              <li><a href="/users/register"><span uk-icon="icon: push"></span>Nýskrá</a></li>
              <li><a href="/users/signin"><span uk-icon="icon: sign-in"></span>Innskrá</a></li>
          </ul>
</div><!-- .uk-navbar-right -->

</nav>

<client-only>

</client-only>

</div><!-- .header -->

</template>

<script>  
import { mapMutations } from 'vuex'
import notifi from './notifi'

export default {  

components: {
  notifi,
},
  
  computed: {
    // Set your username thanks to your getter
    username() {
      return this.$store.getters['auth/username']
    },
    avatar() {
      return this.$store.getters['auth/avatar']
    },
    starf() {
      return this.$store.getters['auth/starf']
    },
  },
  methods: {
    // Define your needed mutations, here: auth/logout
    ...mapMutations({
      logout: 'auth/logout'
    })
  }
}
</script>  