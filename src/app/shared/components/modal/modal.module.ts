import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalService } from '../../services/modal.service';

@NgModule({
  imports: [CommonModule],
  providers: [ModalService],
  exports: [ModalComponent],
  declarations: [ModalComponent],
})
export class ModalModule {}
