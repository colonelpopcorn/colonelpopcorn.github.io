<template>
   <div id="projects">
      <div>
        <h2>Free Code Camp Components:</h2>
        <hr />
        <br />
        <div class="row">
          <quote-generator />
          <pomodoro />
        </div>
      </div>
   </div>
</template>

<script>
import Quotes from './projects/Quotes'
import Pomodoro from './projects/Pomodoro'

export default {
  name: 'projects',
  data () {
    return {}
  },
  components: {
    'quote-generator': Quotes,
    'pomodoro': Pomodoro
  }
}
</script>
