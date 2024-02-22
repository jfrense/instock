<template>
    <div :class="keyboardClass"></div>
</template>

<script>
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

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

        this.keyboard.setOptions({
            layoutName: "default",
            //useTouchEvents: true,
            disableButtonHold: true,
            preventMouseDownDefault: true,
            preventMouseUpDefault: true,
            stopMouseDownPropagation: true,
            stopMouseUpPropagation: true,
            debug: true


        });
    },
    methods: {
        onChange(input) {
            console.log(input)
            this.$emit("onChange", input);
        },
        onKeyPress(button) {
            this.$emit("onKeyPress", button);

            /**
             * If you want to handle the shift and caps lock buttons
             */
            if (button === "{shift}" || button === "{lock}") this.handleShift();
        },
        onKeyReleased: (button) => console.log("simple-keyboard button released", button),
        handleShift() {
            let currentLayout = this.keyboard.options.layoutName;
            let shiftToggle = currentLayout === "default" ? "shift" : "default";


        }
    },
    watch: {
        input(input) {
            this.keyboard.setInput(input);
        }
    }
};
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
