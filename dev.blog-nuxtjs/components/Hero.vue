<template>
  <div>
    <div class="hero__header">
      <div class="hero__header--title">
        <!-- <span> AND ONE FLEW OVER THE CUCKOO'S NEST</span> -->
        <span>Netflix Movies TOP3(2020)</span>
      </div>

      <slot name="search-box"></slot>

    </div>

    <hooper :settings="hooperSettings">
      <slide>
        <div class="hero__title">#3 The Midnight Sky</div>
        <img src="../assets/images/hero-slider_01.jpg" alt="hero_movie_03" />
        <div class="hero__description">
          <blockquote>出典：作品ポスター・画像&nbsp;<a target="_blank" href="https://www.netflix.com/title/80244645">(C)Netflix</a>
          </blockquote>
        </div>
      </slide>
      <slide>
        <div class="hero__title">#1 Ma Rainey's Black Bottom</div>
        <img src="../assets/images/hero-slider_02.png" alt="hero_movie_02" />
        <div class="hero__description">
          <blockquote>出典：作品ポスター・画像&nbsp;<a target="_blank" href="https://www.netflix.com/title/81100780">(C)Netflix</a></blockquote>
        </div>
      </slide>
      <slide>
        <div class="hero__title">#2 Chicago 7</div>
        <img src="../assets/images/hero-slider_03.jpg" alt="hero_movie_03" />
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
    box-shadow: 1px 4px 10px 0 rgba(42,44,50,.16);
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
