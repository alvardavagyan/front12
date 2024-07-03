import { ActionTypes, FilterTypes, IAction, IEvent, IState } from "./types";

export const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case ActionTypes.setEvents:
            return {
                ...state,
                events: action.payload as IEvent[]
            }
        case ActionTypes.setFilter:
            return {
                ...state,
                currentFilter: action.payload as FilterTypes
            }
        case ActionTypes.addEvent:
            return {
                ...state,
                events: [...state.events, action.payload as IEvent]
            }

        default:
            return state
    }
}


