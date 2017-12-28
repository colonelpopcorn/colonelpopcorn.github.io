<template>
   <div id="projects">
      <div class="row">
         <quote-generator />
      </div>
   </div>
</template>

<script>
import Quotes from './projects/Quotes'

export default {
  name: 'projects',
  data () {
    return {}
  },
  components: {
    'quote-generator': Quotes
  }
}
</script>
