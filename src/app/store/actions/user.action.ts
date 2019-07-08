import { Action } from '@ngrx/store';



export enum UserActionTypes {
    ADD_USERNAME = '[UserState] Add UserName',
    REMOVE_USERNAME = '[UserState] Remove UserName',
}
export type UserActionsUnion = AddUserName
| RemoveUserName

export class AddUserName implements Action {
    readonly type: UserActionTypes = UserActionTypes.ADD_USERNAME;
    constructor(public userName: string){
    }
}
export class RemoveUserName implements Action {
    readonly type: UserActionTypes = UserActionTypes.REMOVE_USERNAME;
    constructor(public userName: string){
    }
}