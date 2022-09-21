import { BodyInjectorService } from './body-injector.service';
import {
  ComponentFactory,
  ComponentFactoryResolver,
  Injectable,
  Injector,
  ComponentRef,
} from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';
import { ModalRef } from '../models/modal-ref';
import { ModalConfig } from '../interfaces/modal-config';

@Injectable()
export class ModalService {
  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private bodyInjector: BodyInjectorService
  ) {
    this.componentFactory =
      componentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  public open(config: ModalConfig): ModalRef {
    const componentRef = this.createComponentRef();
    const modalRef = new ModalRef(componentRef);
    componentRef.instance.config = config;
    this.bodyInjector.stackBeforeAppRoot(componentRef);
    componentRef.instance.modalRef = modalRef;
    return new ModalRef(componentRef);
  }

  private createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }
}
