Vue.component('filter-search', {

    data() {
        return {
            userSearch: this.$root.userSearch,
        }
    },
    template: `
        <form action="#" class="search-form"  @submit.prevent="filter">
            <input type="text" class="search-field" v-model="userSearch">
            <p>{{userSearch}}</p>
            <button class="btn-search" type="submit">
            <i class="fas fa-search"></i>
            </button>
        </form>`,
});