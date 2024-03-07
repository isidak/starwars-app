import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerHandlerService } from "../services/spinner/spinner-handler.service";

/**
 An HTTP interceptor that shows a spinner while an HTTP request is in progress.
 */
@Injectable()
export class SpinnerInterceptorService implements HttpInterceptor {

    constructor(
        public spinnerHandler: SpinnerHandlerService
    ) {
    }

    /**
     Intercepts an HTTP request and shows a spinner while it is in progress.
     @param {HttpRequest<unknown>} request - The HTTP request to intercept.
     @param {HttpHandler} next - The next HTTP handler in the request chain.
     @returns {Observable<HttpEvent<unknown>>} An observable that emits an HTTP event when the request is complete.
     */
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        this.spinnerHandler.handleRequest('plus');

        return next
            .handle(request)
            .pipe(
                finalize(() => this.spinnerHandler.handleRequest())
            );
    }

}
