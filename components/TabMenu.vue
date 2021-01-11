<template>
  <div class="news mb-md" id="tabMenu">
    <ul class="tab">
      <li class="tab__item" v-for="(item, index) in items" :key="index" :class="{ active: active === index }">
        <a href="#" @click.prevent="activate(index)">{{ item }}</a>
      </li>
    </ul>
    <div class="tab-content">
      <ul class="news__ul tab-pane" v-show="active === 1">
      </ul>
      <ul class="news__ul tab-pane" v-show="active === 1">
        <li class="news__li">
          <div class="news__date">
            <!-- <span>2020.12</span> -->
            <strong>01</strong>
          </div>
          <p class="news__text"><a href="/" target="_black"><s>ALL</s></a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <!-- <span>2020.12</span> -->
            <strong>02</strong>
          </div>
          <p class="news__text"><a href="/"><s>NETFLIX</s></a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <!-- <span>2020.12</span> -->
            <strong>03</strong>
          </div>
          <p class="news__text"><a href="/"><s>amazonPrime</s></a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <!-- <span>2020.12</span> -->
            <strong>04</strong>
          </div>
          <p class="news__text"><a href="/"><s>アカデミー賞</s></a></p>
        </li>
      </ul>
      <ul class="news__ul tab-pane" v-show="active === 2">
        <li class="news__li">
          <div class="news__date">
            <!-- <span>2020.12</span> -->
            <strong>01</strong>
          </div>
          <p class="news__text"><a href="/category/5o9xcRHEPa8Hnycmi0Vvtb">ALL</a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <!-- <span>2020.12</span> -->
            <strong>02</strong>
          </div>
          <p class="news__text"><a href="/tag/6Wqsg2l9pa7MMS1lYUea0F">HTML / CSS</a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <!-- <span>2020.12</span> -->
            <strong>03</strong>
          </div>
          <p class="news__text"><a href="/"><s>Vue / Nuxt.js</s></a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <!-- <span>2020.12</span> -->
            <strong>04</strong>
          </div>
          <p class="news__text"><a href="/"><s>javascript</s></a></p>
        </li>
      </ul>
      <ul class="news__ul" v-show="active === 3">
        <li class="news__li">
          <div class="news__date">
            <!-- <span>2020.12</span> -->
            <strong>01</strong>
          </div>
          <p class="news__text"><a href="/" target="_black"><s>ALL</s></a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <!-- <span>2020.12</span> -->
            <strong>02</strong>
          </div>
          <p class="news__text"><a href="/" target="_black"><s>UNIQLO</s></a></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>

<script>
  export default {
    name: "tabMenu",
    data() {
      return {
        active: 0,
        items: ["Category", "MOVIE", "CODING", "OTHER"],
      };
    },
    methods: {
      activate: function (index) {
        this.active = index;
      },
    },
  };

</script>
