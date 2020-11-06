(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/card'), require('@angular/material/grid-list'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('small-grid-table', ['exports', '@angular/core', '@angular/material/card', '@angular/material/grid-list', '@angular/common'], factory) :
    (global = global || self, factory(global['small-grid-table'] = {}, global.ng.core, global.ng.material.card, global.ng.material.gridList, global.ng.common));
}(this, (function (exports, i0, i1, i2, i3) { 'use strict';

    function mat_to_list(m) {
        return m.flat();
    }
    function set_rc(dtb) {
        dtb.forEach(function (row, r) {
            row.forEach(function (cell, c) {
                cell._r = r;
                cell._c = c;
            });
        });
    }
    function fmt_cell_ui(flat) {
        flat.forEach(function (cell) {
            if (cell.ui === undefined) {
                cell.ui = "";
            }
        });
    }
    function set_dflt(flat) {
        flat.forEach(function (cell) {
            var cond = cell._c % 2 === 1;
            if (cond && (cell.ui === "")) {
                cell.ui = "background-color:#F8F8F8;color:#333333;font-size:18px;font-weight:400;font-family:PingFang SC;";
            }
        });
    }
    function set_ui(flat, ui_func) {
        flat.forEach(function (cell) {
            ui_func(cell);
        });
    }
    function calc_and_set(instance) {
        set_rc(instance.dtb);
        instance.rownum = instance.dtb.length;
        instance.colnum = instance.dtb[0].length;
        if (instance.ratio === undefined) {
            var cell_width = parseInt(instance.width) / instance.rownum;
            var cell_height = parseInt(instance.height) / instance.colnum;
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
            instance.ui_func = function (cell) { };
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

    var _c0 = ["smallGridTableSlot"];
    var _c1 = function (a0) { return { $implicit: a0 }; };
    function SmallGridTableComponent_mat_grid_tile_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-grid-tile");
            i0.ɵɵelementContainer(1, 2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var cell_r1 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵstyleMap(cell_r1.ui);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.slotRef)("ngTemplateOutletContext", i0.ɵɵpureFunction1(4, _c1, cell_r1));
        }
    }
    var SmallGridTableComponent = /** @class */ (function () {
        function SmallGridTableComponent(cdref) {
            this.cdref = cdref;
        }
        SmallGridTableComponent.prototype.ngOnInit = function () {
            calc_and_set(this);
        };
        return SmallGridTableComponent;
    }());
    SmallGridTableComponent.ɵfac = function SmallGridTableComponent_Factory(t) { return new (t || SmallGridTableComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    SmallGridTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SmallGridTableComponent, selectors: [["nv-small-grid-table"]], contentQueries: function SmallGridTableComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, _c0, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotRef = _t.first);
            }
        }, inputs: { dtb: "dtb", width: "width", ratio: "ratio", height: "height", gutter: "gutter", dflt: "dflt", ui_func: "ui_func" }, decls: 3, vars: 6, consts: [[3, "cols", "rowHeight", "gutterSize"], [3, "style", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function SmallGridTableComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-card");
                i0.ɵɵelementStart(1, "mat-grid-list", 0);
                i0.ɵɵtemplate(2, SmallGridTableComponent_mat_grid_tile_2_Template, 2, 6, "mat-grid-tile", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵstyleProp("width", ctx.width, "px");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("cols", ctx.colnum)("rowHeight", ctx.ratio)("gutterSize", ctx.gutter);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.flat);
            }
        }, directives: [i1.MatCard, i2.MatGridList, i3.NgForOf, i2.MatGridTile, i3.NgTemplateOutlet], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SmallGridTableComponent, [{
                type: i0.Component,
                args: [{
                        selector: "nv-small-grid-table",
                        templateUrl: "./small-grid-table.component.html"
                    }]
            }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { dtb: [{
                    type: i0.Input
                }], width: [{
                    type: i0.Input
                }], ratio: [{
                    type: i0.Input
                }], height: [{
                    type: i0.Input
                }], gutter: [{
                    type: i0.Input
                }], dflt: [{
                    type: i0.Input
                }], ui_func: [{
                    type: i0.Input
                }], slotRef: [{
                    type: i0.ContentChild,
                    args: ["smallGridTableSlot", { static: false }]
                }] });
    })();

    var SmallGridTableModule = /** @class */ (function () {
        function SmallGridTableModule() {
        }
        SmallGridTableModule.forRoot = function () {
            return {
                ngModule: SmallGridTableModule,
                providers: [],
            };
        };
        SmallGridTableModule.forChild = function () {
            return {
                ngModule: SmallGridTableModule,
                providers: [],
            };
        };
        return SmallGridTableModule;
    }());
    SmallGridTableModule.ɵmod = i0.ɵɵdefineNgModule({ type: SmallGridTableModule });
    SmallGridTableModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SmallGridTableModule_Factory(t) { return new (t || SmallGridTableModule)(); }, imports: [[
                i3.CommonModule,
                i1.MatCardModule,
                i2.MatGridListModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SmallGridTableModule, { declarations: [SmallGridTableComponent], imports: [i3.CommonModule,
                i1.MatCardModule,
                i2.MatGridListModule], exports: [SmallGridTableComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SmallGridTableModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [SmallGridTableComponent],
                        imports: [
                            i3.CommonModule,
                            i1.MatCardModule,
                            i2.MatGridListModule
                        ],
                        exports: [SmallGridTableComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of small-grid-table
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SmallGridTableComponent = SmallGridTableComponent;
    exports.SmallGridTableModule = SmallGridTableModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=small-grid-table.umd.js.map
