<template>
  <div class='card'>
    <div class='section'>
      <h3>{{ header }}</h3>
      <p>{{ quote }}</p>
      <p>{{ author }}</p>
      <div class="button-group">
        <button class="inverse" @click="setRandomQuote">Get New Quote</button>
        <a class="button primary" :href="twitterUrl">Tweet This Quote</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'quote-generator',
  data () {
    return {
      url: 'https://api.myjson.com/bins/3n6yk',
      twitterApi: 'https://twitter.com/intent/tweet?',
      twitterUrl: '',
      json: null,
      quote: '',
      author: '',
      isTransitioned: false,
      header: 'Christian Quote Generator'
    }
  },
  methods: {
    setRandomQuoteWithAnimation () {
      this.isTransitioned = !this.isTransitioned
      this.setRandomQuote()
    },
    setRandomQuote () {
      var index = Math.floor((Math.random() * this.json.length) + 1)
      this.quote = this.json[index].quote
      this.author = '-' + this.json[index].author
      this.buildTwitterLink(this.quote)
      this.isTransitioned = true
    },
    buildTwitterLink (quote) {
      if (quote.length > 94) {
        quote = quote.substring(0, 94)
      }
      this.twitterUrl = encodeURI(this.twitterApi + 'text=' + quote + '&via=colonelpopcorn.github.io')
    }
  },
  mounted () {
    this.$http.get(this.url).then((response) => {
      this.json = JSON.parse(response.request.response).content.quotes
      this.setRandomQuote()
    })
    .catch((err) => {
      console.log('Could not reach ' + this.url + ', try again later!', err)
    })
  }
}

</script>

<style>

</style>
