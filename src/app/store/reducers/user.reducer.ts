import { UserActionsUnion } from '../actions/user.action'
import { createSelector } from '@ngrx/store';



export class UserState {
    userName?: string;

    constructor(data: any){
        Object.assign<UserState, any>(this, data);
    }
}

export const initialState: UserState = {
    userName: "Krunal Patel",
}

export function reducer(state = initialState, templateAction: UserActionsUnion): UserState {
    return state;
}

export const selectUserState = (state): UserState => state.user;
export const getUserName = createSelector(selectUserState, (state: UserState) => state.userName);