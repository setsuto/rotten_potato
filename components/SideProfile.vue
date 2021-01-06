<style>

</style>


<template>
  <aside class="aside">
    <section class="section-story">
      <div class="story" id="story">
        <div class="story__content">
          <div class="story__desc">
            <div class="story__title mb-md section">
              <h2><span>Rotten&nbsp;<span class="highlight" style="color: white;">Potato</span></span></h2>
            </div>
          </div>
          <div class="story__gallery mb-md">
            <img srcset="../assets/images/about_movie_04.jpg 300w, ../assets/images/about_movie_04.jpg 1000w"
              sizes="(max-width: 56.25em) 30vw, (max-width: 37.5em) 30vw, 300px" class="story__photo story__photo--1"
              alt="about_movie_03.jpg" src="../assets/images/about_movie_04.jpg">

            <img srcset="../assets/images/about_movie_03.jpg 300w, ../assets/images/about_movie_03.jpg 1000w"
              sizes="(max-width: 56.25em) 30vw, (max-width: 37.5em) 30vw, 300px" class="story__photo story__photo--2"
              alt="about_movie_03.jpg" src="../assets/images/about_movie_03.jpg">

            <img srcset="../assets/images/about_movie_02.jpg 300w, ../assets/images/about_movie_02.jpg 1000w"
              sizes="(max-width: 56.25em) 30vw, (max-width: 37.5em) 30vw, 300px" class="story__photo story__photo--3"
              alt="about_movie_02.jpg" src="../assets/images/about_movie_04.jpg">
          </div>
          <p class="mb-sm">
            あなたの映画ライフを応援するブログです。<br>糞映画から良映画まで幅広く紹介します。
          </p>
          <button class="btn slide-bg">ABOUT</button>

        </div>
      </div>
      <!-- <div class="story__footer">
          <img class="story__downarrow" src="../assets/images/SVG/arrow.svg" alt="../assets/images/SVG/arrow.svg">
          <span class="story__scrolltext">scroll</span>
        </div> -->
    </section>
 
       <section class="side-profile mb-md sticky top-0">
      <div class="flex" style="align-items:center;">
        <div class="bg-center bg-cover w-16 h-16 mr-5 rounded-full shadow photo"></div>
        <h1 class="">SETSUTO</h1>
      </div>
      <p class="text-md text-justify mb-sm leading-8">
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

  </aside>
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
