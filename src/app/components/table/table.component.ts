import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

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

export interface TableOptionsInterface {
  title: string;
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
  @Input() enableCheckbox = false;
  @Input() options: TableOptionsInterface[] = [];
  @Input() editBtn = false;
  @Input() deleteBtn = false;

  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectedTableData: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('isAllCheckedControl') isAllCheckedControl!: TemplateRef<any>;

  isAllChecked = false;
  selectedData: any[] = [];

  ngOnInit(): void {
    if (this.enableCheckbox) {
      this.mapDataWithCheckbox();
    }
  }

  rowClick(data: any) {
    this.rowClicked.emit(data)
  }

  mapDataWithCheckbox() {
    this.rows = this.rows.map(data => {
      return { ...data, ...{ selected: false } }
    })
  }

  selectData(all = false, index = 0) {
    if (all) {
      this.isAllChecked = !this.isAllChecked;
      this.rows = this.rows.map(data => {
        return { ...data, ...{ selected: this.isAllChecked } }
      });
      this.selectedData = this.rows
    } else {
      this.rows[index].selected = !this.rows[index].selected;
      this.selectedData = this.rows.filter(x => x.selected);
      this.isAllChecked = this.rows.map(x => x.selected).every(x => x === true);
    }
    this.selectedTableData.emit(this.selectedData);
  }

}
