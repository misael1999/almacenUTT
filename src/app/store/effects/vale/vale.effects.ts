import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ValesalidaService } from 'src/app/services/service.index';
import * as valeActions from 'src/app/store/actions';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import swal from 'sweetalert2';


@Injectable()
export class ValeEffects {
    constructor(private actions$: Actions, private valeService: ValesalidaService) {}

    @Effect()
    crearVale$ = this.actions$.ofType(valeActions.CREATE_VALE_SALIDA)
                    .pipe(
                        mergeMap(action => {
                            const vale  = action['valeSalida'];
                            return this.valeService.agregarValeSalida(vale)
                                .pipe(
                                    map(data => new valeActions.CreateValeSalidaSuccess(data)),
                                    catchError( error => {
                                        console.log(error);
                                        return of(new valeActions.CreateValeSalidaFail(error));
                                    })
                                );
                        })
                    );

    @Effect()
    loadVale$ = this.actions$.ofType(valeActions.LOAD_VALE_SALIDA)
                        .pipe(
                            mergeMap(
                                action => {
                                    const idVale = action['idVale'];
                                    return this.valeService.getValeById(idVale)
                                        .pipe(
                                            map(data => new valeActions.LoadValeSalidaSuccess(data['vale'])),
                                            catchError( error => {
                                                console.log(error);
                                                return of(new valeActions.LoadValeSalidaFail(error));
                                            })
                                        );
                                }
                            )
                        );
    @Effect()
    UpdateVale$ = this.actions$.ofType(valeActions.UPDATE_VALE_SALIDA)
                        .pipe(
                            mergeMap(
                                action => {
                                    const vale = action['valeSalida'];
                                    return this.valeService.actualizarValeSalida(vale)
                                        .pipe(
                                            map(data => new valeActions.UpdateValeSalidaSuccess(data)),
                                            catchError( error => {
                                                console.log(error);
                                                return of(new valeActions.UpdateValeSalidaFail(error));
                                            })
                                        );
                                }
                            )
                        );

    @Effect()
    uploadArchivoFactura$ = this.actions$.ofType(valeActions.UPLOAD_ARCHIVO_VALE)
        .pipe(
            mergeMap(action => {
                return this.valeService.subirArchivo(action['archivo'], action['idVale'])
                    .pipe(
                        map(data => {
                            return new valeActions.UploadArchivoValeSuccess(data);
                        }),
                        catchError(error => {
                            return of(new valeActions.UploadArchivoValeFail(error));
                        })
                    );
            })
        );

    @Effect()
    downloadArchivoFactura$ = this.actions$.ofType(valeActions.DOWNLOAD_ARCHIVO_VALE)
        .pipe(
            mergeMap(action => {
                const archivo = action['nombreArchivo'];
                return this.valeService.downloadVale(archivo)
                    .pipe(
                        map(data => {
                            const res = new Blob([data], { type: data.type });
                            const fileURL = URL.createObjectURL(res);
                            window.open(fileURL);
                            return new valeActions.DownloadArchivoValeSuccess();
                        }),
                        catchError(error => {
                            // tslint:disable-next-line:max-line-length
                            swal('Ha ocurrido un error', 'Verifique que tenga los permisos necesarios, si el problema persiste comuniquese con el administrador', 'warning');

                            return of(new valeActions.DownloadArchivoValeFail({error: {mensaje: 'error'}}));
                        })
                    );
            })
        );
}
