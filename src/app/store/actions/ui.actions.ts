import { Action } from '@ngrx/store';
import { Mensaje } from '../../models/mensaje';

export const UI_MESSAGE_SUCCESS = '[Ui] Message success';
export const UI_MESSAGE_SUCCESS_END = '[Ui] Message success END';
export const UI_MESSAGE_ERROR = '[Ui] Message error';
export const UI_MESSAGE_ERROR_END = '[Ui] Message error END';

export class UiMessageSuccess implements Action {
    readonly type = UI_MESSAGE_SUCCESS;
    constructor(public payload: Mensaje) {}
}

export class UiMessageSuccessEnd implements Action {
    readonly type = UI_MESSAGE_SUCCESS_END;
    constructor() {}
}

export class UiMessageError  implements Action {
    readonly type = UI_MESSAGE_ERROR;
    constructor(public payload: Mensaje) {}
}

export class UiMessageErrorEnd implements Action {
    readonly type = UI_MESSAGE_ERROR_END;
    constructor() {}
}

export type uiAcciones = UiMessageSuccess  |
                        UiMessageSuccessEnd |
                        UiMessageError |
                        UiMessageErrorEnd;

