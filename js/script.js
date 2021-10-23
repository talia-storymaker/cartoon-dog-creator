const root = document.documentElement;

const App = Vue.createApp({
  data() {
    return {
      /* Will be used for future functionality */
      useBrowserColorPicker: false,
      /* Color pickers shown? */
      showHeadColorPicker: false,
      showMuzzleColorPicker: false,
      showEarColorPicker: false,
      showNoseColorPicker: false,
      showEyewhiteColorPicker: false,
      showPupilColorPicker: false,
      /* Initial color info */
      headColorInfo: '#c87137',
      muzzleColorInfo: '#c87137',
      earColorInfo: '#000000',
      noseColorInfo: '#000000',
      eyewhiteColorInfo: '#ffffff',
      pupilColorInfo: '#000000',
      /* Size modifiers */
      earLengthModifier: 13,
      earWidthModifier: 10,
      noseSizeModifier: 3,
    }
  },
  computed: {
    /* Colors */
    headStyle: function() {
      let headStyleObject = new Object;
      if (typeof this.headColorInfo === "object") {
        headStyleObject.fill = this.headColorInfo.hex8
      } else {
        headStyleObject.fill = this.headColorInfo
      }
      return headStyleObject;
    },
    headButtonStyle: function() {
      let headButtonStyleObject = new Object;
      if (typeof this.headColorInfo === "object") {
        headButtonStyleObject.background = this.headColorInfo.hex8
      } else {
        headButtonStyleObject.background = this.headColorInfo
      }
      return headButtonStyleObject;
    },
    muzzleStyle: function() {
      let muzzleStyleObject = new Object;
      if (typeof this.muzzleColorInfo === "object") {
        muzzleStyleObject.fill = this.muzzleColorInfo.hex8
      } else {
        muzzleStyleObject.fill = this.muzzleColorInfo
      }
      return muzzleStyleObject;
    },
    muzzleButtonStyle: function() {
      let muzzleButtonStyleObject = new Object;
      if (typeof this.muzzleColorInfo === "object") {
        muzzleButtonStyleObject.background = this.muzzleColorInfo.hex8
      } else {
        muzzleButtonStyleObject.background = this.muzzleColorInfo
      }
      return muzzleButtonStyleObject;
    },
    earStyle: function() {
      let earStyleObject = new Object;
      if (typeof this.earColorInfo === "object") {
        earStyleObject.fill = this.earColorInfo.hex8
      } else {
        earStyleObject.fill = this.earColorInfo
      }
      return earStyleObject;
    },
    earButtonStyle: function() {
      let earButtonStyleObject = new Object;
      if (typeof this.earColorInfo === "object") {
        earButtonStyleObject.background = this.earColorInfo.hex8
      } else {
        earButtonStyleObject.background = this.earColorInfo
      }
      return earButtonStyleObject;
    },
    noseStyle: function() {
      let noseStyleObject = new Object;
      if (typeof this.noseColorInfo === "object") {
        noseStyleObject.fill = this.noseColorInfo.hex8
      } else {
        noseStyleObject.fill = this.noseColorInfo
      }
      return noseStyleObject;
    },
    noseButtonStyle: function() {
      let noseButtonStyleObject = new Object;
      if (typeof this.noseColorInfo === "object") {
        noseButtonStyleObject.background = this.noseColorInfo.hex8
      } else {
        noseButtonStyleObject.background = this.noseColorInfo
      }
      return noseButtonStyleObject;
    },
    eyewhiteStyle: function() {
      let eyewhiteStyleObject = new Object;
      if (typeof this.eyewhiteColorInfo === "object") {
        eyewhiteStyleObject.fill = this.eyewhiteColorInfo.hex8
      } else {
        eyewhiteStyleObject.fill = this.eyewhiteColorInfo
      }
      return eyewhiteStyleObject;
    },
    eyewhiteButtonStyle: function() {
      let eyewhiteButtonStyleObject = new Object;
      if (typeof this.eyewhiteColorInfo === "object") {
        eyewhiteButtonStyleObject.background = this.eyewhiteColorInfo.hex8
      } else {
        eyewhiteButtonStyleObject.background = this.eyewhiteColorInfo
      }
      return eyewhiteButtonStyleObject;
    },
    pupilStyle: function() {
      let pupilStyleObject = new Object;
      if (typeof this.pupilColorInfo === "object") {
        pupilStyleObject.fill = this.pupilColorInfo.hex8
      } else {
        pupilStyleObject.fill = this.pupilColorInfo
      }
      return pupilStyleObject;
    },
    pupilButtonStyle: function() {
      let pupilButtonStyleObject = new Object;
      if (typeof this.pupilColorInfo === "object") {
        pupilButtonStyleObject.background = this.pupilColorInfo.hex8
      } else {
        pupilButtonStyleObject.background = this.pupilColorInfo
      }
      return pupilButtonStyleObject;
    },
    /* Sizes */
    earLength: function() {
      return this.earLengthModifier + 39
    },
    earWidth: function() {
      return this.earWidthModifier + 14
    },
    noseLength: function() {
      return this.noseSizeModifier + 10
    },
    noseHeight: function() {
      return this.noseSizeModifier + 8
    },
    /* Positions, so position stays good when items are resized */
    earXPosition: function() {
      return 150 + (24 - this.earWidth)
    },
    earYPosition: function() {
      return 148 - (52 - this.earLength)
    }
  }
})

App.use(VueColor);
App.mount('#app')