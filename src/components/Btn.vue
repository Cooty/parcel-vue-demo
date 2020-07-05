<template>
    <button :type="type ? type : 'button'"
            class="btn"
            :class="modifierClassName">
        {{ label }}
    </button>
</template>

<script>
    export default {
        name: "btn",
        props: {
            label: {
                required: false,
                type: String
            },
            type: String,
            modifierClass: String
        },
        computed: {
            modifierClassName() {
                return this.$props.modifierClass ? `btn--${this.$props.modifierClass}` : "";
            } 
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/config/config";

    .btn {
        border: 0;
        border-radius: 1rem;
        padding: 1em;
        color: white;
        background: $primary-color;
        cursor: pointer;

        &--light {
            background: lighten($primary-color, 20%);
        }
    }
    
</style>