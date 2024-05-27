import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ColDef } from 'ag-grid-community';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
import { forkJoin, Observable } from 'rxjs';
import { LogDataService } from 'src/app/data-logging/services/log-data.service';
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { DataViewerComponent } from 'src/app/shared/components/data-viewer/data-viewer.component';

interface Values {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit, OnDestroy {
  private refreshInterval!: number;
  private timeoutId: any;
  rowData!: Observable<any[]>;
  form!: FormGroup;
  formatpipe: any;
  columnDefs: any;
  defaultColDef: any;
  gridApi: any;
  myDate: any;
  pastDate: any;
  pastSevenDate: any;
  pastMonthDate: any;
  pastThreeMonthDate: any;
  partId: any;
  totalProduction: any;

  values: Values[] = [
    { value: 'Current Shift', viewValue: 'Current Shift' },
    { value: 'One Week', viewValue: 'One Week' },
    { value: 'One Month', viewValue: 'One Month' },
    { value: 'Three Months', viewValue: 'Three Months' },
  ];

  prodParameters = {
    fileName: 'productionReport' + new Date().getTime() + '.csv',
  };

  selectedval = this.values[0].value;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private logDataService: LogDataService,
    public dialog: MatDialog
  ) {
    this.columnDefs = [
      { headerName: 'DATE', field: 'date' },
      { headerName: 'TIME', field: 'time' },
      { headerName: 'SHIFT', field: 'shift' },
      { headerName: 'SFL SERIAL NUMBER', field: 'sfl_serial_number' },
      { headerName: 'COMPONENT BARCODE', field: 'component_barcode' },
      { headerName: 'MACHINE NAME', field: 'machine_name' },
      { headerName: 'PRODUCTION STATUS', field: 'production_status' },
      {
        headerName: 'OP1010 - OIL HOLE CHECKING MACHINE',
        children: [
          { headerName: 'OCV HOLE STATUS', field: 'op1010_ocv_hole_status' },
          { headerName: 'BAP HOLE STATUS', field: 'op1010_bap_hole_status' },
          {
            headerName: 'PIPE PLUG HOLE STATUS',
            field: 'op1010_pipe_plug_hole_status',
          },
          {
            headerName: 'THREAD PLUG HOLE STATUS',
            field: 'op1010_thread_plug_hole_status',
          },
        ],
      },
      {
        headerName: 'OP1020A - BALL PRESS MACHINE',
        children: [
          {
            headerName: 'MIN ID  GAUGE VALUE (MM)',
            field: 'op1020a_min_id_gauge_value',
          },
          {
            headerName: 'MAX ID GAUGE  VALUE(MM)',
            field: 'op1020a_max_id_gauge_value',
          },
          {
            headerName: 'ACTUAL ID A GAUGE VALUE (MM)',
            field: 'op1020a_actual_id_a_gauge_value',
          },
          {
            headerName: 'ACTUAL ID B GAUGE VALUE (MM)',
            field: 'op1020a_actual_id_b_gauge_value',
          },
          { headerName: 'ID GAUGE STATUS', field: 'op1020a_id_gauge_status' },
          { headerName: 'MIN LOAD VALUE(KG)', field: 'op1020a_min_load_value' },
          {
            headerName: 'MAX LOAD VALUE (KG)',
            field: 'op1020a_max_load_value',
          },
          {
            headerName: 'ACTUAL LOAD VALUE (KG)',
            field: 'op1020a_actual_load_value',
          },
          {
            headerName: 'BALL PRESS STATUS',
            field: 'op1020a_ball_press_status',
          },
        ],
      },
      {
        headerName: 'OP1020B - SOCKET PRESS MACHINE',
        children: [
          {
            headerName: 'SOCKET PRESS STATUS',
            field: 'op1020b_socket_press_status',
          },
        ],
      },
      {
        headerName: 'OP1030 - SCREW & NUT ASSEMBLY MACHINE',
        children: [
          {
            headerName: 'PRE-SCREWING AND SCREWING STATUS',
            field: 'op1030_pre_screwing_and_screwing_status',
          },
          {
            headerName: 'NUT TIGHTENING STATUS',
            field: 'op1030_nut_tightening_status',
          },
        ],
      },
      {
        headerName: 'OP1040A - PIPE PLUG VALVE ASSEMBLY MACHINE',
        children: [
          { headerName: 'TARGET TORQUE (NM)', field: 'op1040a_target_torque' },
          { headerName: 'ACTUAL TORQUE (NM)', field: 'op1040a_actual_torque' },
          {
            headerName: 'PIPE PLUG ASSEMBLY STATUS',
            field: 'op1040a_pipe_plug_asmbly_status',
          },
        ],
      },
      {
        headerName: 'OP1040B - INSERT VALVE ASSEMBLY MACHINE',
        children: [
          {
            headerName: 'MIN ID GAUGE BORE DIA (MM)',
            field: 'op1040b_min_id_gauge_bore_dia',
          },
          {
            headerName: 'MAX ID GAUGE BORE DIA (MM)',
            field: 'op1040b_max_id_gauge_bore_dia',
          },
          {
            headerName: 'ACTUAL ID GAUGE BORE DIA (MM)',
            field: 'op1040b_actual_id_gauge_bore_dia',
          },
          { headerName: 'ID GAUGE STATUS', field: 'op1040b_id_gauge_status' },
          {
            headerName: 'MIN LOAD INSERT VALVE PRESS VALUE (KG)',
            field: 'op1040b_min_load_insert_valve_press_value',
          },
          {
            headerName: 'MAX LOAD INSERT VALVE PRESS VALUE (KG)',
            field: 'op1040b_max_load_insert_valve_press_value',
          },
          {
            headerName: 'ACTUAL LOAD INSERT VALVE PRESS VALUE (KG)',
            field: 'op1040b_actual_load_insert_valve_press_value',
          },
          {
            headerName: 'MIN DISPLACEMENT INSERT VALVE VALUE (MM)',
            field: 'op1040b_min_displacement_insert_valve_value',
          },
          {
            headerName: 'MAX DISPLACEMENT INSERT VALVE VALUE (MM)',
            field: 'op1040b_max_displacement_insert_valve_value',
          },
          {
            headerName: 'ACTUAL DISPLACEMENT INSERT VALVE VALUE (MM)',
            field: 'op1040b_actual_displacement_insert_valve_value',
          },
          {
            headerName: 'INSERT VALVE PRESS STATUS',
            field: 'op1040b_insert_valve_press_status',
          },
        ],
      },
      {
        headerName: 'OP1040C - BALL OVER HEIGHT CHECK MACHINE',
        children: [
          {
            headerName: 'MIN BALL OVER HEIGHT VALUE (MM)',
            field: 'op1040c_min_ball_over_height_value',
          },
          {
            headerName: 'MAX BALL OVER HEIGHT VALUE (MM)',
            field: 'op1040c_max_ball_over_height_value',
          },
          {
            headerName: 'ACTUAL BALL OVER HEIGHT VALUE (MM)',
            field: 'op1040c_actual_ball_over_height_value',
          },
          {
            headerName: 'BALL OVER HEIGHT CHECK STATUS',
            field: 'op1040c_ball_over_height_check_status',
          },
        ],
      },
      {
        headerName: 'OP1040D - THREAD PLUG ASSEMBLY MACHINE',
        children: [
          {
            headerName: 'MINIMUM TORQUE (NM)',
            field: 'op1040d_minimum_torque',
          },
          {
            headerName: 'MAXIMUM TORQUE (NM)',
            field: 'op1040d_maximum_torque',
          },
          { headerName: 'ACTUAL TORQUE (NM)', field: 'op1040d_actual_torque' },
          { headerName: 'ACTUAL ANGLE"', field: 'op1040d_actual_angle' },
          {
            headerName: 'BALL / SPRING/ O-RING / THREAD PLUG ASSEMBLY STATUS',
            field: 'op1040d_ball_spring_oring_thread_plug_asmbly_status',
          },
        ],
      },
      {
        headerName: 'OP1050 - OCV ASSEMBLY MACHINE',
        children: [
          {
            headerName: 'MIN OCV ID GAUGE VALUE (MM)',
            field: 'op1050_min_ocv_id_gauge_value',
          },
          {
            headerName: 'MAX OCV ID GAUGE VALUE (MM)',
            field: 'op1050_max_ocv_id_gauge_value',
          },
          {
            headerName: 'ACTUAL OCV ID GAUGE VALUE (MM)',
            field: 'op1050_actual_ocv_id_gauge_value',
          },
          {
            headerName: 'MIN BAP ID GAUGE VALUE (MM)',
            field: 'op1050_min_bap_id_gauge_value',
          },
          {
            headerName: 'MAX BAP ID GAUGE VALUE (MM)',
            field: 'op1050_max_bap_id_gauge_value',
          },
          {
            headerName: 'ACTUAL BAP ID GAUGE VALUE (MM)',
            field: 'op1050_actual_bap_id_gauge_value',
          },
          { headerName: 'ID GAUGE STATUS', field: 'op1050_id_gauge_status' },
          {
            headerName: 'OCV / BAP ASSEMBLY STATUS',
            field: 'op1050_ocv_and_bap_asmbly_status',
          },
          {
            headerName: 'SPRING ASSEMBLY STATUS',
            field: 'op1050_spring_asmbly_status',
          },
          {
            headerName: 'RETAINER ASSEMBLY STATUS',
            field: 'op1050_retainer_asmbly_status',
          },
          {
            headerName: 'CIRCLIP ASSEMBLY STATUS',
            field: 'op1050_circlip_asmbly_status',
          },
        ],
      },
      {
        headerName: 'OP1050A - OCV ASSEMBLY MACHINE A',
        children: [
          {
            headerName: 'MIN OCV ID GAUGE VALUE (MM)',
            field: 'op1050a_min_ocv_id_gauge_value',
          },
          {
            headerName: 'MAX OCV ID GAUGE VALUE (MM)',
            field: 'op1050a_max_ocv_id_gauge_value',
          },
          {
            headerName: 'ACTUAL OCV ID GAUGE VALUE (MM)',
            field: 'op1050a_actual_ocv_id_gauge_value',
          },
          {
            headerName: 'MIN BAP ID GAUGE VALUE (MM)',
            field: 'op1050a_min_bap_id_gauge_value',
          },
          {
            headerName: 'MAX BAP ID GAUGE VALUE (MM)',
            field: 'op1050a_max_bap_id_gauge_value',
          },
          {
            headerName: 'ACTUAL BAP ID GAUGE VALUE (MM)',
            field: 'op1050a_actual_bap_id_gauge_value',
          },
          { headerName: 'ID GAUGE STATUS', field: 'op1050a_id_gauge_status' },
          {
            headerName: 'OCV / BAP ASSEMBLY STATUS',
            field: 'op1050a_ocv_and_bap_asmbly_status',
          },
          {
            headerName: 'SPRING ASSEMBLY STATUS',
            field: 'op1050a_spring_asmbly_status',
          },
          {
            headerName: 'RETAINER ASSEMBLY STATUS',
            field: 'op1050a_retainer_asmbly_status',
          },
          {
            headerName: 'CIRCLIP ASSEMBLY STATUS',
            field: 'op1050a_circlip_asmbly_status',
          },
        ],
      },
      {
        headerName: 'OP1060 - PIN PRESS ASSEMBLY MACHINE',
        children: [
          {
            headerName: 'MIN PIN PRESS LOAD VALUE (KG)',
            field: 'op1060_min_pin_press_load_value',
          },
          {
            headerName: 'MAX PIN PRESS LOAD VALUE (KG)',
            field: 'op1060_max_pin_press_load_value',
          },
          {
            headerName: 'ACTUAL PIN PRESS LOAD VALUE (KG)',
            field: 'op1060_actual_pin_press_load_value',
          },
          {
            headerName: 'MIN PIN DISPLACEMENT VALUE (MM)',
            field: 'op1060_min_pin_displacement_value',
          },
          {
            headerName: 'MAX PIN DISPLACEMENT VALUE (MM)',
            field: 'op1060_max_pin_displacement_value',
          },
          {
            headerName: 'ACTUAL PIN  DISPLACEMENT VALUE (MM)',
            field: 'op1060_actual_pin_displacement_value',
          },
          { headerName: 'PIN PRESS STATUS', field: 'op1060_pin_press_status' },
        ],
      },
      {
        headerName: 'OP1060A - PIN PRESS ASSEMBLY MACHINE A',
        children: [
          {
            headerName: 'MIN PIN PRESS LOAD VALUE (KG)',
            field: 'op1060a_min_pin_press_load_value',
          },
          {
            headerName: 'MAX PIN PRESS LOAD VALUE (KG)',
            field: 'op1060a_max_pin_press_load_value',
          },
          {
            headerName: 'ACTUAL PIN PRESS LOAD VALUE (KG)',
            field: 'op1060a_actual_pin_press_load_value',
          },
          {
            headerName: 'MIN PIN DISPLACEMENT VALUE (MM)',
            field: 'op1060a_min_pin_displacement_value',
          },
          {
            headerName: 'MAX PIN DISPLACEMENT VALUE (MM)',
            field: 'op1060a_max_pin_displacement_value',
          },
          {
            headerName: 'ACTUAL PIN  DISPLACEMENT VALUE (MM)',
            field: 'op1060a_actual_pin_displacement_value',
          },
          { headerName: 'PIN PRESS STATUS', field: 'op1060_pin_press_status' },
        ],
      },
      {
        headerName: 'OP1070 - FUNCTIONAL TEST RIG',
        children: [
          { headerName: 'MIN LOAD VALUE(KG)', field: 'op1070_min_load_value' },
          { headerName: 'MAX LOAD VALUE (KG)', field: 'op1070_max_load_value' },
          {
            headerName: 'ACTUAL LOAD VALUE (KG)',
            field: 'op1070_actual_load_value',
          },
          {
            headerName: 'FUNCTIONAL TEST STATUS',
            field: 'op1070_functional_test_status',
          },
        ],
      },
      {
        headerName: 'OP1070A - FUNCTIONAL TEST RIG A',
        children: [
          { headerName: 'MIN LOAD VALUE(KG)', field: 'op1070a_min_load_value' },
          {
            headerName: 'MAX LOAD VALUE (KG)',
            field: 'op1070a_max_load_value',
          },
          {
            headerName: 'ACTUAL LOAD VALUE (KG)',
            field: 'op1070a_actual_load_value',
          },
          {
            headerName: 'FUNCTIONAL TEST STATUS A',
            field: 'op1070a_functional_test_status',
          },
        ],
      },
    ];
    this.defaultColDef = {
      sortable: true,
      resizable: true,
      filter: true,
    };
    this.partId = new FormControl('');
  }

  selectvalue(event: Event) {
    this.selectedval = (event.target as HTMLSelectElement).value;
  }

  onRowClicked(event: any) {
    const dialogRef = this.dialog.open(DataViewerComponent, {
      width: '50%',
      data: event.data,
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  downloadPartReport() {
    let prodId = '' + this.partId.value;
    if (prodId !== '') {
      this.rowData = this.logDataService.getLine1DataUsingProductId(prodId);
    }
  }

  onGridReady(params: { api: any }) {
    this.gridApi = params.api;
  }

  ngOnInit(): void {
    if (!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(['/login']);
    }
    this.form = this.fb.group({
      daterange: new FormGroup({
        start: new FormControl(),
        end: new FormControl(),
      }),
    });
    this.rowData = this.logDataService.getLine1UpdatedResults();

    this.refreshInterval = 2000;
    this.refreshLogData();
  }

  private refreshLogData(): void {
    forkJoin([this.logDataService.getTotalProductionCount()]).subscribe(
      (results) => {
        this.totalProduction = results[0];
        this.timeoutId = setTimeout(
          () => this.refreshLogData(),
          this.refreshInterval
        );
      }
    );
  }

  changeClient(value: any) {
    this.formatpipe = new DatePipe('en-IN');
    this.myDate = new Date();

    if (value == 'Current Shift') {
      let currentShiftFrom = '';
      let currentShiftTo = '';
      const dateformatcurrent = this.formatpipe.transform(
        this.myDate,
        'yyyy-MM-dd'
      );
      currentShiftFrom = '' + dateformatcurrent;
      currentShiftTo = '' + dateformatcurrent;
      this.getFilteredData(currentShiftFrom, currentShiftTo);
    } else if (value == 'One Week') {
      let oneWeekFrom = '';
      let oneWeekTo = '';
      const dateformatcurrent = this.formatpipe.transform(
        this.myDate,
        'yyyy-MM-dd'
      );
      this.pastSevenDate = moment().subtract(7, 'days').format('yyyy-MM-DD');
      oneWeekFrom = '' + this.pastSevenDate;
      oneWeekTo = '' + dateformatcurrent;
      this.getFilteredData(oneWeekFrom, oneWeekTo);
    } else if (value == 'One Month') {
      let oneMonthFrom = '';
      let oneMonthTo = '';
      const dateformatcurrent = this.formatpipe.transform(
        this.myDate,
        'yyyy-MM-dd'
      );
      this.pastMonthDate = moment().subtract(1, 'months').format('yyyy-MM-DD');
      oneMonthFrom = '' + this.pastMonthDate;
      oneMonthTo = '' + dateformatcurrent;
      this.getFilteredData(oneMonthFrom, oneMonthTo);
    } else {
      let threeMonthsFrom = '';
      let threeMonthsTo = '';
      const dateformatcurrent = this.formatpipe.transform(
        this.myDate,
        'yyyy-MM-dd'
      );
      this.pastThreeMonthDate = moment()
        .subtract(3, 'months')
        .format('yyyy-MM-DD');
      threeMonthsFrom = '' + this.pastThreeMonthDate;
      threeMonthsTo = '' + dateformatcurrent;
      this.getFilteredData(threeMonthsFrom, threeMonthsTo);
    }
  }

  openDesiredAdminComponent(navigate: any) {
    if (navigate === 'partReportGenerate') {
      this.router.navigate(['/admin/partReportGenerate']);
    }
    if (navigate === 'productionReportGenerate') {
      this.router.navigate(['/admin/productionReportGenerate']);
    }

    if (navigate === 'userManagement') {
      this.router.navigate(['/admin/userManagement']);
    }
  }
  goBackToHome() {
    this.router.navigate(['/home']);
  }
  onSubmit() {
    this.formatpipe = new DatePipe('en-IN');
    const dateformatstart = this.formatpipe.transform(
      this.form.value.daterange.start,
      'yyyy-MM-dd'
    );
    const dateformatend = this.formatpipe.transform(
      this.form.value.daterange.end,
      'yyyy-MM-dd'
    );

    let shiftFrom = '';
    let shiftTo = '';
    shiftFrom = '' + dateformatstart;
    shiftTo = '' + dateformatend;
    if (shiftFrom !== '' && shiftTo !== '') {
      this.getFilteredData(shiftFrom, shiftTo);
    }

    console.log(dateformatstart);
    console.log(dateformatend);
  }

  getFilteredData(fromDate: string, toDate: string) {
    this.rowData = this.logDataService.getLine1FilteredData(fromDate, toDate);
  }

  manualRefresh() {
    this.formatpipe = new DatePipe('en-IN');
    this.myDate = new Date();
    let currentShiftFrom = '';
    let currentShiftTo = '';
    const dateformatcurrent = this.formatpipe.transform(
      this.myDate,
      'yyyy-MM-dd'
    );
    currentShiftFrom = '' + dateformatcurrent;
    currentShiftTo = '' + dateformatcurrent;
    this.getFilteredData(currentShiftFrom, currentShiftTo);
  }

  export_part_report_excel() {
    if (this.rowData) {
      this.gridApi.exportDataAsCsv(this.prodParameters);
    }
  }

  public ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
