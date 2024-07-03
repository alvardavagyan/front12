import axios from "axios";
import { FilterTypes, IEvent } from "./types";
const URL = "http://localhost:3004/events"

export const getAllEvents = async (type:FilterTypes=FilterTypes.all): Promise<IEvent[]> => {
    let temp=URL
    if(type!=FilterTypes.all){
      temp+="?type="+type  
    }
    const response = await axios.get(temp)
    return response.data

}
export const addEvent = async (eventData: IEvent): Promise<IEvent> => {
  const response = await axios.post(URL, eventData)
  return response.data
  }