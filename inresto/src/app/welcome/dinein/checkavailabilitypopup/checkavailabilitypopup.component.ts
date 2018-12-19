import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AvailabilerestaurentsComponent } from './availabilerestaurents/availabilerestaurents.component';

@Component({
	selector: 'app-checkavailabilitypopup',
	templateUrl: './checkavailabilitypopup.component.html',
	styleUrls: ['./checkavailabilitypopup.component.scss'],
	providers: [NgbModalConfig, NgbModal]
})
export class CheckavailabilitypopupComponent implements OnInit {

	constructor(config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	openLg(content) {
		this.modalService.open(content, { windowClass: 'popupwindow' });
	}
	open(content) {
		this.modalService.open(content);
	}

	ngOnInit() {
	}
}
