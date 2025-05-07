<script lang="ts">
export default {

}
</script>

<template>
    <section class="rodape">
        <p class="paragrafo">Desenvolvido por Ezequiel Otoni | 2025 - Projeto fictício sem fins comerciais.</p>
    </section>
</template>

<style scoped>
.rodape {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    padding: 24px 0;
}

.paragrafo {
    color: var(--Creme, #FFFAF3);
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;

    text-align: center;
}

@media only screen and (max-width: 767px) {
    .rodape {
        padding: 24px;
    }
}
</style>