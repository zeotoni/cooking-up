<script lang="ts">
import { getRecipes } from '@/http';
import type ICategory from '@/interfaces/ICategory';
import Button from '../components/Button.vue';
import CardRecipe from '../components/CardRecipe.vue';

export default {
    data() {
        return {
            recipes: [] as ICategory[]
        }
    },

    async created() {
        this.recipes = await getRecipes();
    },
    components: { Button, CardRecipe }
}

</script>

<template>
    <section class="selecionar-receitas">
        <h1 class="cabecalho titulo-receitas">Receitas</h1>

        <p class="paragrafo-lg resultado">Resultados encontrados: 8</p>
        <p class="paragrafo-lg instrucoes">
            Veja as opções de receitas que encontramos com os receitas que você tem por aí!
        </p>

        <ul class="receitas">
            <li v-for="recipe in recipes" :key="recipe.nome">
                <CardRecipe :recipe="recipe" />
            </li>
        </ul>

        <Button :btn-text="'Editar lista'" />
    </section>
</template>

<style scoped>
.selecionar-receitas {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.titulo-receitas {
    color: var(--verde-medio, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
}

.instrucoes {
    margin-bottom: 2rem;
    color: var(--Cinza, #444);
    text-align: center;

    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
}

.resultado {
    color: var(--Verde-mdio, #3D6D4A);
    text-align: center;

    font-size: 22px;
    font-weight: 400;
    line-height: 150%;

    margin-bottom: 0.5rem;
}

.receitas {
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}
</style>