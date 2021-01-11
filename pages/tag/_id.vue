

<template>
  <div class="content-width">
    <TabMenu></TabMenu>
    <Item 
      v-for="work in works" 
      :key="work.sys.id"
      :work="work"
    />
  </div>
</template>

<script>
import Item from '@/components/Item'
import TabMenu from '@/components/TabMenu'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()
export default {
  components: {
    Item,
    TabMenu
  },
  asyncData ({params}) {
    return Promise.all([
      client.getEntries({
        'content_type': 'work',
        'fields.tag.sys.id': params.id,
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
