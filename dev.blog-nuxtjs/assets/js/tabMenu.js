Vue.component('tab-movie', {
  template: `
    <ul class="news__ul">
      <li class="news__li">
        <div class="news__date">
          <span>2020.12</span>
          <strong>20</strong>
        </div>
        <p class="news__text"><a href="#">MOVIE-TEXT</a></p>
      </li>
      <li class="news__li">
        <div class="news__date">
          <span>2020.12</span>
          <strong>20</strong>
        </div>
        <p class="news__text"><a href="#">MOVIE-TEXT</a></p>
      </li>
      <li class="news__li">
        <div class="news__date">
          <span>2020.12</span>
          <strong>20</strong>
        </div>
        <p class="news__text"><a href="#">MOVIE-TEXT</a></p>
      </li>
      <li class="news__li">
        <div class="news__date">
          <span>2020.12</span>
          <strong>20</strong>
        </div>
        <p class="news__text"><a href="#">MOVIE-TEXT</a></p>
      </li>
    </ul>
  `
});
Vue.component('tab-coding', {
  template: `
  <ul class="news__ul">
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
  `
});
Vue.component('tab-uniqlo', {
  template: `
  <ul class="news__ul">
  <li class="news__li">
    <div class="news__date">
      <span>2020.12</span>
      <strong>20</strong>
    </div>
    <p class="news__text"><a href="#">UNIGLO-TEXT</a></p>
  </li>
  <li class="news__li">
    <div class="news__date">
      <span>2020.12</span>
      <strong>20</strong>
    </div>
    <p class="news__text"><a href="#">UNIGLO-TEXT</a></p>
  </li>
  <li class="news__li">
    <div class="news__date">
      <span>2020.12</span>
      <strong>20</strong>
    </div>
    <p class="news__text"><a href="#">UNIGLO-TEXT</a></p>
  </li>
  <li class="news__li">
    <div class="news__date">
      <span>2020.12</span>
      <strong>20</strong>
    </div>
    <p class="news__text"><a href="#">UNIGLO-TEXT</a></p>
  </li>
</ul>
  `
});

Vue.component('tab-other', {
  template: `
  <ul class="news__ul">
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
  `
});

var vm = new Vue({
  el: '#tabMenu',
  data: {
    active: 'movie',
    items: {
      movie: 'MOVIE',
      coding: 'CODING',
      uniqlo: 'UNIQLO',
      other: 'OTHER',
    }
  },
  computed: {
    activeTabComponent: function () {
      return 'tab-' + this.active;
    }
  },
  methods: {
    activate: function (key) {
      this.active = key;
    }
  }
});
