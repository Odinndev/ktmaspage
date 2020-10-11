<template>

<div class="header">

<nav class="uk-navbar-container" uk-navbar>

    <div class="uk-navbar-left">

        <ul class="uk-navbar-nav">
            <li class="uk-active"><n-link to="/">Heim</n-link></li>
            <li>
                <a href="#">Klórmælingar</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><n-link to="/klorval">+Ný Mæling</n-link></li>
                        <li><n-link to="/klor">klórmælingar</n-link></li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="#">Þrifaplan</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><n-link to="/nythrif">+Nýtt Þrifaplan</n-link></li>
                        <li><n-link to="/thrif">Þrifaplön</n-link></li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="#">Árskort</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><n-link to="/nyttarskort">+Nýtt Árskort</n-link></li>
                        <li><n-link to="/arskort">Skoða Safn</n-link></li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="#">Skólakort</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><n-link to="/nyttskolakort">+Nýtt Skólakort</n-link></li>
                        <li><n-link to="/skolakort">Skoða Safn</n-link></li>
                        <li><n-link to="/skort/pontun">Í Pöntun</n-link></li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="#">Pantanir</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-active"><n-link to="/nymatarpontun">+Nýpöntun</n-link></li>
                        <li><n-link to="/matarpantanir">Pantanir</n-link></li>
                        <li><n-link to="/matur">Skoða Pantanir</n-link></li>
                    </ul>
                </div>
            </li>
        </ul>

    </div>

    <div class="uk-navbar-right">

          <!-- // If you are logged in -->
          <ul class="uk-navbar-nav" v-if="username">

              <notifi />

              <li><a href="#" class="uk-link-reset"><v-icon size="16">mdi-account-box</v-icon>{{ username }}</a></li>
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