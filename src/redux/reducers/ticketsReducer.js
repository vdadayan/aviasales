import {aviasalesApi} from "../../api/api";


const GET_TICKETS = "GET_TICKETS";

const initialState = {
    tickets: [],
}

export const getTicketsReducer = (state = initialState , action) => {
    switch (action.type) {
        case GET_TICKETS: {
            return {
                ...state,
                tickets: [...action.data],
            }
        }
        default: return state
    }
}

const getTicketsAction = (data) => ({
    type: GET_TICKETS,
    data
});

export const getTicketsThunk = (key) => {
    return async (dispatch) => {
       const res = await aviasalesApi.getTickets(key);
       dispatch(getTicketsAction(res))
    }
}