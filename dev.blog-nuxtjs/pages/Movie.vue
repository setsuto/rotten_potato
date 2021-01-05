<template>
<div>
  <magic-grid class="posts-list">
    <div v-for="movie in movies" :key="movie.id" class="posts-item nes-container with-title is-centered">
      <img :src="'http://image.tmdb.org/t/p/w300/' + movie.poster_path">
      <p class="posts__title">{{ movie.title }}</p>
      <p class="posts__date">{{ movie.release_date }}</p>
      <p class="posts__overview">{{ movie.overview }}</p>
    </div>
  </magic-grid>

</div>

</template>

<script>
  import axios from 'axios'
  export default {
    name: 'app',
    data() {
      return {
        movies: [],
        // 自分のkeyに置き換える
        apiKey: '65d5958e2e015c9b9d209285d930e600',
      }
    },
    methods: {
      getMovies() {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&page=1`)
          .then(response => {
            this.movies = response.data.results
            console.log(this.movies);
            // Vue.use(MagicGrid)
          })
        console.log(this.movies);
      },
    },
    created() {
      this.getMovies();
    }
  }
</script>


<style>
  .posts__title {
    font-size: 2.4rem;
    margin-bottom: 10px;
  }

  .posts__date {
    font-size: 1.6rem;
  }

  .posts__overview {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
</style>
