<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <content-container/>
  </div>
</template>

<script>
import Content from './Content'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'User interfaces done right!'
    }
  },
  components: {
    'content-container': Content
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
