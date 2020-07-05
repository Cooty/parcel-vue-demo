<template lang="html">
    <main id="app">
        <h1>Hello Vue.js App</h1>

        <btn label="My Button" type="submit"></btn>
        <btn label="My Other Button"></btn>
    </main>
</template>

<script>
import Btn from "./Btn.vue";

export default {
    name: "app",
    components: {
        Btn
    }
}
</script>

<style lang="scss">
    @import "../styles/config/config";

    html,
    body,
    #app {
        width: 100%;
        height: 100%;
    }
    
    body {
        font-family: $system-font;
        padding: 0;
        margin: 0;
    }

    #app {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-weight: 300;
    }
</style>