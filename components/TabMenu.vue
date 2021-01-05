<template>
  <div class="news mb-sm" id="tabMenu">
    <ul class="tab">
      <li class="tab__item" v-for="(item, index) in items" :key="index" :class="{ active: active === index }">
        <a href="#" @click.prevent="activate(index)">{{ item }}</a>
      </li>
    </ul>
    <div class="tab-content">
      <ul class="news__ul tab-pane" v-show="active === 0">
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="#">NETFLIX</a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="#">amazonPrime</a></p>
        </li>
      </ul>


      <ul class="news__ul tab-pane" v-show="active === 1">
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="#">CODING-TEXT</a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="#">CODING-TEXT</a></p>
        </li>
      </ul>
      <ul class="news__ul tab-pane" v-show="active === 2">
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="/category/1UBtd4pij03W4imMtBAhU8" target="_black">HTML / CSS</a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="/category/1UBtd4pij03W4imMtBAhU8" target="_black">Vue / Nuxt.js</a></p>
        </li>
      </ul>
      <ul class="news__ul" v-show="active === 3">
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="#">OTHER-TEXT</a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="#">OTHER-TEXT</a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="#">OTHER-TEXT</a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="#">OTHER-TEXT</a></p>
        </li>
      </ul>
    </div>
    <button class="btn slide-bg">⇒&nbsp;NEWS</button>
  </div>
</template>

<style></style>

<script>
  export default {
    name: 'tabMenu',
    data() {
      return {
        active: 0,
        items: [
          'MOVIE',
          'ITEM',
          'CODING',
          'OTHER',
        ]

      }
    },
    methods: {
      activate: function (index) {
        this.active = index;
      }
    },
  };
</script>
