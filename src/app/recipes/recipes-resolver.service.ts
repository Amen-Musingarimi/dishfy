import { Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot
} from '@angular/router';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService {
  constructor(private dataStorageService: DataStorageService) {}

  resolve: ResolveFn<Observable<Recipe[]>> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
    return this.dataStorageService.fetchRecipes();
  };
}
