
  export interface Landmark {
    className:string;
    id:string;
    attributes:Attribute;
    createdAt:Date;
    updatedAt:Date;
    _objCount:number;
  }

  export interface Attribute {
    title:string;
    description:string;
    short_info:string;
    url:string;
    location:Location;
    createdAt:Date;
    updatedAt:Date;
}

export interface Location {
   _latitude:number;
   _longitude:number;
   latitude:number;
   longitude:number;
}