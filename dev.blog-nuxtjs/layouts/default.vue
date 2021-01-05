<template>
  <div>
    <Header>
      <template v-slot:header-nav>
        <nav class="header__nav nav" id="headerNav">
          <ul class="header__ul">
            <li class="header__li">
              <a href="/" class="header__link" @click="currentComponent = 'Index'">HOME</a>
            </li>
            <li class="header__li">
              <a href="/About" class="header__link" @click="currentComponent = 'About'">ABOUT</a>
            </li>
            <li class="header__li">
              <a href="/Movie" class="header__link" @click="currentComponent = 'Movie'">Flilms(2020)</a>
            </li>
            <li class="header__li">
              <a href="/Form" class="header__link" @click="currentComponent = 'Form'">CONTACT</a>
            </li>
          </ul>
        </nav>
      </template>

      <template v-slot:mobile-nav>
        <nav class="gnav__content">
          <ul class="gnav__list">
            <li class="gnav__item"><a href="/" class="gnav__link" @click="currentComponent = 'Home'">HOME</a></li>
            <li class="gnav__item"><a href="/About" class="gnav__link" @click="currentComponent = 'About'">ABOUT</a>
            </li>
            <li class="gnav__item"><a href="/Movie" class="gnav__link" @click="currentComponent = 'Movie'">MOVIE</a>
            </li>
            <li class="gnav__item"><a href="/Form" class="gnav__link" @click="currentComponent = 'Form'">CONTACT</a>
            </li>
          </ul>
        </nav>
      </template>
    </Header>
    <nuxt />
    <!-- <keep-alive> -->
    <!-- <component :is="currentComponent"></component> -->
    <!-- </keep-alive> -->
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "@/layouts/Header"
  import Footer from "@/layouts/Footer"

  export default {
    name: 'App',
    data() {
      return {
        keyword: '',
        // currentComponent: 'default',
      };
    },
    components: {
      Header,
      Footer,
    },
    methods: {
      incrementNumber(value) {
        this.number = value
      }
    }
  }

</script>


<style>
  @import url('//fonts.googleapis.com/css2?family=Poppins%3Awght%40400%3B500%3B700&#038;display=swap');
  @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');

</style>
