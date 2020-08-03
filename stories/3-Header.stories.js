import H from "../src/components/H";

export default {
    title: 'Header',
    component: H
};

export const H1 = ()=> ({
    components: { H },
    template: '<h>I \'m a level 1 heading</h>'
});

export const H2 = ()=> ({
    components: { H },
    template: '<h priority="2">I \'m a level 2 heading</h>'
});

export const H3 = ()=> ({
    components: { H },
    template: '<h priority="3">I \'m a level 3 heading</h>'
});