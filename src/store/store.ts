import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Action, applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk, ThunkAction, ThunkDispatch } from "redux-thunk";
import { tasksReducer } from "./reducers/tasks-reducer";

const rootReducer = combineReducers({
	tasks: tasksReducer,
});

export const store = createStore(rootReducer, undefined, applyMiddleware(thunk));

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppDispatch = ThunkDispatch<TRootState, unknown, Action>;

// типизация хуков, чтобы не типизировать каждый раз при использовании
export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

// типизация для thunks
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, TRootState, unknown, Action>;
