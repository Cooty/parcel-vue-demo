<template lang="html">
    <main id="app">
        <h>Hello Vue.js App</h>

        <h :priority=2>Second level heading</h>

        <h :priority=3>Third level heading</h>

        <btn label="My Button" type="submit"></btn>
        <btn label="My Other Button" modifier-class="light"></btn>
    </main>
</template>

<script>
    import Btn from "./Btn.vue";
    import H from "./H.vue";

    export default {
        name: "app",
        components: {
            Btn,
            H
        }
    }
</script>

<style lang="scss">
    @import "../styles/config/config";

    #app {
        width: 100%;
        height: 100%;
    }
</style>