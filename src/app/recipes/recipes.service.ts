import { IAxiosResponse, IRecipeResponse, IHits } from './recipe.model';
import axios, { AxiosResponse } from 'axios';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  appID: string = 'ba03f734';
  apiID: string = '56beedddfa35c68b732f02fbaa87a4e1';
  search: string = '';

  apiUrl: string = `https://api.edamam.com/search?q=chicken&app_id=${this.appID}&app_key=${this.apiID}`;
  recipes: [IHits];

  constructor() { }

  getAllRecipes = async (): Promise<IAxiosResponse> => {
    const response = await axios.get<IRecipeResponse>(this.apiUrl);
    this.recipes = response.data.hits;
    return response;
  }

  getRecipe(recipeId: string) {
    const response =  {
      ...this.recipes.find(recipe => {
        return recipe.recipe.uri.split('_').pop() === recipeId;
      })
    };
    return response;
  }
}
