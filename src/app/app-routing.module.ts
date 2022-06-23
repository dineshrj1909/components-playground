import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestedAccordionComponent } from './components/nested-accordion/nested-accordion.component';

const routes: Routes = [
  { path: 'nested-accordion', component: NestedAccordionComponent },
  { path: '', redirectTo: 'nested-accordion', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
