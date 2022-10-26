
export interface subMap {
    time: string;
    subject: string;
    room: string;
    day: string;
 }
 export interface schedule {
    id: number;
    semester: string;
    calander: subMap[];
 }