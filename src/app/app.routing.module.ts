import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TileSizeModule } from './tools/tile-size/tile-size.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './core/home/home.component';
import { EditTileComponent } from './edit-tile/edit-tile.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'tiles', loadChildren: './tools/tile-size/tile-size.module#TileSizeModule' },
    { path: 'edittile/:_id', component: EditTileComponent, canActivate: [AuthGuard]},
    { path: '', loadChildren: './auth/auth.module#AuthModule' },
    { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  declarations: [],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
