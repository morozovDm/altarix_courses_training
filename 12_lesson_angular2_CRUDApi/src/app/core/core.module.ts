import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from '../shared/pipes/pipes.module';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [CommonModule, CoreRoutingModule, HttpClientModule, ReactiveFormsModule, PipesModule],
  exports: [RouterModule, HeaderComponent]
})
export class CoreModule {}
