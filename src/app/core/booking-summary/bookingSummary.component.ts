import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';



@Component({
    selector: 'app-booking-summary',
    templateUrl: 'bookingSummary.component.html',
    styleUrls: ['bookingSummary.component.css']
})
export class BookingSummaryComponent implements OnInit{
    showCard: boolean = false;
    hideForm: boolean = true;
    cardsList: Array<any> = [
        {
            title: 'Titolo',
            description: 'Descrizione',
            departure: '19/10/2019',
            arrival: '19/10/2022',
            footer: 'footer',
            vip: true,
            img: ''
        },
        {
            title: 'Titolo',
            description: 'Descrizione',
            departure: '19/10/2019',
            arrival: '19/10/2022',
            footer: 'footer',
            vip: true,
            img: ''
        },
        {
            title: 'Titolo',
            description: 'Descrizione',
            departure: '19/10/2019',
            arrival: '19/10/2022',
            footer: 'footer',
            vip: true,
            img: ''
        }
    ];
    showBookingSummary: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    submitForm() {
        this.showCard = !this.showCard;
        this.hideForm = !this.hideForm;
        $('#booking').fadeOut();
    }

    showBookingSum() {
        this.showCard = !this.showCard;
        this.showBookingSummary = !this.showBookingSummary;
    }

}
