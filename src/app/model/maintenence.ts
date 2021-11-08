import { Priority } from "./priority.enum";
import { Status } from "./status.enum";
import { Task } from "./task";
import { Trip } from "./trip";

export class Maintenence {
    constructor(
        public maintenenceId : number,
        public maintenenceName: string,
        public maintenenceOwner: string,
        public maintenenceStartDate: Date,
        public maintenenceEndDate: Date,
        public maintenencePriority: Priority,
        public maintenenceStatus: Status,
        public taskList: Set<Task>,
        public trip: Trip,
        public maintenanceImg: string
    ){}
}
