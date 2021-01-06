<template>
  <section>
    <div class="flex" style="align-items:center;">
      <div class="bg-center bg-cover w-16 h-16 mr-5 rounded-full shadow photo"></div>
      <h1 class="font-bold">SETSUTO</h1>
    </div>
    <p class="text-md text-justify mb-md leading-8">
      27歳フリーター、趣味はwebサイト制作と映画鑑賞。<br>Techpit、qiitaの記事を参考にしてJAMstackブログを作りました。<br>
    </p>
    <div class="search">
      <input type="text" class="search__input" placeholder="Search" v-model="keyword"
        @keypress.enter="$router.push('/search/' + keyword)">
      <button class="search__btn">
        <svg class="search__icon">
          <use xlink:href="../assets//images/sprite.svg#icon-search"></use>
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
  import {
    faTwitter
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faGithub
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faCode
  } from '@fortawesome/free-solid-svg-icons'
  export default {
    data() {
      return {
        keyword: '',
        // currentComponent: 'default',
      };
    },
    computed: {
      faTwitter() {
        return faTwitter
      },
      faGithub() {
        return faGithub
      },
      faCode() {
        return faCode
      }
    }
  }

</script>

<style>
  main {
    max-width: 550px;
  }

  .photo {
    min-width: 4rem;
    min-height: 4rem;
    background-image: url('../assets/images/about_profile.png');
  }

  button:focus {
    outline: none;
  }

</style>
