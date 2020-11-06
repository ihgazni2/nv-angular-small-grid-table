import { ɵɵelementStart, ɵɵelementContainer, ɵɵelementEnd, ɵɵnextContext, ɵɵstyleMap, ɵɵadvance, ɵɵproperty, ɵɵpureFunction1, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵdefineComponent, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵtemplate, ɵɵstyleProp, ɵsetClassMetadata, Component, Input, ContentChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatGridList, MatGridTile, MatGridListModule } from '@angular/material/grid-list';
import { NgForOf, NgTemplateOutlet, CommonModule } from '@angular/common';

function mat_to_list(m) {
    return m.flat();
}
function set_rc(dtb) {
    dtb.forEach((row, r) => {
        row.forEach((cell, c) => {
            cell._r = r;
            cell._c = c;
        });
    });
}
function fmt_cell_ui(flat) {
    flat.forEach(cell => {
        if (cell.ui === undefined) {
            cell.ui = "";
        }
    });
}
function set_dflt(flat) {
    flat.forEach(cell => {
        let cond = cell._c % 2 === 1;
        if (cond && (cell.ui === "")) {
            cell.ui = "background-color:#F8F8F8;color:#333333;font-size:18px;font-weight:400;font-family:PingFang SC;";
        }
    });
}
function set_ui(flat, ui_func) {
    flat.forEach(cell => {
        ui_func(cell);
    });
}
function calc_and_set(instance) {
    set_rc(instance.dtb);
    instance.rownum = instance.dtb.length;
    instance.colnum = instance.dtb[0].length;
    if (instance.ratio === undefined) {
        let cell_width = parseInt(instance.width) / instance.rownum;
        let cell_height = parseInt(instance.height) / instance.colnum;
        instance.ratio = cell_width.toString() + ":" + cell_height.toString();
    }
    else {
    }
    if (instance.gutter === undefined) {
        instance.gutter = "0";
    }
    else {
    }
    ////
    if (instance.dflt === undefined) {
        instance.dflt = true;
    }
    else {
    }
    if (instance.ui_func === undefined) {
        instance.ui_func = (cell) => { };
    }
    else {
    }
    ////
    instance.flat = mat_to_list(instance.dtb);
    fmt_cell_ui(instance.flat);
    if (instance.dflt) {
        set_dflt(instance.flat);
    }
    set_ui(instance.flat, instance.ui_func);
}

const _c0 = ["smallGridTableSlot"];
const _c1 = function (a0) { return { $implicit: a0 }; };
function SmallGridTableComponent_mat_grid_tile_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-grid-tile");
    ɵɵelementContainer(1, 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const cell_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(cell_r1.ui);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.slotRef)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c1, cell_r1));
} }
class SmallGridTableComponent {
    constructor(cdref) {
        this.cdref = cdref;
    }
    ngOnInit() {
        calc_and_set(this);
    }
}
SmallGridTableComponent.ɵfac = function SmallGridTableComponent_Factory(t) { return new (t || SmallGridTableComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
SmallGridTableComponent.ɵcmp = ɵɵdefineComponent({ type: SmallGridTableComponent, selectors: [["nv-small-grid-table"]], contentQueries: function SmallGridTableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slotRef = _t.first);
    } }, inputs: { dtb: "dtb", width: "width", ratio: "ratio", height: "height", gutter: "gutter", dflt: "dflt", ui_func: "ui_func" }, decls: 3, vars: 6, consts: [[3, "cols", "rowHeight", "gutterSize"], [3, "style", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function SmallGridTableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-card");
        ɵɵelementStart(1, "mat-grid-list", 0);
        ɵɵtemplate(2, SmallGridTableComponent_mat_grid_tile_2_Template, 2, 6, "mat-grid-tile", 1);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵstyleProp("width", ctx.width, "px");
        ɵɵadvance(1);
        ɵɵproperty("cols", ctx.colnum)("rowHeight", ctx.ratio)("gutterSize", ctx.gutter);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.flat);
    } }, directives: [MatCard, MatGridList, NgForOf, MatGridTile, NgTemplateOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SmallGridTableComponent, [{
        type: Component,
        args: [{
                selector: "nv-small-grid-table",
                templateUrl: "./small-grid-table.component.html"
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { dtb: [{
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

class SmallGridTableModule {
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
SmallGridTableModule.ɵmod = ɵɵdefineNgModule({ type: SmallGridTableModule });
SmallGridTableModule.ɵinj = ɵɵdefineInjector({ factory: function SmallGridTableModule_Factory(t) { return new (t || SmallGridTableModule)(); }, imports: [[
            CommonModule,
            MatCardModule,
            MatGridListModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SmallGridTableModule, { declarations: [SmallGridTableComponent], imports: [CommonModule,
        MatCardModule,
        MatGridListModule], exports: [SmallGridTableComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SmallGridTableModule, [{
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

/*
 * Public API Surface of small-grid-table
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SmallGridTableComponent, SmallGridTableModule };
//# sourceMappingURL=small-grid-table.js.map
