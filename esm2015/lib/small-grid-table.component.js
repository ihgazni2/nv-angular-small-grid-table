import { Component, Input, ContentChild } from "@angular/core";
import { calc_and_set } from "./util";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/grid-list";
import * as i3 from "@angular/common";
const _c0 = ["smallGridTableSlot"];
const _c1 = function (a0) { return { $implicit: a0 }; };
function SmallGridTableComponent_mat_grid_tile_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-grid-tile");
    i0.ɵɵelementContainer(1, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleMap(cell_r1.ui);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.slotRef)("ngTemplateOutletContext", i0.ɵɵpureFunction1(4, _c1, cell_r1));
} }
export class SmallGridTableComponent {
    constructor(cdref) {
        this.cdref = cdref;
    }
    ngOnInit() {
        calc_and_set(this);
    }
}
SmallGridTableComponent.ɵfac = function SmallGridTableComponent_Factory(t) { return new (t || SmallGridTableComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
SmallGridTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SmallGridTableComponent, selectors: [["nv-small-grid-table"]], contentQueries: function SmallGridTableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, _c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotRef = _t.first);
    } }, inputs: { dtb: "dtb", width: "width", ratio: "ratio", height: "height", gutter: "gutter", dflt: "dflt", ui_func: "ui_func" }, decls: 3, vars: 6, consts: [[3, "cols", "rowHeight", "gutterSize"], [3, "style", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function SmallGridTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card");
        i0.ɵɵelementStart(1, "mat-grid-list", 0);
        i0.ɵɵtemplate(2, SmallGridTableComponent_mat_grid_tile_2_Template, 2, 6, "mat-grid-tile", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("width", ctx.width, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cols", ctx.colnum)("rowHeight", ctx.ratio)("gutterSize", ctx.gutter);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.flat);
    } }, directives: [i1.MatCard, i2.MatGridList, i3.NgForOf, i2.MatGridTile, i3.NgTemplateOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SmallGridTableComponent, [{
        type: Component,
        args: [{
                selector: "nv-small-grid-table",
                templateUrl: "./small-grid-table.component.html"
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { dtb: [{
            type: Input
        }], width: [{
            type: Input
        }], ratio: [{
            type: Input
        }], height: [{
            type: Input
        }], gutter: [{
            type: Input
        }], dflt: [{
            type: Input
        }], ui_func: [{
            type: Input
        }], slotRef: [{
            type: ContentChild,
            args: ["smallGridTableSlot", { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hbGwtZ3JpZC10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL21udC9zZGIvQU5HVUkvcHJvai9wcm9qZWN0cy9zbWFsbC1ncmlkLXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zbWFsbC1ncmlkLXRhYmxlLmNvbXBvbmVudC50cyIsImxpYi9zbWFsbC1ncmlkLXRhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUtMLFlBQVksRUFHYixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7OztJQ0xqQyxxQ0FDSztJQUFBLDJCQUllO0lBQ3BCLGlCQUFnQjs7OztJQU55Qix5QkFBaUI7SUFFbkQsZUFBNEI7SUFBNUIsaURBQTRCLGdFQUFBOztBRG1CeEMsTUFBTSxPQUFPLHVCQUF1QjtJQWNsQyxZQUFvQixLQUF3QjtRQUF4QixVQUFLLEdBQUwsS0FBSyxDQUFtQjtJQUFHLENBQUM7SUFFaEQsUUFBUTtRQUNOLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDOzs4RkFsQlUsdUJBQXVCOzREQUF2Qix1QkFBdUI7Ozs7OztRQzdCcEMsZ0NBR0k7UUFBQSx3Q0FLQztRQUFBLDRGQUNLO1FBTU4saUJBQWdCO1FBQ3BCLGlCQUFXOztRQWZQLHdDQUF3QjtRQUdwQixlQUFlO1FBQWYsaUNBQWUsd0JBQUEsMEJBQUE7UUFJSCxlQUF5QjtRQUF6QixrQ0FBeUI7O2tERHFCaEMsdUJBQXVCO2NBSm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsbUNBQW1DO2FBQ2pEO29FQUVVLEdBQUc7a0JBQVgsS0FBSztZQUlHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNpRCxPQUFPO2tCQUE3RCxZQUFZO21CQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBDb250ZW50Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBBZnRlckNvbnRlbnRJbml0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IGNhbGNfYW5kX3NldCB9IGZyb20gXCIuL3V0aWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUaWxlIHtcbiAgZGF0YTogYW55O1xuICB1aT86IGFueTtcbiAgX2M/OiBudW1iZXI7XG4gIF9yPzogbnVtYmVyO1xufVxuXG50eXBlIER0YiA9IEFycmF5PEFycmF5PFRpbGU+PjtcbnR5cGUgRmxhdER0YiA9IEFycmF5PFRpbGU+O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibnYtc21hbGwtZ3JpZC10YWJsZVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3NtYWxsLWdyaWQtdGFibGUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBTbWFsbEdyaWRUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGR0YjogRHRiO1xuICBwdWJsaWMgZmxhdDogRmxhdER0YjtcbiAgcHVibGljIHJvd251bTogbnVtYmVyO1xuICBwdWJsaWMgY29sbnVtOiBudW1iZXI7XG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJhdGlvOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nO1xuICBASW5wdXQoKSBndXR0ZXI6IHN0cmluZztcbiAgQElucHV0KCkgZGZsdDogYm9vbGVhbjtcbiAgQElucHV0KCkgdWlfZnVuYzogKGNlbGw6IGFueSkgPT4gdm9pZDtcbiAgQENvbnRlbnRDaGlsZChcInNtYWxsR3JpZFRhYmxlU2xvdFwiLCB7IHN0YXRpYzogZmFsc2UgfSkgc2xvdFJlZjogVGVtcGxhdGVSZWY8XG4gICAgYW55XG4gID47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNhbGNfYW5kX3NldCh0aGlzKTtcbiAgfVxufVxuXG4iLCI8bWF0LWNhcmRcbiAgICBbc3R5bGUud2lkdGgucHhdPVwid2lkdGhcIlxuPlxuICAgIDxtYXQtZ3JpZC1saXN0IFxuICAgICAgICBbY29sc109XCJjb2xudW1cIiBcbiAgICAgICAgW3Jvd0hlaWdodF09XCJyYXRpb1wiIFxuICAgICAgICBbZ3V0dGVyU2l6ZV09XCJndXR0ZXJcIlxuICAgID5cbiAgICBcdDxtYXQtZ3JpZC10aWxlICpuZ0Zvcj1cImxldCBjZWxsIG9mIGZsYXRcIiBbc3R5bGVdPVwiY2VsbC51aVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInNsb3RSZWZcIlxuICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInskaW1wbGljaXQ6Y2VsbH1cIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICBcdDwvbWF0LWdyaWQtdGlsZT5cbiAgICA8L21hdC1ncmlkLWxpc3Q+XG48L21hdC1jYXJkPlxuIl19