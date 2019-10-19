import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';



@Component({
    selector: 'app-booking',
    templateUrl: 'booking.component.html',
    styleUrls: ['booking.component.css']
})
export class BookingComponent implements OnInit{
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

    constructor() {
    }

    ngOnInit() {
    }

    submitForm() {
        this.showCard = !this.showCard;
        this.hideForm = !this.hideForm;
        $('#booking').fadeOut();
    }

}
