import { combineReducers,legacy_createStore as createStore } from "redux";
import messageReducer from "./MessageReducer";
import personsReduser from "./PersonsReduser";
import postReducer from "./PostReducer";

let reducers = combineReducers({
    BazaPersons:personsReduser,
    BazaMessages:messageReducer,
    BazaPosts:postReducer
})

let store = createStore(reducers)

export default store