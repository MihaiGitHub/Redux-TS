import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

// ReturnType is a built in helper inside of typescript
// Takes in reducers function and gives back the type of whatever the function returns and assign it to RootState
export type RootState = ReturnType<typeof reducers>;
