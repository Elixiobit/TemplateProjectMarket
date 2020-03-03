Vue.component('component-one', {
    template: `<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias animi delectus ducimus ex in laudantium, nam qui sunt temporibus veritatis vitae. Aliquam eaque et ipsam nemo odit similique voluptate!</div>`
});
Vue.component('component-two', {
    template: `<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci architecto at aut blanditiis culpa cum dignissimos doloribus eaque, esse hic incidunt laboriosam mollitia nihil, placeat quae qui quidem ut!</div></div>`
});
Vue.component('component-three', {
    template: `<div>Lorem ipsum dolor sit amet, ptate!</div>`
});

const childElement = {
    name: 'child-component',
    template: `<p>some in child component</p>`,
};

Vue.component('some-el', {
    props: ['title', 'counter'],
    data() {
        return {
            localCounter: 0,
        };
    },
    components: {
        childElement,
    },
    mounted() {
        console.log(this);
        this.localCounter = this.counter;
    },
    template: `<div>
                    <div>{{ title }}</div>
                    <button @click="$emit('increase')">Increase</button>
                    <button @click="localCounter++">Increase Local</button>
                    <div>{{ counter }}</div>
                    <div>{{ localCounter }}</div>
                    <slot>
                        <p>Default state</p>
                    </slot>
                    <child-element />
               </div>`,
});
