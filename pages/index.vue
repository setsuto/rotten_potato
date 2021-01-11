<template>
  <div class="content-width">

    <Hero></Hero>
    <TabMenu>

    </TabMenu>

    <div class="wrapper">
      <article class="article">
        <section class="section-topic ">
          <h2 class="section-title mb-md under-line">Recent</h2>
          <Item v-for="work in works" :key="work.sys.id" :work="work"></Item>
        </section>
      </article>

        <SideProfile></SideProfile>
    </div>


  </div>
</template>

<style></style>

<script>
  import Hero from '@/components/Hero'
  import TabMenu from '@/components/TabMenu'
  import Item from '@/components/Item'
  import SideProfile from '@/components/SideProfile'

  import {
    createClient
  } from '~/plugins/contentful.js'
  const client = createClient()
  
  export default {
    data() {
            count: 20
    },
    components: {
      Hero,
      TabMenu,
      Item,
      SideProfile,
    },
    asyncData() {
      return Promise.all([
        client.getEntries({
          'content_type': 'work', // workタイプの記事データを全取得
          order: '-sys.createdAt' // 作成日時順に並べる
        })
      ]).then(([works]) => {
        return {
          works: works.items // 取得したデータを配列worksに入れる
        }
      }).catch(console.error)
    },
  }

</script>
