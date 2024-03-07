import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 Service for handling spinner related functionality.
 @remarks
 This service is used to show/hide a spinner while waiting for asynchronous
 requests to complete. It keeps track of the number of requests in progress
 and uses a BehaviorSubject to emit the current state of the spinner.
 */
@Injectable({
    providedIn: 'root'
})
export class SpinnerHandlerService {
    /**
     The number of requests currently in progress.
     */
    numberOfRequests: number = 0;
    /**
     A BehaviorSubject that emits the current state of the spinner.
     */
    showSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    /**
     Handles an incoming request by incrementing or decrementing the
     number of requests in progress and updating the spinner state.
     @param {string} state - A string indicating whether the request is being added
     ('plus') or removed ('minus') from the list of in-progress requests.
     */
    handleRequest = (state: string = 'minus'): void => {
        this.numberOfRequests = (state === 'plus') ? this.numberOfRequests + 1 : this.numberOfRequests - 1;
        this.showSpinner.next(this.numberOfRequests > 0);
    };

}
