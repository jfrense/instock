<template>
    <div :class="keyboardClass"></div>
  </template>
  
  <script>
  import Keyboard from "simple-keyboard";
  import 'simple-keyboard/build/css/index.css';
  
  export default {
    name: "SimpleKeyboard",
    props: {
      keyboardClass: {
        default: "simple-keyboard",
        type: String
      },
      input: {
        type: String
      }
    },
    data: () => ({
      keyboard: null
    }),
    mounted() {
      this.keyboard = new Keyboard(this.keyboardClass, {
        onChange: this.onChange,
        onKeyPress: this.onKeyPress
      });
  
      // Add touch event listener to simulate mouse clicks
      this.addTouchEventListeners();
    },
    methods: {
      onChange(input) {
        this.$emit("onChange", input);
      },
      onKeyPress(button) {
        this.$emit("onKeyPress", button);
        if (button === "{shift}" || button === "{lock}") this.handleShift();
      },
      handleShift() {
        let currentLayout = this.keyboard.options.layoutName;
        let shiftToggle = currentLayout === "default" ? "shift" : "default";
        this.keyboard.setOptions({
          layoutName: shiftToggle
        });
      },
      addTouchEventListeners() {
        // Ensure this element exists in the DOM
        this.$nextTick(() => {
          const keyboardElement = document.querySelector(`.${this.keyboardClass}`);
          if (keyboardElement) {
            keyboardElement.addEventListener('touchstart', this.handleTouchStart, false);
            keyboardElement.addEventListener('touchend', this.handleTouchEnd, false);
          }
        });
      },
      handleTouchStart(event) {
        this.$emit("onKeydown", button);
      },
      handleTouchEnd(event) {
        this.$emit("onKeyup", button);
      },
      removeTouchEventListeners() {
        const keyboardElement = document.querySelector(`.${this.keyboardClass}`);
        if (keyboardElement) {
          keyboardElement.removeEventListener('touchstart', this.handleTouchStart, false);
          keyboardElement.removeEventListener('touchend', this.handleTouchEnd, false);
        }
      }
    },
    beforeDestroy() {
      this.removeTouchEventListeners();
    }
  };
  </script>
  
  <style scoped>
  font-color: black;
  </style>
  