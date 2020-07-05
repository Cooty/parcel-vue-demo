<script>
    export default {
        name: "h",
        props: {
            priority: Number
        },
        computed: {
            priorityNumber() {
                return this.priority ? this.priority : 1; 
            }
        },
        render(createElement) {
            return createElement(
                `h${this.priorityNumber}`,
                {
                    attrs: {
                        class: "h"
                    }
                },
                this.$slots.default
            );
        }
    };
</script>

<style lang="scss">
    .h {
        font-weight: 300;
    }
</style>