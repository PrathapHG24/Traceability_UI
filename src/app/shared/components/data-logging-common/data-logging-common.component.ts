import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { forkJoin, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { LogDataService } from 'src/app/data-logging/services/log-data.service';
import { MatDialog } from '@angular/material/dialog';
import { DataViewerComponent } from '../data-viewer/data-viewer.component';

interface Values {
  value: string;
  viewValue: string;
}
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-data-logging-common',
  templateUrl: './data-logging-common.component.html',
  styleUrls: ['./data-logging-common.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    { provide: DatePipe },
  ],
})
export class DataLoggingCommonComponent implements OnInit, OnDestroy {
  @Input() fromOilHoleCheckingComponent: any;
  @Input() fromBallPressingComponent: any;
  @Input() fromSocketPressingComponent: any;
  @Input() fromScrewAndNutAssemblyComponent: any;
  @Input() fromPipePluAssemblyComponent: any;
  @Input() fromInsertValveAssemblyComponent: any;
  @Input() fromBallOverHeightMeasureComponent: any;
  @Input() fromThreadedPlugAssemblyComponent: any;
  @Input() fromOcvPlungerAssemblyComponent: any;
  @Input() fromOcvPlungerAssemblyAComponent: any;
  @Input() fromMasterPistonAssemblyComponent: any;
  @Input() fromMasterPistonAssemblyAComponent: any;
  @Input() fromFunctionalTestRigComponent: any;
  @Input() fromFunctionalTestRigAComponent: any;

  values: Values[] = [
    { value: 'Current Shift', viewValue: 'Current Shift' },
    { value: 'One Week', viewValue: 'One Week' },
    { value: 'One Month', viewValue: 'One Month' },
    { value: 'Three Months', viewValue: 'Three Months' },
  ];

  selectedval = this.values[0].value;

  m1columnDefs: ColDef[] = [
    {
      headerName: 'DATE',
      field: 'date',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'TIME',
      field: 'time',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'COMPONENT BARCODE',
      field: 'component_barcode',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MACHINE NAME',
      field: 'machine_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'SHIFT',
      field: 'shift',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'PRODUCTION STATUS',
      field: 'production_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'OCV HOLE STATUS',
      field: 'ocv_hole_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'BAP HOLE STATUS',
      field: 'bap_hole_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'PIPE PLUG HOLE STATUS',
      field: 'pipe_plug_hole_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'THREAD PLUG HOLE STATUS',
      field: 'thread_plug_hole_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'CYCLE TIME',
      field: 'cycleTime',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'OPERATOR NAME',
      field: 'operator_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'FAIL REASON',
      field: 'fail_reason',
      sortable: true,
      filter: true,
      resizable: true,
    },
  ];
  m2columnDefs: ColDef[] = [
    {
      headerName: 'DATE',
      field: 'date',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'TIME',
      field: 'time',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'COMPONENT BARCODE',
      field: 'component_barcode',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MACHINE NAME',
      field: 'machine_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'SHIFT',
      field: 'shift',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'PRODUCTION STATUS',
      field: 'production_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MIN ID  GAUGE VALUE (MM)',
      field: 'min_id_gauge_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MAX ID GAUGE  VALUE(MM)',
      field: 'max_id_gauge_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ACTUAL ID A GAUGE VALUE (MM)',
      field: 'actual_id_a_gauge_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ACTUAL ID B GAUGE VALUE (MM)',
      field: 'actual_id_b_gauge_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ID GAUGE STATUS',
      field: 'id_gauge_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MIN LOAD VALUE(KG)',
      field: 'min_load_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MAX LOAD VALUE (KG)',
      field: 'max_load_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ACTUAL LOAD VALUE (KG)',
      field: 'actual_load_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'BALL PRESS STATUS',
      field: 'ball_press_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'CYCLE TIME',
      field: 'cycleTime',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'OPERATOR NAME',
      field: 'operator_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'FAIL REASON',
      field: 'fail_reason',
      sortable: true,
      filter: true,
      resizable: true,
    },
  ];
  m3columnDefs: ColDef[] = [
    {
      headerName: 'DATE',
      field: 'date',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'TIME',
      field: 'time',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'COMPONENT BARCODE',
      field: 'component_barcode',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MACHINE NAME',
      field: 'machine_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'SHIFT',
      field: 'shift',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'PRODUCTION STATUS',
      field: 'production_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'SOCKET PRESS STATUS',
      field: 'socket_press_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'CYCLE TIME',
      field: 'cycleTime',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'OPERATOR NAME',
      field: 'operator_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'FAIL REASON',
      field: 'fail_reason',
      sortable: true,
      filter: true,
      resizable: true,
    },
  ];
  m4columnDefs: ColDef[] = [
    {
      headerName: 'DATE',
      field: 'date',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'TIME',
      field: 'time',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'COMPONENT BARCODE',
      field: 'component_barcode',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MACHINE NAME',
      field: 'machine_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'SHIFT',
      field: 'shift',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'PRODUCTION STATUS',
      field: 'production_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'PRE-SCREWING AND SCREWING STATUS',
      field: 'pre_screwing_and_screwing_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'NUT TIGHTENING STATUS',
      field: 'nut_tightening_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'CYCLE TIME',
      field: 'cycleTime',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'OPERATOR NAME',
      field: 'operator_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'FAIL REASON',
      field: 'fail_reason',
      sortable: true,
      filter: true,
      resizable: true,
    },
  ];
  m5columnDefs: ColDef[] = [
    {
      headerName: 'DATE',
      field: 'date',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'TIME',
      field: 'time',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'COMPONENT BARCODE',
      field: 'component_barcode',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MACHINE NAME',
      field: 'machine_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'SHIFT',
      field: 'shift',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'PRODUCTION STATUS',
      field: 'production_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'TARGET TORQUE (NM)',
      field: 'target_torque',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ACTUAL TORQUE (NM)',
      field: 'actual_torque',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'PIPE PLUG ASSEMBLY STATUS',
      field: 'pipe_plug_asmbly_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'CYCLE TIME',
      field: 'cycleTime',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'OPERATOR NAME',
      field: 'operator_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'FAIL REASON',
      field: 'fail_reason',
      sortable: true,
      filter: true,
      resizable: true,
    },
  ];
  m6columnDefs: ColDef[] = [
    {
      headerName: 'DATE',
      field: 'date',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'TIME',
      field: 'time',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'COMPONENT BARCODE',
      field: 'component_barcode',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MACHINE NAME',
      field: 'machine_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'SHIFT',
      field: 'shift',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'PRODUCTION STATUS',
      field: 'production_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MIN ID GAUGE BORE DIA (MM)',
      field: 'min_id_gauge_bore_dia',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MAX ID GAUGE BORE DIA (MM)',
      field: 'max_id_gauge_bore_dia',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ACTUAL ID GAUGE BORE DIA (MM)',
      field: 'actual_id_gauge_bore_dia',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ID GAUGE STATUS',
      field: 'id_gauge_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MIN LOAD INSERT VALVE PRESS VALUE (KG)',
      field: 'min_load_insert_valve_press_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MAX LOAD INSERT VALVE PRESS VALUE (KG)',
      field: 'max_load_insert_valve_press_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ACTUAL LOAD INSERT VALVE PRESS VALUE (KG)',
      field: 'actual_load_insert_valve_press_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MIN DISPLACEMENT INSERT VALVE VALUE (MM)',
      field: 'min_displacement_insert_valve_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MAX DISPLACEMENT INSERT VALVE VALUE (MM)',
      field: 'max_displacement_insert_valve_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ACTUAL DISPLACEMENT INSERT VALVE VALUE (MM)',
      field: 'actual_displacement_insert_valve_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'INSERT VALVE PRESS STATUS',
      field: 'insert_valve_press_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'CYCLE TIME',
      field: 'cycleTime',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'OPERATOR NAME',
      field: 'operator_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'FAIL REASON',
      field: 'fail_reason',
      sortable: true,
      filter: true,
      resizable: true,
    },
  ];
  m7columnDefs: ColDef[] = [
    {
      headerName: 'DATE',
      field: 'date',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'TIME',
      field: 'time',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'COMPONENT BARCODE',
      field: 'component_barcode',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MACHINE NAME',
      field: 'machine_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'SHIFT',
      field: 'shift',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'PRODUCTION STATUS',
      field: 'production_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MIN BALL OVER HEIGHT VALUE (MM)',
      field: 'min_ball_over_height_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MAX BALL OVER HEIGHT VALUE (MM)',
      field: 'max_ball_over_height_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ACTUAL BALL OVER HEIGHT VALUE (MM)',
      field: 'actual_ball_over_height_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'BALL OVER HEIGHT CHECK STATUS',
      field: 'ball_over_height_check_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'CYCLE TIME',
      field: 'cycleTime',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'OPERATOR NAME',
      field: 'operator_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'FAIL REASON',
      field: 'fail_reason',
      sortable: true,
      filter: true,
      resizable: true,
    },
  ];
  m8columnDefs: ColDef[] = [
    {
      headerName: 'DATE',
      field: 'date',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'TIME',
      field: 'time',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'COMPONENT BARCODE',
      field: 'component_barcode',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MACHINE NAME',
      field: 'machine_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'SHIFT',
      field: 'shift',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'PRODUCTION STATUS',
      field: 'production_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MINIMUM TORQUE (NM)',
      field: 'minimum_torque',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MAXIMUM TORQUE (NM)',
      field: 'maximum_torque',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ACTUAL TORQUE (NM)',
      field: 'actual_torque',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ACTUAL ANGLE',
      field: 'actual_angle',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'BALL / SPRING/ O-RING / THREAD PLUG ASSEMBLY STATUS',
      field: 'ball_spring_oring_thread_plug_asmbly_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'CYCLE TIME',
      field: 'cycleTime',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'OPERATOR NAME',
      field: 'operator_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'FAIL REASON',
      field: 'fail_reason',
      sortable: true,
      filter: true,
      resizable: true,
    },
  ];
  m9columnDefs: ColDef[] = [
    {
      headerName: 'DATE',
      field: 'date',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'TIME',
      field: 'time',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'COMPONENT BARCODE',
      field: 'component_barcode',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MACHINE NAME',
      field: 'machine_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'SHIFT',
      field: 'shift',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'PRODUCTION STATUS',
      field: 'production_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MIN OCV ID GAUGE VALUE (MM)',
      field: 'min_ocv_id_gauge_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MAX OCV ID GAUGE VALUE (MM)',
      field: 'max_ocv_id_gauge_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ACTUAL OCV ID GAUGE VALUE (MM)',
      field: 'actual_ocv_id_gauge_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MIN BAP ID GAUGE VALUE (MM)',
      field: 'min_bap_id_gauge_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MAX BAP ID GAUGE VALUE (MM)',
      field: 'max_bap_id_gauge_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ACTUAL BAP ID GAUGE VALUE (MM)',
      field: 'actual_bap_id_gauge_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ID GAUGE STATUS',
      field: 'id_gauge_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'OCV / BAP ASSEMBLY STATUS',
      field: 'ocv_and_bap_asmbly_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'SPRING ASSEMBLY STATUS',
      field: 'spring_asmbly_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'RETAINER ASSEMBLY STATUS',
      field: 'retainer_asmbly_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'CIRCLIP ASSEMBLY STATUS',
      field: 'circlip_asmbly_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'CYCLE TIME',
      field: 'cycleTime',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'OPERATOR NAME',
      field: 'operator_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'FAIL REASON',
      field: 'fail_reason',
      sortable: true,
      filter: true,
      resizable: true,
    },
  ];
  m13columnDefs: ColDef[] = [
    {
      headerName: 'DATE',
      field: 'date',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'TIME',
      field: 'time',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'COMPONENT BARCODE',
      field: 'component_barcode',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MACHINE NAME',
      field: 'machine_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'SHIFT',
      field: 'shift',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'PRODUCTION STATUS',
      field: 'production_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MIN OCV ID GAUGE VALUE (MM)',
      field: 'min_ocv_id_gauge_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MAX OCV ID GAUGE VALUE (MM)',
      field: 'max_ocv_id_gauge_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ACTUAL OCV ID GAUGE VALUE (MM)',
      field: 'actual_ocv_id_gauge_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MIN BAP ID GAUGE VALUE (MM)',
      field: 'min_bap_id_gauge_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MAX BAP ID GAUGE VALUE (MM)',
      field: 'max_bap_id_gauge_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ACTUAL BAP ID GAUGE VALUE (MM)',
      field: 'actual_bap_id_gauge_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ID GAUGE STATUS',
      field: 'id_gauge_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'OCV / BAP ASSEMBLY STATUS',
      field: 'ocv_and_bap_asmbly_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'SPRING ASSEMBLY STATUS',
      field: 'spring_asmbly_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'RETAINER ASSEMBLY STATUS',
      field: 'retainer_asmbly_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'CIRCLIP ASSEMBLY STATUS',
      field: 'circlip_asmbly_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'CYCLE TIME',
      field: 'cycleTime',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'OPERATOR NAME',
      field: 'operator_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'FAIL REASON',
      field: 'fail_reason',
      sortable: true,
      filter: true,
      resizable: true,
    },
  ];
  m10columnDefs: ColDef[] = [
    {
      headerName: 'DATE',
      field: 'date',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'TIME',
      field: 'time',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'COMPONENT BARCODE',
      field: 'component_barcode',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MACHINE NAME',
      field: 'machine_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'SHIFT',
      field: 'shift',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'PRODUCTION STATUS',
      field: 'production_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MIN PIN PRESS LOAD VALUE (KG)',
      field: 'min_pin_press_load_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MAX PIN PRESS LOAD VALUE (KG)',
      field: 'max_pin_press_load_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ACTUAL PIN PRESS LOAD VALUE (KG)',
      field: 'actual_pin_press_load_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MIN PIN DISPLACEMENT VALUE (MM)',
      field: 'min_pin_displacement_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MAX PIN DISPLACEMENT VALUE (MM)',
      field: 'max_pin_displacement_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ACTUAL PIN  DISPLACEMENT VALUE (MM)',
      field: 'actual_pin_displacement_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'PIN PRESS STATUS',
      field: 'pin_press_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'CYCLE TIME',
      field: 'cycleTime',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'OPERATOR NAME',
      field: 'operator_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'FAIL REASON',
      field: 'fail_reason',
      sortable: true,
      filter: true,
      resizable: true,
    },
  ];
  m14columnDefs: ColDef[] = [
    {
      headerName: 'DATE',
      field: 'date',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'TIME',
      field: 'time',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'COMPONENT BARCODE',
      field: 'component_barcode',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MACHINE NAME',
      field: 'machine_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'SHIFT',
      field: 'shift',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'PRODUCTION STATUS',
      field: 'production_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MIN PIN PRESS LOAD VALUE (KG)',
      field: 'min_pin_press_load_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MAX PIN PRESS LOAD VALUE (KG)',
      field: 'max_pin_press_load_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ACTUAL PIN PRESS LOAD VALUE (KG)',
      field: 'actual_pin_press_load_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MIN PIN DISPLACEMENT VALUE (MM)',
      field: 'min_pin_displacement_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MAX PIN DISPLACEMENT VALUE (MM)',
      field: 'max_pin_displacement_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ACTUAL PIN  DISPLACEMENT VALUE (MM)',
      field: 'actual_pin_displacement_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'PIN PRESS STATUS',
      field: 'pin_press_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'CYCLE TIME',
      field: 'cycleTime',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'OPERATOR NAME',
      field: 'operator_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'FAIL REASON',
      field: 'fail_reason',
      sortable: true,
      filter: true,
      resizable: true,
    },
  ];
  m11columnDefs: ColDef[] = [
    {
      headerName: 'DATE',
      field: 'date',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'TIME',
      field: 'time',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'SFL SERIAL NUMBER',
      field: 'sfl_serial_number',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'COMPONENT BARCODE',
      field: 'component_barcode',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MACHINE NAME',
      field: 'machine_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'SHIFT',
      field: 'shift',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'PRODUCTION STATUS',
      field: 'production_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MIN LOAD VALUE(KG)',
      field: 'min_load_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MAX LOAD VALUE (KG)',
      field: 'max_load_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ACTUAL LOAD VALUE (KG)',
      field: 'actual_load_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'FUNCTIONAL TEST STATUS',
      field: 'functional_test_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'CYCLE TIME',
      field: 'cycleTime',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'OPERATOR NAME',
      field: 'operator_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'FAIL REASON',
      field: 'fail_reason',
      sortable: true,
      filter: true,
      resizable: true,
    },
  ];
  m12columnDefs: ColDef[] = [
    {
      headerName: 'DATE',
      field: 'date',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'TIME',
      field: 'time',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'SFL SERIAL NUMBER',
      field: 'sfl_serial_number',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'COMPONENT BARCODE',
      field: 'component_barcode',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MACHINE NAME',
      field: 'machine_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'SHIFT',
      field: 'shift',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'PRODUCTION STATUS',
      field: 'production_status',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MIN LOAD VALUE(KG)',
      field: 'min_load_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'MAX LOAD VALUE (KG)',
      field: 'max_load_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'ACTUAL LOAD VALUE (KG)',
      field: 'actual_load_value',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'FUNCTIONAL TEST STATUS A',
      field: 'functional_test_status_a',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'CYCLE TIME',
      field: 'cycleTime',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'OPERATOR NAME',
      field: 'operator_name',
      sortable: true,
      filter: true,
      resizable: true,
    },
    {
      headerName: 'FAIL REASON',
      field: 'fail_reason',
      sortable: true,
      filter: true,
      resizable: true,
    },
  ];

  rowData!: Observable<any[]>;
  form!: FormGroup;
  partId: any;
  private gridApi: any;
  formatpipe: any;
  myDate: any;
  pastDate: any;
  pastSevenDate: any;
  pastMonthDate: any;
  pastThreeMonthDate: any;
  csvFlag: boolean = false;
  private refreshInterval!: number;
  private timeoutId: any;
  machineUpdatedData: any;
  machine1UpdatedResults: any;

  m1parameters = {
    fileName: 'm1report' + new Date().getTime() + '.csv',
  };
  m2parameters = {
    fileName: 'm2eport' + new Date().getTime() + '.csv',
  };
  m3parameters = {
    fileName: 'm3report' + new Date().getTime() + '.csv',
  };
  m4parameters = {
    fileName: 'm4report' + new Date().getTime() + '.csv',
  };
  m5parameters = {
    fileName: 'm5report' + new Date().getTime() + '.csv',
  };
  m6parameters = {
    fileName: 'm6report' + new Date().getTime() + '.csv',
  };
  m7parameters = {
    fileName: 'm7report' + new Date().getTime() + '.csv',
  };
  m8parameters = {
    fileName: 'm8report' + new Date().getTime() + '.csv',
  };
  m9parameters = {
    fileName: 'm9report' + new Date().getTime() + '.csv',
  };
  m13parameters = {
    fileName: 'm13report' + new Date().getTime() + '.csv',
  };
  m10parameters = {
    fileName: 'm10report' + new Date().getTime() + '.csv',
  };
  m14parameters = {
    fileName: 'm14report' + new Date().getTime() + '.csv',
  };
  m11parameters = {
    fileName: 'm11report' + new Date().getTime() + '.csv',
  };
  m12parameters = {
    fileName: 'm12report' + new Date().getTime() + '.csv',
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private logDataService: LogDataService,
    public dialog: MatDialog
  ) {}

  selectvalue(event: Event) {
    this.selectedval = (event.target as HTMLSelectElement).value;
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

  getFilteredData(fromDate: string, toDate: string) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    if (this.fromOilHoleCheckingComponent) {
      this.rowData = this.logDataService.getMachine1FilteredData(
        fromDate,
        toDate
      );
      forkJoin([this.logDataService.getMachine1UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
        }
      );
    }
    if (this.fromBallPressingComponent) {
      this.rowData = this.logDataService.getMachine2FilteredData(
        fromDate,
        toDate
      );
      forkJoin([this.logDataService.getMachine2UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
        }
      );
    }
    if (this.fromSocketPressingComponent) {
      this.rowData = this.logDataService.getMachine3FilteredData(
        fromDate,
        toDate
      );
      forkJoin([this.logDataService.getMachine3UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
        }
      );
    }
    if (this.fromScrewAndNutAssemblyComponent) {
      this.rowData = this.logDataService.getMachine4FilteredData(
        fromDate,
        toDate
      );
      forkJoin([this.logDataService.getMachine4UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
        }
      );
    }
    if (this.fromPipePluAssemblyComponent) {
      this.rowData = this.logDataService.getMachine5FilteredData(
        fromDate,
        toDate
      );
      forkJoin([this.logDataService.getMachine5UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
        }
      );
    }
    if (this.fromInsertValveAssemblyComponent) {
      this.rowData = this.logDataService.getMachine6FilteredData(
        fromDate,
        toDate
      );
      forkJoin([this.logDataService.getMachine6UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
        }
      );
    }
    if (this.fromBallOverHeightMeasureComponent) {
      this.rowData = this.logDataService.getMachine7FilteredData(
        fromDate,
        toDate
      );
      forkJoin([this.logDataService.getMachine7UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
        }
      );
    }
    if (this.fromThreadedPlugAssemblyComponent) {
      this.rowData = this.logDataService.getMachine8FilteredData(
        fromDate,
        toDate
      );
      forkJoin([this.logDataService.getMachine8UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
        }
      );
    }
    if (this.fromOcvPlungerAssemblyComponent) {
      this.rowData = this.logDataService.getMachine9FilteredData(
        fromDate,
        toDate
      );
      forkJoin([this.logDataService.getMachine9UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
        }
      );
    }
    if (this.fromOcvPlungerAssemblyAComponent) {
      this.rowData = this.logDataService.getMachine13FilteredData(
        fromDate,
        toDate
      );
      forkJoin([this.logDataService.getMachine13UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
        }
      );
    }
    if (this.fromMasterPistonAssemblyComponent) {
      this.rowData = this.logDataService.getMachine10FilteredData(
        fromDate,
        toDate
      );
      forkJoin([this.logDataService.getMachine10UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
        }
      );
    }
    if (this.fromMasterPistonAssemblyAComponent) {
      this.rowData = this.logDataService.getMachine14FilteredData(
        fromDate,
        toDate
      );
      forkJoin([this.logDataService.getMachine14UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
        }
      );
    }
    if (this.fromFunctionalTestRigComponent) {
      this.rowData = this.logDataService.getMachine11FilteredData(
        fromDate,
        toDate
      );
      forkJoin([this.logDataService.getMachine11UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
        }
      );
    }
    if (this.fromFunctionalTestRigAComponent) {
      this.rowData = this.logDataService.getmachine19FilteredData(
        fromDate,
        toDate
      );
      forkJoin([this.logDataService.getmachine19UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
        }
      );
    }
  }

  autoRefresh() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.refreshLogData();
  }

  onRowClicked(event: any) {
    console.log('row - ', event.data);
    const dialogRef = this.dialog.open(DataViewerComponent, {
      width: '50%',
      data: event.data,
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
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

  ngOnInit(): void {
    this.form = this.fb.group({
      daterange: new FormGroup({
        start: new FormControl(),
        end: new FormControl(),
      }),
    });
    this.partId = new FormControl('');

    this.refreshInterval = 2000;
    this.refreshLogData();
    if (this.machineUpdatedData) {
      this.partId.setValue(this.machineUpdatedData.productId);
    }
  }

  downloadPartReport() {
    let prodId = '' + this.partId.value;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    if (this.fromOilHoleCheckingComponent) {
      this.rowData = this.logDataService.getMachine1DataUsingProductId(prodId);
    }
    if (this.fromBallPressingComponent) {
      this.rowData = this.logDataService.getMachine2DataUsingProductId(prodId);
    }
    if (this.fromSocketPressingComponent) {
      this.rowData = this.logDataService.getMachine3DataUsingProductId(prodId);
    }
    if (this.fromScrewAndNutAssemblyComponent) {
      this.rowData = this.logDataService.getMachine4DataUsingProductId(prodId);
    }
    if (this.fromPipePluAssemblyComponent) {
      this.rowData = this.logDataService.getMachine5DataUsingProductId(prodId);
    }
    if (this.fromInsertValveAssemblyComponent) {
      this.rowData = this.logDataService.getMachine6DataUsingProductId(prodId);
    }
    if (this.fromBallOverHeightMeasureComponent) {
      this.rowData = this.logDataService.getMachine7DataUsingProductId(prodId);
    }
    if (this.fromThreadedPlugAssemblyComponent) {
      this.rowData = this.logDataService.getMachine8DataUsingProductId(prodId);
    }
    if (this.fromOcvPlungerAssemblyComponent) {
      this.rowData = this.logDataService.getMachine9DataUsingProductId(prodId);
    }
    if (this.fromOcvPlungerAssemblyAComponent) {
      this.rowData = this.logDataService.getMachine13DataUsingProductId(prodId);
    }
    if (this.fromMasterPistonAssemblyComponent) {
      this.rowData = this.logDataService.getMachine10DataUsingProductId(prodId);
    }
    if (this.fromMasterPistonAssemblyAComponent) {
      this.rowData = this.logDataService.getMachine14DataUsingProductId(prodId);
    }
    if (this.fromFunctionalTestRigComponent) {
      this.rowData = this.logDataService.getMachine11DataUsingProductId(prodId);
    }
    if (this.fromFunctionalTestRigAComponent) {
      this.rowData = this.logDataService.getmachine19DataUsingProductId(prodId);
    }
  }

  private refreshLogData(): void {
    if (this.fromOilHoleCheckingComponent) {
      this.rowData = this.logDataService.getMachine1UpdatedResults();
      forkJoin([this.logDataService.getMachine1UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
          this.timeoutId = setTimeout(
            () => this.refreshLogData(),
            this.refreshInterval
          );
        }
      );
    }
    if (this.fromBallPressingComponent) {
      this.rowData = this.logDataService.getMachine2UpdatedResults();
      forkJoin([this.logDataService.getMachine2UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
          this.timeoutId = setTimeout(
            () => this.refreshLogData(),
            this.refreshInterval
          );
        }
      );
    }
    if (this.fromSocketPressingComponent) {
      this.rowData = this.logDataService.getMachine3UpdatedResults();
      forkJoin([this.logDataService.getMachine3UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
          this.timeoutId = setTimeout(
            () => this.refreshLogData(),
            this.refreshInterval
          );
        }
      );
    }
    if (this.fromScrewAndNutAssemblyComponent) {
      this.rowData = this.logDataService.getMachine4UpdatedResults();
      forkJoin([this.logDataService.getMachine4UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
          this.timeoutId = setTimeout(
            () => this.refreshLogData(),
            this.refreshInterval
          );
        }
      );
    }
    if (this.fromPipePluAssemblyComponent) {
      this.rowData = this.logDataService.getMachine5UpdatedResults();
      forkJoin([this.logDataService.getMachine5UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
          this.timeoutId = setTimeout(
            () => this.refreshLogData(),
            this.refreshInterval
          );
        }
      );
    }
    if (this.fromInsertValveAssemblyComponent) {
      this.rowData = this.logDataService.getMachine6UpdatedResults();
      forkJoin([this.logDataService.getMachine6UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
          this.timeoutId = setTimeout(
            () => this.refreshLogData(),
            this.refreshInterval
          );
        }
      );
    }
    if (this.fromBallOverHeightMeasureComponent) {
      this.rowData = this.logDataService.getMachine7UpdatedResults();
      forkJoin([this.logDataService.getMachine7UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
          this.timeoutId = setTimeout(
            () => this.refreshLogData(),
            this.refreshInterval
          );
        }
      );
    }
    if (this.fromThreadedPlugAssemblyComponent) {
      this.rowData = this.logDataService.getMachine8UpdatedResults();
      forkJoin([this.logDataService.getMachine8UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
          this.timeoutId = setTimeout(
            () => this.refreshLogData(),
            this.refreshInterval
          );
        }
      );
    }
    if (this.fromOcvPlungerAssemblyComponent) {
      this.rowData = this.logDataService.getMachine9UpdatedResults();
      forkJoin([this.logDataService.getMachine9UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
          this.timeoutId = setTimeout(
            () => this.refreshLogData(),
            this.refreshInterval
          );
        }
      );
    }
    if (this.fromOcvPlungerAssemblyAComponent) {
      this.rowData = this.logDataService.getMachine13UpdatedResults();
      forkJoin([this.logDataService.getMachine13UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
          this.timeoutId = setTimeout(
            () => this.refreshLogData(),
            this.refreshInterval
          );
        }
      );
    }
    if (this.fromMasterPistonAssemblyComponent) {
      this.rowData = this.logDataService.getMachine10UpdatedResults();
      forkJoin([this.logDataService.getMachine10UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
          this.timeoutId = setTimeout(
            () => this.refreshLogData(),
            this.refreshInterval
          );
        }
      );
    }
    if (this.fromMasterPistonAssemblyAComponent) {
      this.rowData = this.logDataService.getMachine14UpdatedResults();
      forkJoin([this.logDataService.getMachine14UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
          this.timeoutId = setTimeout(
            () => this.refreshLogData(),
            this.refreshInterval
          );
        }
      );
    }
    if (this.fromFunctionalTestRigComponent) {
      this.rowData = this.logDataService.getMachine11UpdatedResults();
      forkJoin([this.logDataService.getMachine11UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
          this.timeoutId = setTimeout(
            () => this.refreshLogData(),
            this.refreshInterval
          );
        }
      );
    }
    if (this.fromFunctionalTestRigAComponent) {
      this.rowData = this.logDataService.getmachine19UpdatedResults();
      forkJoin([this.logDataService.getmachine19UpdatedData()]).subscribe(
        (results) => {
          this.machineUpdatedData = results[0];
          this.timeoutId = setTimeout(
            () => this.refreshLogData(),
            this.refreshInterval
          );
        }
      );
    }
  }

  public ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
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
  }

  onGridReady(params: { api: any }) {
    this.gridApi = params.api;
  }

  export_part_report_excel(): void {
    if (this.fromOilHoleCheckingComponent) {
      if (this.rowData) {
        this.gridApi.exportDataAsCsv(this.m1parameters);
      }
    }
    if (this.fromBallPressingComponent) {
      if (this.rowData) {
        this.gridApi.exportDataAsCsv(this.m2parameters);
      }
    }
    if (this.fromSocketPressingComponent) {
      if (this.rowData) {
        this.gridApi.exportDataAsCsv(this.m3parameters);
      }
    }
    if (this.fromScrewAndNutAssemblyComponent) {
      if (this.rowData) {
        this.gridApi.exportDataAsCsv(this.m4parameters);
      }
    }
    if (this.fromPipePluAssemblyComponent) {
      if (this.rowData) {
        this.gridApi.exportDataAsCsv(this.m5parameters);
      }
    }
    if (this.fromInsertValveAssemblyComponent) {
      if (this.rowData) {
        this.gridApi.exportDataAsCsv(this.m6parameters);
      }
    }
    if (this.fromBallOverHeightMeasureComponent) {
      if (this.rowData) {
        this.gridApi.exportDataAsCsv(this.m7parameters);
      }
    }
    if (this.fromThreadedPlugAssemblyComponent) {
      if (this.rowData) {
        this.gridApi.exportDataAsCsv(this.m8parameters);
      }
    }
    if (this.fromOcvPlungerAssemblyComponent) {
      if (this.rowData) {
        this.gridApi.exportDataAsCsv(this.m9parameters);
      }
    }
    if (this.fromOcvPlungerAssemblyAComponent) {
      if (this.rowData) {
        this.gridApi.exportDataAsCsv(this.m13parameters);
      }
    }
    if (this.fromMasterPistonAssemblyComponent) {
      if (this.rowData) {
        this.gridApi.exportDataAsCsv(this.m10parameters);
      }
    }
    if (this.fromMasterPistonAssemblyAComponent) {
      if (this.rowData) {
        this.gridApi.exportDataAsCsv(this.m14parameters);
      }
    }
    if (this.fromFunctionalTestRigComponent) {
      if (this.rowData) {
        this.gridApi.exportDataAsCsv(this.m11parameters);
      }
    }
    if (this.fromFunctionalTestRigAComponent) {
      if (this.rowData) {
        this.gridApi.exportDataAsCsv(this.m12parameters);
      }
    }
  }

  backtomainpage() {
    this.router.navigate(['/dataLogging']);
  }
}
