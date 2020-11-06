import { OnInit, ChangeDetectorRef, TemplateRef } from "@angular/core";
import * as i0 from "@angular/core";
export interface Tile {
    data: any;
    ui?: any;
    _c?: number;
    _r?: number;
}
declare type Dtb = Array<Array<Tile>>;
declare type FlatDtb = Array<Tile>;
export declare class SmallGridTableComponent implements OnInit {
    private cdref;
    dtb: Dtb;
    flat: FlatDtb;
    rownum: number;
    colnum: number;
    width: string;
    ratio: string;
    height: string;
    gutter: string;
    dflt: boolean;
    ui_func: (cell: any) => void;
    slotRef: TemplateRef<any>;
    constructor(cdref: ChangeDetectorRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<SmallGridTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SmallGridTableComponent, "nv-small-grid-table", never, { "dtb": "dtb"; "width": "width"; "ratio": "ratio"; "height": "height"; "gutter": "gutter"; "dflt": "dflt"; "ui_func": "ui_func"; }, {}, ["slotRef"], never>;
}
export {};
