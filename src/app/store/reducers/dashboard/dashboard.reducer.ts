import * as fromDashboard from '../../actions';

export interface DashboardState {
  info: any;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const estadoInicial: DashboardState = {
  info: null,
  loaded: false,
  loading: false,
  error: null,
};


export function dashboardReducer(state = estadoInicial, action: fromDashboard.dashboardAcciones): DashboardState {


    switch (action.type) {
        case fromDashboard.LOAD_INFO:
            return {
                ...state,
                loading: true,
                loaded: false
            };
            break;
        case fromDashboard.LOAD_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                info: action.payload
            };
            break;
        case fromDashboard.LOAD_INFO_FAIL:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: action.payload,
                info: null
            };
            break;
        default:
            return state;
            break;
    }

}
