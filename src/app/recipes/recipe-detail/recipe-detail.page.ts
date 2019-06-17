import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipes } from '../recipes.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipes;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipes(recipeId);
    });

  }

  onDeleteRecipe() {
    this.alertCtrl.create({
      header: 'Are you Sure?',
      message: 'do you really want to delet?',
      buttons: [
        {
        text: 'Cancel',
        role: 'cancel'
      },
    {
      text: 'Delete',
      handler: () => {
        this.recipesService.deleteRecipe(this.loadedRecipe.id);
        this.router.navigate(['/recipes']);
      }
    }
  ]
    })
    .then(alertEl => {
      alertEl.present();
    });
  }
}
