<template>
  <div class='card'>
    <div class='section'>
      <h3>{{ header }}</h3>
      <div class="time-boxes">
        <h4 class="text-center">{{ timerHeader }}</h4>
        <p class="text-center timer-section">{{ timerToString }}</p>
        <div class="row">
          <h4 class="text-center">{{ runHeader }}</h4>
          <input class="text-center" v-model="time" :disabled="timerRunning"/>
        </div>
        <div class="row">
          <button @click="subtractPomoTime" class="btn toggle-buttons left-button">
            <i class="fa fa-4x fa-arrow-left" aria-hidden="true"></i>
          </button>
          <button @click="addPomoTime" class="btn toggle-buttons">
            <i class="fa fa-4x fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
        <div class="row">
          <h4 class="text-center">{{ breakHeader }}</h4>
          <input class="text-center" v-model="breakTime" :disabled="timerRunning"/>
          <button @click="subtractBreakTime" class="btn toggle-buttons left-button">
            <i class="fa fa-4x fa-arrow-left" aria-hidden="true"></i>
          </button>
          <button @click="addBreakTime" class="btn toggle-buttons">
            <i class="fa fa-4x fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="button-group">
        <button @click="startTimer" class="tertiary large">Start Timer</button>
        <button @click="stopTimer" class="secondary large">Stop Timer</button>
        <button @click="resetTimer" class="primary large">Reset Timer</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pomodoro',
    data () {
      return {
        header: 'Pomodoro Clock',
        timerHeader: 'Timer',
        runHeader: 'Run Time',
        breakHeader: 'Break Time',
        time: 25,
        timeInSeconds: 0,
        breakTime: 5,
        interval: null,
        timerRunning: false,
        isPomoTime: true
      }
    },
    computed: {
      timerToString () {
        return this.getTimeStringFromSeconds(this.timeInSeconds.toString())
      }
    },
    methods: {
      runPomoTimer () {
        if (this.timeInSeconds > 0) {
          this.timeInSeconds = this.timeInSeconds - 1
        } else {
          var audio = new Audio('http://onlineclock.net/audio/options/rooster.mp3')
          audio.play()
          clearInterval(this.interval)
          this.startTimer()
        }
      },
      startTimer () {
        if (this.timeInSeconds <= 0) {
          if (this.isPomoTime) {
            this.setTimeInSeconds(this.time)
            this.isPomoTime = false
          } else {
            this.setTimeInSeconds(this.breakTime)
            this.isPomoTime = true
          }
          this.timerRunning = true
        }
        this.interval = setInterval(this.runPomoTimer, 1100)
      },
      stopTimer () {
        clearInterval(this.interval)
        this.timerRunning = false
      },
      resetTimer () {
        if (!this.timerRunning) this.setTimeInSeconds(this.time)
      },
      addPomoTime (event) {
        if (!this.timerRunning) this.time++
      },
      subtractPomoTime (event) {
        if (!this.timerRunning) this.time--
      },
      addBreakTime (event) {
        if (!this.timerRunning) this.breakTime++
      },
      subtractBreakTime (event) {
        if (!this.timerRunning) this.breakTime--
      },
      setTimeInSeconds (time) {
        this.timeInSeconds = time * 60  // Convert minutes to seconds.
      },
      // Thanks to stack overflow user Austin Pray for this one:
      // http://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss?page=1&tab=votes#tab-top
      getTimeStringFromSeconds (someString) {
        var secNum = parseInt(someString, 10) // don't forget the second param
        var hours = Math.floor(secNum / 3600)
        var minutes = Math.floor((secNum - (hours * 3600)) / 60)
        var seconds = secNum - (hours * 3600) - (minutes * 60)

        if (hours < 10) { hours = '0' + hours }
        if (minutes < 10) { minutes = '0' + minutes }
        if (seconds < 10) { seconds = '0' + seconds }
        return minutes + ':' + seconds
      }
    }
  }
</script>

<style>
  .center-block {
    margin: 0 auto;
  }

  .header {
    font-size: 6em;
  }

  .timer-section {
    margin: 1.0em 0.4em;
  }

  .time-boxes {
    font-size: 2em;
    margin: 0 auto;
    width: 6.65em;
    padding: 15px 0px;
  }

  .toggle-buttons {
    font-size: 0.3em;
    display: block;
  }
  .text-center {
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .text-right {
    display:flex;
    justify-content:flex-end;
    align-items:flex-end;
  }
  .left-button {
    margin-right: 106px;
  }
</style>
