<template>
  <div class="mb-md">
    <div class="hero__header">
      <div class="hero__header--title">
                        <svg style="width:24px; height:24px;">
                    <use xlink:href="../assets/images/sprite.svg#icon-tv"></use>
                </svg>
        <span class="ml-5">2020 Netflix Movies TOP3</span>
      </div>
    </div>

    <hooper :settings="hooperSettings">
      <slide>
                <div class="hero__title">#3 Mank</div>
        <img src="../assets/images/about_movie_03.jpg" alt="hero_movie_03" />
        <div class="hero__description">
          <blockquote>出典：作品ポスター・画像&nbsp;<a target="_blank" href="https://www.netflix.com/title/81117189">(C)Netflix</a>
          </blockquote>
        </div>
 
      </slide>
      <slide>
        <div class="hero__title">#2 Ma Rainey's Black Bottom</div>
        <img src="../assets/images/about_movie_03.jpg" alt="hero_movie_02" />
        <div class="hero__description">
          <blockquote>出典：作品ポスター・画像&nbsp;<a target="_blank" href="https://www.netflix.com/title/81100780">(C)Netflix</a>
          </blockquote>
        </div>
      </slide>
      <slide>
       <div class="hero__title">#1 Chicago 7</div>
        <img src="../assets/images/about_movie_03.jpg" alt="hero_movie_03" />
        <div class="hero__description">
          <blockquote>出典：作品ポスター・画像&nbsp;<a target="_blank" href="https://www.netflix.com/title/81043755">(C)Netflix</a>
          </blockquote>
        </div>
      </slide>
      <hooper-navigation slot="hooper-addons" />
    </hooper>
  </div>
</template>

<style>
  .icon-arrowLeft,
  .icon-arrowRight {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 1px 4px 10px 0 rgba(42, 44, 50, .16);
  }

</style>

<script>
  import {
    Hooper,
    Slide,
    Navigation as HooperNavigation,
  } from 'hooper';
  import 'hooper/dist/hooper.css';
  export default {
    name: 'app',
    components: {
      Hooper,
      Slide,
      HooperNavigation,
    },
    data() {
      return {
        hooperSettings: {
          mouseDrag: false,
          // infiniteScroll: true,
          // autoPlay: true,

        },
      }
    },
  };

</script>
