import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from './modal-window.services';
import { ViewChild } from '@angular/core';

@Component({
    selector: 'jw-modal',
    templateUrl: './modal-window.html',
    styleUrls : ["./modal-window.less"]
})

export class ModalComponent implements OnInit, OnDestroy {

    constructor(private el: ElementRef, private modalService: ModalService) {
        this.element = el.nativeElement;
    }

    @Input() id: string;
    private element: any;

    ngOnInit(): void {
        let modal = this;
        this.element.addEventListener('click', function (e: any) {
            if (e.target.className === 'jw-modal') {
                modal.close();
            }
        });
        this.modalService.initiateModal(this);
        document.body.appendChild(this.element);
    }

    ngOnDestroy(): void {
        this.element.remove();
    }

    open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }

    // close modal
    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }

    customOpen(id:string){
        this.element = document.getElementById(id);
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }
}