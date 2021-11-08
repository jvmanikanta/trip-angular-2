import { MaintenanceComponent } from "../maintenance/maintenance/maintenance.component";
import {  Maintenence } from "./maintenence";
import { Priority } from "./priority.enum";
import { Status } from "./status.enum";

export class Trip {
    constructor(
        public tripId:number,
        public tripName: string,
        public tripOwner: string,
        public tripStartDate: Date,
        public tripEndDate: Date,
        public tripPriority: Priority,
        public tripStatus: Status,
        public maintenance: Maintenence
    ){}
}
