import { Priority } from "./priority.enum";
import { Status } from "./status.enum";
import { Task } from "./task";
import { Trip } from "./trip";

export class Maintenance {
    constructor(
        public maintenenceId: number,
        public maintenenceName: string,
        public maintenenceOwner: string,
        public maintenenceStartDate: Date,
        public maintenenceEndtDate: Date,
        public maintenencePriority: Priority,
        public maintenenceStatus: Status,
        public tasksList: Set<Task>,
        public trip: Trip
    ){}
}
