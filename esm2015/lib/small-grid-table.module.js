import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallGridTableComponent } from './small-grid-table.component';
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import * as i0 from "@angular/core";
export class SmallGridTableModule {
    static forRoot() {
        return {
            ngModule: SmallGridTableModule,
            providers: [],
        };
    }
    static forChild() {
        return {
            ngModule: SmallGridTableModule,
            providers: [],
        };
    }
}
SmallGridTableModule.ɵmod = i0.ɵɵdefineNgModule({ type: SmallGridTableModule });
SmallGridTableModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SmallGridTableModule_Factory(t) { return new (t || SmallGridTableModule)(); }, imports: [[
            CommonModule,
            MatCardModule,
            MatGridListModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SmallGridTableModule, { declarations: [SmallGridTableComponent], imports: [CommonModule,
        MatCardModule,
        MatGridListModule], exports: [SmallGridTableComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SmallGridTableModule, [{
        type: NgModule,
        args: [{
                declarations: [SmallGridTableComponent],
                imports: [
                    CommonModule,
                    MatCardModule,
                    MatGridListModule
                ],
                exports: [SmallGridTableComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hbGwtZ3JpZC10YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL21udC9zZGIvQU5HVUkvcHJvai9wcm9qZWN0cy9zbWFsbC1ncmlkLXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zbWFsbC1ncmlkLXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFzQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0gsWUFBWSxFQUNmLE1BQU0saUJBQWlCLENBQUM7QUFLekIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQWFoRSxNQUFNLE9BQU8sb0JBQW9CO0lBQ3hCLE1BQU0sQ0FBQyxPQUFPO1FBQ25CLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQTtJQUNILENBQUM7SUFFTSxNQUFNLENBQUMsUUFBUTtRQUNwQixPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUE7SUFDSCxDQUFDOzt3REFiVSxvQkFBb0I7dUhBQXBCLG9CQUFvQixrQkFQcEI7WUFDTCxZQUFZO1lBQ1osYUFBYTtZQUNiLGlCQUFpQjtTQUNwQjt3RkFHUSxvQkFBb0IsbUJBUmQsdUJBQXVCLGFBRWxDLFlBQVk7UUFDWixhQUFhO1FBQ2IsaUJBQWlCLGFBRVgsdUJBQXVCO2tEQUV4QixvQkFBb0I7Y0FUaEMsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO2dCQUN2QyxPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixhQUFhO29CQUNiLGlCQUFpQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSxNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIENvbW1vbk1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5cblxuXG5pbXBvcnQgeyBTbWFsbEdyaWRUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vc21hbGwtZ3JpZC10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jYXJkXCI7XG5pbXBvcnQgeyBNYXRHcmlkTGlzdE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9ncmlkLWxpc3RcIjtcblxuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbU21hbGxHcmlkVGFibGVDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBNYXRDYXJkTW9kdWxlLFxuICAgICAgICBNYXRHcmlkTGlzdE1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1NtYWxsR3JpZFRhYmxlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTbWFsbEdyaWRUYWJsZU1vZHVsZSB7IFxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxTbWFsbEdyaWRUYWJsZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU21hbGxHcmlkVGFibGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdLFxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxTbWFsbEdyaWRUYWJsZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU21hbGxHcmlkVGFibGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdLFxuICAgIH1cbiAgfVxuXG59XG4iXX0=