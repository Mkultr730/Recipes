import { Component, OnInit } from '@angular/core';

import {  IRecipeResponse, IHits } from './recipe.model';
import { RecipesService } from './recipes.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: [IHits];

  constructor(private InjectedRecipe: RecipesService) { 
  
  }

  async ngOnInit() {
    const response = await this.InjectedRecipe.getAllRecipes();
    this.recipes = response.data.hits;
  }

  async search( event ){
    console.log(event);
  }

}
