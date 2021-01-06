<template>
  <div class="news mb-md" id="tabMenu">
    <ul class="tab">
      <li class="tab__item" v-for="(item, index) in items" :key="index" :class="{ active: active === index }">
        <a href="#" @click.prevent="activate(index)">{{ item }}</a>
      </li>
    </ul>
    <div class="tab-content">
      <ul class="news__ul tab-pane" v-show="active === 1">
        <!-- <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="#">ALL</a></p>
        </li>
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
        </li> -->
      </ul>

      <ul class="news__ul tab-pane" v-show="active === 1">
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="/" target="_black">ALL</a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="/" target="_black">NETFLIX</a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="/" target="_black">新作</a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="/" target="_black">作品賞</a></p>
        </li>
      </ul>
      <ul class="news__ul tab-pane" v-show="active === 2">
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="/category/5o9xcRHEPa8Hnycmi0Vvtb">ALL</a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="/tag/6Wqsg2l9pa7MMS1lYUea0F" target="_black">HTML / CSS</a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="/" target="_black">Vue / Nuxt.js</a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="/" target="_black">javascript</a></p>
        </li>
      </ul>
      <ul class="news__ul" v-show="active === 3">
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="/" target="_black">ALL</a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="/" target="_black">UNIQLO</a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="/" target="_black">宅配クーポン</a></p>
        </li>
        <li class="news__li">
          <div class="news__date">
            <span>2020.12</span>
            <strong>20</strong>
          </div>
          <p class="news__text"><a href="/" target="_black">限定・コラボ商品情報</a></p>
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
