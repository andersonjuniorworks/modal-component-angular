import { Component, TemplateRef, VERSION, ViewChild } from '@angular/core';
import { ModalRef } from './shared/models/modal-ref';
import { ModalService } from './shared/services/modal.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  public modalRef: ModalRef;

  constructor(private modalService: ModalService) {}

  onOpenModal() {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'Criando um Modal reutilizável com Angular',
      subtitle: 'Construindo um componente de modal simples e intuitivo',
      size: 'md',
    });
  }

  onCloseModal() {
    this.modalRef.close();
  }
}
