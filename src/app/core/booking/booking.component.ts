import {Component, OnInit} from '@angular/core';



@Component({
    selector: 'app-booking',
    templateUrl: 'booking.component.html',
    styleUrls: ['booking.component.css']
})
export class BookingComponent implements OnInit{
    showCard: boolean = false;
    hideForm: boolean = true;

    constructor() {
    }

    ngOnInit() {
    }

    submitForm() {
        this.showCard = !this.showCard;
        this.hideForm = !this.hideForm;
    }

}
