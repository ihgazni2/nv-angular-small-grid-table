# SmallGridTable
>__used in angular project__

a simple grid table  for small data, self-defined ui for each cell

# Install
>__npm install small-grid-table__

## Usage
_(stackblitz example)_

---------------------------------------------------------------------------------------
[Click to Demo Project](https://stackblitz.com/edit/angular-small-grid-table?file=src/index.html)

---------------------------------------------------------------------------------------

## USEAGE SCREENSHOOTS

###

    <nv-small-grid-table
        [dtb]="dtb"             //data mat
        width="700"             //the container width
        ratio="2:1"             //width:height of each cell
        [dflt]="false"          //enable default ui
        [ui_func]="set_ui"      //customer defined function to set ui for each cell
    >
        <ng-template let-cell #smallGridTableSlot>
            <your-html-here>....</your-html-here>
        </ng-template>
    </nv-small-grid-table>


    dtb format :
        [
            [cell,cell,cell....],
            ...
            [cell,cell,cell....]
        ]

    cell format:
        {
            data:"your data",
            ui:"css here for cell"      //optional
        }

    ui_func:
        (cell)=> {
            cell.ui = ....
            cell._r        //row-index
            cell._c        //col-index
        }

        such as:

        public set_ui = (cell)=>{
            if(cell._r > cell._c) {
                cell.ui="box-shadow: 0px 1px 3px rgba(34, 25, 25, 0.2);"
            } else if(cell._r === cell._c) {
                cell.ui="background-color:#f8f8f8;"
            } else {
               cell.ui="background-color:yellow;"
            }
        }



### with default ui

    <div fxLayout="column" fxLayoutAlign="center center" [style.width.px]="1000" [style.height.px]="1000">
        <nv-small-grid-table [dtb]="dtb2" width="700" ratio="2:1" >
            <ng-template let-cell #smallGridTableSlot>
                    <div *ngIf="cell._c!==0 && cell._r!==0">{{cell.data *3 }}</div>
                    <div *ngIf="cell._r===0 && cell._c===0">{{cell.data }}</div>
                    <div *ngIf="cell._r===0 && cell._c!==0">{{cell.data | translate:'role'}}</div>
                    <div *ngIf="cell._c===0 && cell._r!==0">{{cell.data | translate:'priority'}}</div>
                </ng-template>
            </nv-small-grid-table>
        <nv-small-grid-table [dtb]="dtb2" width="700" ratio="2:1" >
                <ng-template let-cell #smallGridTableSlot>
                        <mat-form-field *ngIf="cell._r>0 && cell._c>0" style="width:50%;">
                                <input  matInput type="number" min="0" [(ngModel)]="cell.data"/>
                </mat-form-field>
                                <div *ngIf="cell._r===0 && cell._c===0">{{cell.data }}</div>
                                <div *ngIf="cell._r===0 && cell._c!==0">{{cell.data | translate:'role'}}</div>
                                <div *ngIf="cell._c===0 && cell._r!==0">{{cell.data | translate:'priority'}}</div>
                </ng-template>
        </nv-small-grid-table>
    </div>

![](https://github.com/navegador5/nv-angular-small-grid-table/raw/master/Images/dflt.png)





### with self-defined

    <div fxLayout="column" fxLayoutAlign="center center" [style.width.px]="1000" [style.height.px]="1000">
        <nv-small-grid-table [dtb]="dtb" width="700" ratio="2:1" [ui_func]="set_ui" [dflt]="false">
        <ng-template let-cell #smallGridTableSlot>
                    <div *ngIf="cell._c!==0 && cell._r!==0">{{cell.data *3 }}</div>
                    <div *ngIf="cell._r===0 && cell._c===0">{{cell.data }}</div>
                    <div *ngIf="cell._r===0 && cell._c!==0">{{cell.data | translate:'role'}}</div>
                    <div *ngIf="cell._c===0 && cell._r!==0">{{cell.data | translate:'priority'}}</div>
                </ng-template>
        </nv-small-grid-table>
        <nv-small-grid-table [dtb]="dtb" width="700" ratio="2:1">
                <ng-template let-cell #smallGridTableSlot>
                        <mat-form-field *ngIf="cell._r>0 && cell._c>0" style="width:50%;">
                                <input  matInput type="number" min="0" [(ngModel)]="cell.data"/>
                </mat-form-field>
                        <div *ngIf="cell._r===0 && cell._c===0">{{cell.data }}</div>
                        <div *ngIf="cell._r===0 && cell._c!==0">{{cell.data | translate:'role'}}</div>
                        div *ngIf="cell._c===0 && cell._r!==0">{{cell.data | translate:'priority'}}</div>
                </ng-template>
        </nv-small-grid-table>
    </div>


![](https://github.com/navegador5/nv-angular-small-grid-table/raw/master/Images/self-defined.png)





## GITHUB

---------------------------------------------------------------------------------------
[nv-angular-small-grid-table](https://github.com/navegador5/nv-angular-small-grid-table)

---------------------------------------------------------------------------------------


## PACKAGE DEPENDANY

---------------------------------------------------------

----------------------------------------------------------

## CODE REFERENCE
_(thanks to)_

------------------------------------------------------------------

--------------------------------------------------------------------

