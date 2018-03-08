<template>
	<div :id="componentId">
    <h1>{{ header }}</h1>
		<span v-html="ipsum"></span>
	</div>
</template>

<script>
import loremIpsum from 'lorem-ipsum'

export default {
  name: 'blog',
  props: ['componentId', 'header'],
  data () {
    return {
    }
  },
  computed: {
    ipsum () {
      return loremIpsum({random: Math.random, count: '10', units: 'paragraphs', paragraphLowerBound: 9, paragraphUpperBound: 12, format: 'html'})
    }
  }
}
</script>
