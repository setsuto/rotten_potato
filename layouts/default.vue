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
              <a href="/Movie" class="header__link" @click="currentComponent = 'Movie'">Flilms(2020)</a>
            </li>
          </ul>
        </nav>
      </template>

      <template v-slot:mobile-nav>
        <nav class="gnav__content">
          <ul class="gnav__list">
            <li class="gnav__item"><a href="/" class="gnav__link" @click="currentComponent = 'Home'">HOME</a></li>
            <li class="gnav__item"><a href="/Movie" class="gnav__link" @click="currentComponent = 'Movie'">MOVIE</a>
            </li>
            <li class="gnav__item"><a href="/Form" class="gnav__link" @click="currentComponent = 'Form'">CONTACT</a>
            </li>
          </ul>
        </nav>
      </template>
    </Header>
    <nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "@/layouts/Header"
  import Footer from "@/layouts/Footer"

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
    },
  }
</script>
