import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from './eventConstants';
import {sampleData} from '../../app/api/sampleData';

const initialState = {
  events: sampleData
}

export default function eventReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, payload]
      }
    case UPDATE_EVENT:
      return {
        ...state,
        events: [...state.events.filter(event => event.id !== payload.id), payload]
      }
    case DELETE_EVENT:
      return {
        ...state,
        events: [...state.events.filter(event => event.id !== payload)]
      }
    default:
      return state;
  }
}