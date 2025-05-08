<script lang="ts">
import Button from '../components/Button.vue';
import SelectIngredients from '../components/SelectIngredients.vue';
import Tag from '../components/Tag.vue';
import YourList from '../components/YourList.vue';
import ShowRecipes from './ShowRecipes.vue';

type Page = 'SelectIngredients' | 'ShowRecipes';

export default {
    components: { SelectIngredients, Tag, YourList, Button, ShowRecipes },

    data() {
        return {
            ingredients: [] as string[],
            content: 'SelectIngredients' as Page
        }
    },

    methods: {
        addIngredient(ingredient: string) {
            this.ingredients.push(ingredient)
        },

        removeIngredient(ingredient: string) {
            const index = this.ingredients.findIndex(i => i === ingredient);
            this.ingredients.splice(index, 1);
        },
        navigate(page: Page) {
            this.content = page;
        }
    }
}
</script>

<template>
    <main class="conteudo-principal">
        <YourList :ingredients="ingredients" />

        <KeepAlive include="SelectIngredients">
            <SelectIngredients v-if="content === 'SelectIngredients'" @add-ingredient="addIngredient"
                @remove-ingredient="removeIngredient" @search-recipes="navigate('ShowRecipes')" />

            <ShowRecipes v-else-if="content === 'ShowRecipes'" @edit-list="navigate('SelectIngredients')" :ingredients="ingredients"/>
        </KeepAlive>
    </main>
</template>

<style scoped>
.conteudo-principal {
    padding: 6.5rem 7.5rem;
    border-radius: 3.75rem 3.75rem 0rem 0rem;
    background: var(--creme, #FFFAF3);
    color: var(--cinza, #444);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
}

@media only screen and (max-width: 1300px) {
    .conteudo-principal {
        padding: 5rem 3.75rem;
        gap: 3.5rem;
    }
}

@media only screen and (max-width: 767px) {
    .conteudo-principal {
        padding: 4rem 1.5rem;
        gap: 4rem;
    }
}
</style>