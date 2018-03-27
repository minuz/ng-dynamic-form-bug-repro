import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ANALYZE_FOR_ENTRY_COMPONENTS, NgModule, Type } from '@angular/core';
import { DynamicModule } from 'ng-dynamic-component';

import { DynamicContainerComponent } from './dynamic-container/dynamic-container.component';
import { TEST_COMPONENT } from '../component.injector';

@NgModule({
  imports: [
    CommonModule,
    DynamicModule
  ],
  declarations: [DynamicContainerComponent],
  exports: [DynamicContainerComponent]
})
export class DynamicContainerModule {
  static withComponent(component: Type<any>): ModuleWithProviders {
    return {
      ngModule: DynamicContainerModule,
      providers: [
        { provide: TEST_COMPONENT, useValue: component },
      ]
    };
  }
}
