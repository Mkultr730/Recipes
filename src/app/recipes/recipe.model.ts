export interface Recipe {
    id: string;
    title: string;
    imageUrl: string;
    ingredients: string[];
}

export interface IAxiosResponse {
    data: IRecipeResponse
}

export interface IRecipeResponse {
    hits: [IHits]
}

interface Ingredients {
    text: string;
    weight: number;
}

export interface IRecipes {
    uri: string;
    image: string;
    label: string;
    ingredients: [Ingredients]
}

export interface IHits {
    recipe: IRecipes
}

