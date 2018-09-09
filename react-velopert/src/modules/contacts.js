import {createAction, handleActions} from "redux-actions";
import {Map, List} from "immutable";

const CREATE = "contact/CREATE";
const MODIFY = "contact/MODIFY";
const REMOVE = "contact/REMOVE";
const TOGGLE_FAVORITE = "contact/TOGGLE_FAVORITE";

export const create = createAction(CREATE);
export const modify = createAction(MODIFY);
export const remove = createAction(REMOVE);
export const toggleFavorite = createAction(TOGGLE_FAVORITE);

const initialState = List({
  Map({
    "id": "pkch93",
    "name": "박경철",
    "phone": "010-0000-0000",
    "color": "#40c057",
    "favorite": true
  }),
  Map({
    "id": "pkh9577",
    "name": "박경호",
    "phone": "010-0000-0001",
    "color": "#fd7e14",
    "favorite": false
  }),
})
export default handleActions({
  [CREATE]: (state, action) => state.push(Map(action.payload)),
  [MODIFY]: (state, action) => {
    const index = state.findIndex(contact => contact.get("id") === action.payload.id);
    return state.mergeIn([index], action.payload.contact);
  },
  [REMOVE]: (state, action) => {
    const index = state.findIndex(contact => contact.get("id") === action.payload);
    return state.delete(index);
  },
  [TOGGLE_FAVORITE]: (state, action) => {
    const index = state.findIndex(contact => contact.get("id") === action.payload);
    return state.update(index, contact => contact.set("favorite", !contact.get("favorite")));
  }
}, initialState)
