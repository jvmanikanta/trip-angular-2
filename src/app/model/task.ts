import { Maintenence } from "./maintenence";
import { Priority } from "./priority.enum";
import { Status } from "./status.enum";
import { Technicians } from "./technicians";
import { Trip } from "./trip";

export class Task {
    constructor(
        public taskId: number,
        public taskName: string,
        public taskOwner: string,
        public taskStartDate: Date,
        public taskEndDate: Date,
        public taskPriority: Priority,
        public taskDuration: string,
        public taskStatus: Status,
        public techniciansList: Set<Technicians>,
        public maintenence: Maintenence,
        public trip: Trip
    ){}
}
