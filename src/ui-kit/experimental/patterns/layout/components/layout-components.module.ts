import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { SamPageNextComponent } from './page';
import { MdSidenavModule } from './sidenav';
import { SamActionBarComponent } from './actionbar.component';
import { SamLayoutComponent } from './layout.component';
import { SamMainComponent } from './main.component';
import { SamPaginationNextComponent } from './pagination';
import {
  SamResourcesWrapperComponent
} from './resources-wrapper.component';
import {
  SamDatabankTitleSectionDirective
} from './title-section.component';
import { MdExpansionModule } from './expansion';
import { SamMainContentComponent } from './main-content.component';
import { SamContentOutletDirective } from './content-outlet.directive';
import { SamComponentsModule } from '../../../../components/components.module';
import { SamActionsListModule } from '../../../actions-list';
import { SamReportingMainComponent } from './template';
import { SamButtonNextModule } from '../../../button-next';
import { SamIconsModule } from '../../../icon';
import { SamFiltersWrapperModule } from '../../../../layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdSidenavModule,
    MdExpansionModule,
    SamComponentsModule,
    SamActionsListModule,
    SamButtonNextModule,
    SamIconsModule,
    SamFiltersWrapperModule
  ],
  declarations: [
    // Components
    SamActionBarComponent,
    SamLayoutComponent,
    SamMainComponent,
    SamMainContentComponent,
    SamPaginationNextComponent,
    SamResourcesWrapperComponent,
    SamPageNextComponent,
    SamReportingMainComponent,
    
    // Directives
    SamDatabankTitleSectionDirective,
    SamContentOutletDirective,

  ],
  exports: [
    // Modules
    MdExpansionModule,
    MdSidenavModule,

    // Components
    SamActionBarComponent,
    SamLayoutComponent,
    SamMainComponent,
    SamMainContentComponent,
    SamPaginationNextComponent,
    SamResourcesWrapperComponent,
    SamPageNextComponent,
    SamReportingMainComponent,

    // Directives
    SamDatabankTitleSectionDirective,
    SamContentOutletDirective,
  ]
})
export class SamLayoutComponentsModule {}
