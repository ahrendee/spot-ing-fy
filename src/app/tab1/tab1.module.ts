import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { Tab1Page } from './tab1.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        Tab1PageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [Tab1Page]
})
export class Tab1PageModule {
}
