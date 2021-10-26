import { MaintenanceComponent } from "../maintenance/maintenance/maintenance.component";
import { Maintenance } from "./maintenance";
import { Priority } from "./priority.enum";
import { Status } from "./status.enum";

export class Trip {
    constructor(
        public tirpId:number,
        public tripName: string,
        public tripOwner: string,
        public tripStartDate: Date,
        public tripEndDate: Date,
        public tripPriority: Priority,
        public tripStatus: Status,
        public maintenance: Maintenance
    ){}
}
