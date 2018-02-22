import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { CollectionComponent } from "../collection/collection.component";

const routes: Routes = [
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "collection",
    component: CollectionComponent
  },
  {
    path: "",
    redirectTo: "/about",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}