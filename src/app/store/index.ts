import { ActionReducerMap } from '@ngrx/store';
import * as userState from './reducers/user.reducer';

export interface State {
    user: userState.UserState;
}

export const reducers: ActionReducerMap<State> = {
    user: userState.reducer,
}