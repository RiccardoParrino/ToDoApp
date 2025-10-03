export class ActivityModel {
    name:string;
    date:string;
    description:string;
    city:string;

    constructor(name:string, date:string, description:string, city:string) {
        this.name = name;
        this.date = date;
        this.description = description;
        this.city = city;
    }
} 