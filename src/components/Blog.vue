<template>
	<lorem-ipsum :component-id="name" :header="header"/>
</template>

<script>
import LoremIpsum from './Ipsum/LoremIpsum'

export default {
  name: 'blog',
  data () {
    return {
      name: 'blog',
      header: 'Blog component goes here!'
    }
  },
  components: {
    'lorem-ipsum': LoremIpsum
  }
}
</script>
