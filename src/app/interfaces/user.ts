export interface User {
  id: number;
  email: string;
  first_name: string,
  last_name: string;
  role:number
  latitude:number
  longitude:number
}


/*
EXAMPLE
    {
        "id": 4,
        "email": "jai@student2.com",
        "first_name": "jai",
        "last_name": "S",
        "role": 1,
        "latitude": "79.54600",
        "longitude": "90.25400"
    }
*/
