import {aviasalesApi} from "../../api/api";


const GET_TICKETS = "GET_TICKETS";
const TICKETS_FILTER_1 = "TICKETS_FILTER_1";

const initialState = {
    tickets: [],
}
const a = (tickets, n) =>{
    const items = tickets.filter(item=>{
        return item.segments.find(item2 =>{
            if(item2.stops.length === n){
                return item
            }
        })
    })
    return items
}

export const getTicketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TICKETS: {
            return {
                ...state,
                tickets: [...action.data],
            }
        }
        case TICKETS_FILTER_1: {
            return {
                ...state,
                tickets: [...a(state.tickets,Number(action.data))]
            }
        }
        default:
            return state
    }
}

const getTicketsAction = (data) => ({
    type: GET_TICKETS,
    data
});

const ticket1 = (data) => ({
    type: TICKETS_FILTER_1,
    data
});

export const getTicketsThunk = (key) => {
    return async (dispatch) => {
        const res = await aviasalesApi.getTickets(key);
        dispatch(getTicketsAction(res))
    }
}

export const getTicketsFilter1 = (n) => {
    return async (dispatch) => {
        dispatch(ticket1(n))
    }
}