import * as fromUi from '../actions';

// Estado relacionado al login
export interface UiState {
  mensaje: any;
  error: any;
}

const estadoInicial: UiState = {
  mensaje: null,
  error: null
};

export function uiReducer(state = estadoInicial, action: fromUi.uiAcciones): UiState {
    switch (action.type) {
        case fromUi.UI_MESSAGE_SUCCESS:
            return {
                ...state,
                mensaje: action.payload.mensaje
            };
            break;
        case fromUi.UI_MESSAGE_SUCCESS_END:
            return {
                ...state,
                mensaje: null
            };
            break;
        case fromUi.UI_MESSAGE_ERROR:
            return {
                ...state,
                error: {
                    mensaje: action.payload.error
                }
            };
            break;
        case fromUi.UI_MESSAGE_ERROR_END:
            return {
                ...state,
                error: null
            };
            break;
        default:
            return state;
            break;
    }
}
