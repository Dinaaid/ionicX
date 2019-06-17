import { Injectable } from '@angular/core';
import { Recipes } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipes[] = [
    {
      id: 'r1',
      title: 'Spaghetti',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg',
      ingredients: ['Salad' , 'French fries' , 'Meat']
    },
    {
      id: 'r2',
      title: 'Schnitzel',
      imageUrl: 'https://www.cookingclassy.com/wp-content/uploads/2018/02/pasta-salad-9.jpg',
      ingredients: ['Salad' , 'French fries' , 'Meat']
    },
  ]
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipes(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  };
  }


  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
