import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { CategoriesComponent } from './Component/categories/categories.component';
import { SuppliersComponent } from './Component/suppliers/suppliers.component';


export const routes: Routes = [
    {path:``, component:HomeComponent,children:[
        {path:`categories`, component:CategoriesComponent},
        {path:`suppliers`, component:SuppliersComponent}
    ]},   
];
