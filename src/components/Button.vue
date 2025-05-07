<script lang="ts">
export default {
    props: {
        btnText: String
    }
}
</script>

<template>
    <button class="btn">{{ btnText }}</button>
</template>

<style scoped>
.btn {
    background-color: var(--coral);
    color: var(--creme);

    width: 312px;
    height: 56px;
    padding: 8px 16px;

    font-size: 22px;
    font-weight: 700;
    line-height: 150%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    border-radius: 32px;
    box-shadow: 4px 4px 15px 0px rgba(255, 115, 76, 0.25);
}

.btn:hover {
    cursor: pointer;
    background-color: var(--ocre);
}
</style>