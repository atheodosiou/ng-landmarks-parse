import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EllipsisPipe } from '../../pipes/ellipsis.pipe';
import { LoadingModule } from '../../components/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: ArticleComponent
      }
    ]),
    LoadingModule
  ],
  exports:[ArticleComponent],
  declarations: [ArticleComponent]
})
export class ArticleModule { }
