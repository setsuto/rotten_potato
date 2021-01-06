<template>

  <!-- <h2 class="section-news--title mb-sm underline">TOPIC</h2> -->
  <ul class="topic__ul">
    <li class="topic__li red">
      <div class="topic__link">
        <div class="topic__picture">
          <img class="topic__picture--img" :src="work.fields.image.fields.file.url">
        </div>
        <div class="topic__preview">
          <time class="topic__preview--date">{{ work.sys.updatedAt | moment }}</time>

          <nuxt-link :to=" '/category/' + work.fields.category.sys.id ">
            <div class="topic__preview--category">{{ work.fields.category.fields.name }}</div>
          </nuxt-link>


          <div class="topic__preview--category" style="cursor: pointer;" v-for="tag in work.fields.tag"
            :key="tag.sys.id" @click="$router.push('/tag/'+tag.sys.id)">
            {{ tag.fields.name }}
          </div>


          <nuxt-link :to=" '/work/'+work.fields.slug ">
            <h2 class="topic__preview--title">{{ work.fields.title }}</h2>
            <div class="topic__preview--description">
              <p>{{ work.fields.subtitle }}</p>
              <a href="#" class="">Read&nbsp;more&nbsp;»</a>
            </div>
          </nuxt-link>
          <div class="topic__preview--share">
            <a href="#">
              <svg width="16px" height="16px">
                <use xlink:href="../assets/images/sprite.svg#icon-twitter"></use>
              </svg>
            </a>
            <a href="#">
              <svg width="16px" height="16px">
                <use xlink:href="../assets/images/sprite.svg#icon-facebook"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>


<style></style>

<script>
import moment from 'moment';
  export default {
    props: ['work'],
        filters: {
        moment: function (date) {
            return moment(date).format('YY/MM/DD HH:mm');
        }
    }
  }

</script>
