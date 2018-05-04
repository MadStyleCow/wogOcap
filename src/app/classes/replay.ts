// Module internals
export class Replay {

    // Properties
    id:                     number;
    filename:               string;
    date:                   Date;
    duration:               number;
    mission:                string;
    type:                   string;
    world:                  string;

    // Constructor
    constructor(id: number, filename: string, date: Date, duration: number, mission: string, world: string, type?: string) {
        this.id = id;
        this.filename = filename;
        this.date = date;
        this.duration = duration;
        this.mission = mission;
        this.type = type ? type : '';
        this.world = world;
    }
}
