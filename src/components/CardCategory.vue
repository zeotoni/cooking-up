<script lang="ts">
import type ICategory from '@/interfaces/ICategory';
import type { PropType } from 'vue';
import SelectableIngredient from './SelectableIngredient.vue';

export default {
    props: {
        category: {
            type: Object as PropType<ICategory>,
            required: true
        }
    },
    components: { SelectableIngredient },
    emits: ['addIngredient', 'removeIngredient']
}
</script>

<template>
    <article class="categoria">
        <header class="categoria__cabecalho">
            <img :src="`/public/imagens/icones/categorias_ingredientes/${category.imagem}`" alt=""
                class="categoria__imagem">
            <h2 class="paragrafp-lg categoria__nome">{{ category.nome }}</h2>
        </header>

        <ul class="categoria__ingredientes">
            <li v-for="ingrediente in category.ingredientes" :key="ingrediente">
                <SelectableIngredient 
                    :ingredient="ingrediente" 
                    @add-ingredient="$emit('addIngredient', $event)" 
                    @remove-ingredient="$emit('removeIngredient', $event)"
                />
            </li>
        </ul>
    </article>
</template>

<style scoped>
.categoria {
    width: 19.5rem;
    padding: 1rem;
    border-radius: 1rem;
    background: var(--branco, #FFF);
    box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.categoria__cabecalho {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.categoria__imagem {
    width: 3.5rem;
}

.categoria__nome {
    text-align: center;
    color: var(--verde-medio, #3D6D4A);
    font-weight: 700;
}

.categoria__ingredientes {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
}
</style>