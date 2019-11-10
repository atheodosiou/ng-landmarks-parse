import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./shared/pages/home/home.module").then(l => l.HomeModule)
  },
  {
    path: "login",
    loadChildren: () =>
      import("./shared/pages/login/login.module").then(l => l.LoginModule)
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./shared/pages/dashboard/dashboard.module").then(d=>d.DashboardModule)
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
  exports: [RouterModule]
})
export class AppRoutingModule {}
