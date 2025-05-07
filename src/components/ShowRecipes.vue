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
    components: { Button, CardRecipe },
    emits: ['editList']
}

</script>

<template>
    <section class="selecionar-receitas">
        <h1 class="cabecalho titulo-receitas">Receitas</h1>

        <p class="paragrafo-lg resultado">Resultados encontrados: {{ recipes.length }}</p>

        <div v-if="recipes.length">
            <p class="paragrafo-lg instrucoes">
                Veja as opções de receitas que encontramos com os receitas que você tem por aí!
            </p>

            <ul class="receitas">
                <li v-for="recipe in recipes" :key="recipe.nome">
                    <CardRecipe :recipe="recipe" />
                </li>
            </ul>
        </div>

        <div v-else-if="!recipes.length">
            <p class="paragrafo-lg instrucoes">
                Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?
            </p>

            <img class="imagem-sem-receita" src="../assets/images/sem-receitas.png" alt="ovo quebrado">
        </div>

        <Button :btn-text="'Editar lista'" @click="$emit('editList')" />
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

.imagem-sem-receita {
    width: 300px;
    height: 300px;
    display: block;
    margin-inline: auto;
    margin-bottom: 2rem;
}
</style>