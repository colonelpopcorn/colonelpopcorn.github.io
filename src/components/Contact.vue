<template>
  <lorem-ipsum :component-id="name" :header="header"/>
</template>

<script>
import LoremIpsum from './Ipsum/LoremIpsum'

export default {
  data () {
    return {
      name: 'contact',
      header: 'Contact me here!'
    }
  },
  components: {
    'lorem-ipsum': LoremIpsum
  }
}
</script>
