<template>
  <div>
    <h1>{{ testVal }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data: function() {
    return {
      testVal: "Hello World!"
    };
  }
});
</script>

