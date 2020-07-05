<template>
    <button :type="type ? type : 'button'" class="btn">
        {{ label }}
    </button>
</template>

<script>
export default {
    name: "btn",
    props: {
        label: String,
        type: {
            required: false,
            type: String
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
    }
    
</style>