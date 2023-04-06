import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ColumnProps {
  header: string;
  prop: string;
  cssClass?: string;
  clickAction?: {
    (data?: any): void;
  };
  cssMethod?: {
    (propData?: string): string;
  };
}

export interface ButtonConfigInterface {
  title: string;
  icon?: string;
  cssClass?: string;
  clickAction?: {
    (): void;
  };
}

@Component({
  selector: 'eb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() rows: any[] = [];
  @Input() columnProps: ColumnProps[] = [];
  @Input() heading!: string;
  @Input() buttonConfig: ButtonConfigInterface[] = [];
  // @Input() rowClick!: {
  //   (data?: any): void
  // }

  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    console.log(this.columnProps)
  }

  rowClick(data: any) {
    this.rowClicked.emit(data)
  }
}
