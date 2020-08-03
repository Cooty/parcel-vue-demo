import Btn from "../src/components/Btn";

export default {
    title: 'Btn',
    component: Btn,
};

export const SubmitButton = () => ({
    components: { Btn },
    template: '<btn type="submit" label="A submit button"></btn>'
});

export const RegularButton = () => ({
    components: { Btn },
    template: '<btn type="button" label="A normal button"></btn>'
});

export const LightButton = () => ({
    components: { Btn },
    template: '<btn type="button" label="A light button" modifier-class="light"></btn>'
});