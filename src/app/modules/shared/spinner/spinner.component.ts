import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpinnerHandlerService } from "../../../services/spinner/spinner-handler.service";
import { Subscription } from "rxjs";

/**
 A spinner component that shows or hides a spinner based on the current state.
 @class
 */
@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit, OnDestroy {

    spinnerActive: boolean = true;
    private subscriptions = new Subscription();

    constructor(
        private spinnerHandler: SpinnerHandlerService
    ) {
    }

    /**
     Initializes the component and subscribes to the spinner service.
     @method
     */
    ngOnInit() {
        const spinnerSubscription = this.spinnerHandler.showSpinner.subscribe(this.showSpinner.bind(this));
        this.subscriptions.add(spinnerSubscription)
    }

    /**
     Updates the spinner state based on the specified state.
     @method
     @param {boolean} state - The new state of the spinner.
     */
    showSpinner = (state: boolean): void => {
        this.spinnerActive = state;
    };

    /**
     Unsubscribes from all subscriptions when the component is destroyed.
     @method
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe()
    }

}
