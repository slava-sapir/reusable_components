import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponentComponent } from './views-home-component/views-home-component.component';
import { StatisticComponentComponent } from './statistic-component/statistic-component.component';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [ViewsHomeComponentComponent, StatisticComponentComponent, ItemListComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
