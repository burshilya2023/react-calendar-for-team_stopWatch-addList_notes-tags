import axios, {AxiosResponse} from "axios";
import { IEvent } from "./store/SliceAll/EventSlice/types";

import { IUser } from "./store/SliceAll/userSlice";

//1 method for getting data (in this case, we will get data from a file)
export default class UserService {
    //static- in order for us to call it without creating an instance of the class
    static async getUsers(): Promise<AxiosResponse<IUser[]>> {
        return axios.get<IUser[]>('./users.json') || []
    }
    //!fetchEvents(get)
    static   getEventFromStorage=  ():IEvent[]=>{
        const events = localStorage.getItem("events") || '[]'
        const json: IEvent[] = JSON.parse(events);
        return json
     }
 
}



