import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Action, applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk, ThunkAction, ThunkDispatch } from "redux-thunk";

const rootReducer = combineReducers({});

// добавила сразу middleware, чтобы в будущем диспатчить не только actions, но и thunk-и
export const store = createStore(rootReducer, applyMiddleware(thunk));

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppDispatch = ThunkDispatch<TRootState, unknown, Action>;

// типизация хуков, чтобы не типизировать каждый раз при использовании
export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

// типизация для thunks
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, TRootState, unknown, Action>;
