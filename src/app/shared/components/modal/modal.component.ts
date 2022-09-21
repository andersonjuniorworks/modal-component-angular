import {
  Component,
  ContentChild,
  HostBinding,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { fade } from '../../animations/fade';
import { ModalConfig } from '../../interfaces/modal-config';
import { ModalRef } from '../../models/modal-ref';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [fade],
})
export class ModalComponent {
  @HostBinding('@fade') fade = true;

  public config: ModalConfig;
  public modalRef: ModalRef;

  @ContentChild('templateFooter') footer: TemplateRef<any>;
}
