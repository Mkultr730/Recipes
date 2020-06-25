import { IAxiosResponse, IRecipeResponse, IHits } from './recipe.model';
import axios from 'axios';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; 


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  // appID: string = 'ba03f734';
  // apiID: string = '56beedddfa35c68b732f02fbaa87a4e1';
  search: string = '';

  
  recipes: [IHits];

  constructor() { }

  getAllRecipes = async (input): Promise<IAxiosResponse> => {
    this.search = input;
    const apiUrl = `https://api.edamam.com/search?q=${this.search}&app_id=${environment.appId}&app_key=${environment.apiId}`;
    const response = await axios.get<IRecipeResponse>(apiUrl);
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
