// To parse this data:
//
//   import { Convert, RespAPIUsers } from "./file";
//
//   const respAPIUsers = Convert.toRespAPIUsers(json);

export interface RespAPIUsers {
  error: boolean;
  data:  Datum[];
}

export interface Datum {
  id:         number;
  name:       Name;
  last_name:  LastName;
  email:      Email;
  phone:      string;
  country_id: number;
  status:     number;
  created_at: Date;
}

export enum Email {
  ArturoExampleCOM = "arturo@example.com",
  CristianExampleCOM = "cristian@example.com",
  PruebaExampleCOM = "prueba@example.com",
}

export enum LastName {
  Contreras = "Contreras",
  Vasquez = "Vasquez",
}

export enum Name {
  Arturo = "Arturo",
  Cristian = "Cristian",
}

// Converts JSON strings to/from your types
export class Convert {
  public static toRespAPIUsers(json: string): RespAPIUsers {
      return JSON.parse(json);
  }

  public static respAPIUsersToJson(value: RespAPIUsers): string {
      return JSON.stringify(value);
  }
}
