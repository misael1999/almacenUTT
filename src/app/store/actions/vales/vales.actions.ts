
import { Action } from '@ngrx/store';
import { ValeSalida } from 'src/app/models/ValeSalida';
import { ValeProducto } from 'src/app/models/ValeProducto';
export const LOAD_VALES_SALIDA_ACTIVOS = '[ValeSalida] Load vales salida activos';
export const LOAD_VALES_SALIDA_ACTIVOS_SUCCESS = '[ValeSalida] Load vales salida activos SUCCESS';
export const LOAD_VALES_SALIDA_ACTIVOS_FAIL = '[ValeSalida] Load vales salida activos FAIL';

export const LOAD_VALES_SALIDA_ENTREGADOS = '[ValeSalida] Load vales salida entregados';
export const LOAD_VALES_SALIDA_ENTREGADOS_SUCCESS = '[ValeSalida] Load vales salida entregados SUCCESS';
export const LOAD_VALES_SALIDA_ENTREGADOS_FAIL = '[ValeSalida] Load vales salida entregados FAIL';

export const LOAD_VALES_SALIDA_AREA = '[ValeSalida] Load vales salida area';
export const LOAD_VALES_SALIDA_AREA_SUCCESS = '[ValeSalida] Load vales salida area SUCCESS';
export const LOAD_VALES_SALIDA_AREA_FAIL = '[ValeSalida] Load vales salida area FAIL';

export const ADD_VALE_ITEM = '[ValeSalida] Add vale item';
export const REMOVE_VALE_ITEM = '[ValeSalida] Remove vale item';
export const SELECT_ALL_ITEM = '[ValeSalida] Select all item';
export const DESELECT_ALL_ITEM = '[ValeSalida] Deselect all item';
export const CLEAN_VALE_ITEM = '[ValeSalida] Clean vale item';


export const SEARCH_VALES = '[ValeSalida] Search vales';
export const SEARCH_VALES_SUCCESS = '[ValeSalida] Search vales SUCCESS';
export const SEARCH_VALES_FAIL = '[ValeSalida] Search vales FAIL';

export const LOAD_VALES_WITH_DOCUMENTS = '[ValeSalida] load Vales documents';
export const LOAD_VALES_WITH_DOCUMENTS_SUCCESS = '[ValeSalida] load Vales documents SUCCESS';
export const LOAD_VALES_WITH_DOCUMENTS_FAIL = '[ValeSalida] load Vales documents FAIL';



export class LoadValesSalidaActivos implements Action {
    readonly type = LOAD_VALES_SALIDA_ACTIVOS;
    constructor(public page: number, public ordenar: string) {}
}

export class LoadValesSalidaActivosSuccess implements Action {
    readonly type = LOAD_VALES_SALIDA_ACTIVOS_SUCCESS;
    constructor(public vales: ValeSalida[], public pageable: any) {}
}

export class LoadValesSalidaActivosFail implements Action {
    readonly type = LOAD_VALES_SALIDA_ACTIVOS_FAIL;
    constructor(public payLoad: any) {}
}

// ----  VALES DE SALIDAS AREA   ---- //

export class LoadValesSalidaArea implements Action {
    readonly type = LOAD_VALES_SALIDA_AREA;
    constructor(public idArea: number) {}
}

export class LoadValesSalidaAreaSuccess implements Action {
    readonly type = LOAD_VALES_SALIDA_AREA_SUCCESS;
    constructor(public vales: ValeSalida[]) {}
}

export class LoadValesSalidaAreaFail implements Action {
    readonly type = LOAD_VALES_SALIDA_AREA_FAIL;
    constructor(public payLoad: any) {}
}

export class AddValeItem implements Action {

    readonly type = ADD_VALE_ITEM;
    constructor(public valeProducto: ValeProducto) {}

}

export class RemoveValeItem implements Action {

    readonly type = REMOVE_VALE_ITEM;
    constructor(public idFacturaProducto: number) {}

}

export class SelectAllItem implements Action {

    readonly type = SELECT_ALL_ITEM;
    constructor() {}

}

export class DeselectAllItem implements Action {

    readonly type = DESELECT_ALL_ITEM;
    constructor() {}

}

export class CleanValesItems implements Action {

    readonly type = CLEAN_VALE_ITEM;
    constructor() {}

}

export class SearchVales implements Action {
    readonly type = SEARCH_VALES;
    constructor(public termino: string) {}
}

export class SearchValesSuccess implements Action {
    readonly type = SEARCH_VALES_SUCCESS;
    constructor(public vales: ValeSalida[]) {}
}

export class SearchValesFail implements Action {
    readonly type = SEARCH_VALES_FAIL;
    constructor(public payload: any) {}
}

// ----  VALES DE SALIDAS ENTREGADOS   ---- //

export class LoadValesSalidaEntregados implements Action {
    readonly type = LOAD_VALES_SALIDA_ENTREGADOS;
    constructor() {}
}

export class LoadValesSalidaEntregadosSuccess implements Action {
    readonly type = LOAD_VALES_SALIDA_ENTREGADOS_SUCCESS;
    constructor(public vales: ValeSalida[]) {}
}

export class LoadValesSalidaEntregadosFail implements Action {
    readonly type = LOAD_VALES_SALIDA_ENTREGADOS_FAIL;
    constructor(public payLoad: any) {}
}

// VALES CON DOCUMENTOS

export class LoadValeSalidaWithDocuments implements Action {
    readonly type = LOAD_VALES_WITH_DOCUMENTS;
    constructor(public page: number) {}
}

export class LoadValeSalidaWithDocumentsSuccess implements Action {
    readonly type = LOAD_VALES_WITH_DOCUMENTS_SUCCESS;
    constructor(public vales: ValeSalida[], public pageable: any) {}
}

export class LoadValeSalidaWithDocumentsFail implements Action {
    readonly type = LOAD_VALES_WITH_DOCUMENTS_FAIL;
    constructor(public payload: any) {}
}



export type valesActions = LoadValesSalidaActivos |
                            LoadValesSalidaActivosSuccess |
                            LoadValesSalidaActivosFail |
                            LoadValesSalidaEntregados |
                            LoadValesSalidaEntregadosSuccess |
                            LoadValesSalidaEntregadosFail |
                            LoadValesSalidaArea |
                            LoadValesSalidaAreaSuccess |
                            LoadValesSalidaAreaFail |
                            AddValeItem |
                            RemoveValeItem |
                            SelectAllItem |
                            DeselectAllItem |
                            CleanValesItems |
                            SearchVales |
                            SearchValesSuccess |
                            SearchValesFail |
                            LoadValeSalidaWithDocuments |
                            LoadValeSalidaWithDocumentsSuccess |
                            LoadValeSalidaWithDocumentsFail;
