<template>
  <div style="max-width:500px; margin:0 auto; padding:150px 0">

    <h2>フォーム</h2>
    <label for="name">お名前</label>
    <input class="search__input" id="name" type="text" v-model.lazy="eventData.name">
    <p class="mb-md font-md">{{ eventData.name }}</p>

    <label for="maxNumber">人数</label>
    <input class="search__input" id="maxNumber" type="number" v-model.number="eventData.maxNumber">
    <p class="mb-md font-md">{{ eventData.maxNumber }}</p>

    <label for="host">代表</label>
    <input class="search__input" id="host" type="text" v-model.trim="eventData.host">
    <p class="mb-md font-md">{{ eventData.host }}</p>

    <label for="detail">メッセージの内容</label>
    <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
    <p style="white-space: p;" class="mb-md font-md">{{ eventData.detail }}</p>

    <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
    <label for="isPrivate">非公開</label>
    <p>{{ eventData.isPrivate }}</p>

    <p>参加条件</p>

    <input type="checkbox" id="10" value="10代" v-model="eventData.target">
    <label for="10">10代</label>
    <input type="checkbox" id="20" value="20代" v-model="eventData.target">
    <label for="20">20代</label>
    <input type="checkbox" id="30" value="30代" v-model="eventData.target">
    <label for="30">30代</label>
    <p>{{eventData.target}}</p>

    <input type="radio" id="free" value="無料" v-model="eventData.price">
    <label for="free">無料</label>
    <input type="radio" id="paid" value="有料" v-model="eventData.price">
    <label for="paid">有料</label>

    <p>都道府県</p>
    <select v-model="eventData.location" multiple>
      <option v-for="location in locations" :key="location">{{location}}</option>
    </select>
    <p>{{eventData.location}}</p>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        props: ["value"],
        locations: ["東京", "大阪", "名古屋"],
        eventData: {
          name: "",
          maxNumber: 0,
          host: "",
          detail: "",
          isPrivate: false,
          target: [],
          price: "無料",
          location: []
        }
      };
    },
    mounted() {

    },
    methods: {

    },
  };
</script>
