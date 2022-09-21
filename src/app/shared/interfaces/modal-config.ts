import { TemplateRef } from '@angular/core';

export interface ModalConfig {
  templateRef: TemplateRef<any>;
  title: string;
  subtitle?: string;
  size: string;
}
