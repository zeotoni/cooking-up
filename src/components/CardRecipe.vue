<script lang="ts">
import type ICategory from '@/interfaces/ICategory';
import type { PropType } from 'vue';

export default {
    props: {
        recipe: {
            type: Object as PropType<ICategory>,
            required: true
        }
    },
}
</script>

<template>
    <article class="card">
        <img class="receita__imagem" :src="`/public/imagens/receitas/${recipe.imagem}`" alt="">
        <h2 class="receita__nome">{{ recipe.nome }}</h2>
    </article>
</template>

<style scoped>
.card {
    width: 19.5rem;
    max-width: 19.5rem;
    height: 100%;

    border-radius: 1rem;
    background: var(--branco, #FFF);
    box-shadow: 4px 4px 12px 0px rgba(68, 68, 68, 0.08);

    display: flex;
    flex-direction: column;
    align-items: center;
}

.receita__imagem {
    height: 150px;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 16px 16px 0px 0px;
}

.receita__nome {
    text-align: center;
    color: var(--verde-medio, #3D6D4A);
    font-weight: 700;

    color: var(--Cinza, #444);
    text-align: center;
    padding: 32px 0px;

    font-size: 18px;
    font-weight: 700;
}
</style>