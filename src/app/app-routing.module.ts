import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGaurd } from './shared/gaurds/AuthGaurd.service';
import { LoginGuard } from './shared/gaurds/loginGuard.service';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./shared/pages/home/home.module").then(l => l.HomeModule)
  },
  {
    path: "login",
    loadChildren: () =>
      import("./shared/pages/login/login.module").then(l => l.LoginModule),
    canActivate: [LoginGuard]
  },
  {
    path: "landmark/:landmarkId",
    loadChildren: () =>
      import("./shared/pages/article/article.module").then(a => a.ArticleModule)
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./shared/pages/dashboard/dashboard.module").then(d => d.DashboardModule),
    canActivate: [AuthGaurd]
  },
  {
    path: "404",
    loadChildren: () =>
      import("./shared/pages/not-found/not-found.module").then(
        l => l.NotFoundModule
      )
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "**",
    redirectTo: "404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGaurd, LoginGuard]
})
export class AppRoutingModule { }
