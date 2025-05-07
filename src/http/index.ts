import type ICategory from "@/interfaces/ICategory";

const URL = 'https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865';

export async function getCategories() {
    const response = await fetch(`${URL}/categorias.json`);
    const categories: ICategory[] = await response.json();

    return categories;
}

export async function getRecipes() {
    const response = await fetch(`${URL}/receitas.json`);
    const recipes: ICategory[] = await response.json();

    return recipes;
}