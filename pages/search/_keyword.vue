<template>
<div class="content-width">
  <TabMenu></TabMenu>
    <div class="wrapper">
      <article class="article">
        <section class="section-topic ">
          <h2 class="section-title mb-md under-line">検索結果&nbsp;{{ works.length }}件</h2>
          <Item v-for="work in works" :key="work.sys.id" :work="work"></Item>
          <!-- <infinite-loading ref="infiniteLoading" spinner="spiral" @infinite="infiniteHandler">
            <span slot="no-more">no more</span>
            <span slot="no-results">no more results</span>
          </infinite-loading> -->
        </section>
      </article>

      <aside class="aside">
        <SideProfile></SideProfile>
      </aside>
    </div>
    </div>
</template>

<script>
import Item from '@/components/Item'
import SideProfile from '@/components/SideProfile'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()
export default { 
  components: {
    Item,
    SideProfile
  },
    data() {
      return {
        keyword: '',
        // currentComponent: 'default',
      };
    },
  asyncData ({params}) {
    return Promise.all([
      client.getEntries({
        'content_type': 'work',
        query: params.keyword, 
        order: '-sys.createdAt'
      }),
    ]).then(([works]) => {
      return {
        works: works.items
      }
    }).catch(console.error)
  }
}
</script>
