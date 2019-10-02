export class Album {
  [x: string]: any;
    
    ref: string;
    name: string;
    title: string;
    description: string;
    duration: number;
    status : string;
    url?: string;
    youtube?:string;
    like?: string;
    tags?: Array<string>
}

export class List {
    id : string;
    list: Array<string>;
}
