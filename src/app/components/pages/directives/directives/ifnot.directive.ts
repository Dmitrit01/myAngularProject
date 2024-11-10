import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNot]',
  standalone: true,
})
export class IfnotDirective {
  @Input('appIfNot') set ifNot(condition:boolean){
    if(condition){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainer.clear()
    }
  }
  constructor(public templateRef: TemplateRef<any>,public viewContainer:ViewContainerRef) {
    
  }
}
