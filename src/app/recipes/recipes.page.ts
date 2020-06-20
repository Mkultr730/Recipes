import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { title } from 'process';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];

  constructor(private InjectedRecipe: RecipesService) { 
  
  }

  ngOnInit() {
    this.recipes = this.InjectedRecipe.getAllRecipes();
  }

}