import { Task } from "./task";

export class Technicians {
    constructor(
        public workersId:number,
        public workersName: string,
        public workersType: string,
        public workersAvailableFrom: Date,
        public workersAvailableTo: Date,
        public availability: string,
        public task: Task
    ){}
}
