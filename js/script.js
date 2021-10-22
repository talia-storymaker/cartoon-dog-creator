const root = document.documentElement;

const App = {
  data() {
    return {
      earLengthModifier: 13,
      noseSizeModifier: 3,
      headStyle: {
        fill: '#c87137',
      },
      muzzleStyle: {
        fill: '#c87137'
      },
      earStyle: {
        fill: '#000000'
      },
      noseStyle: {
        fill: '#000000'
      },
      eyewhiteStyle: {
        fill: '#ffffff'
      },
      pupilStyle: {
        fill: '#000000'
      }
    }
  },
  computed: {
    earLength: function() {
      return this.earLengthModifier + 39
    },
    earPosition: function() {
      return 148 - (52 - this.earLength)
    },
    noseLength: function() {
      return this.noseSizeModifier + 10
    },
    noseHeight: function() {
      return this.noseSizeModifier + 8
    }
  }
}

Vue.createApp(App).mount('#app')