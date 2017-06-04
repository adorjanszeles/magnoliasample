import {BrowserModule} from "@angular/platform-browser";
import {ApplicationRef, ComponentFactory, ComponentFactoryResolver, NgModule} from "@angular/core";

import {AppComponent} from "./app.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private resolver : ComponentFactoryResolver) {}

  ngDoBootstrap(appRef: ApplicationRef) {
    let tags: NodeListOf<Element> = document.getElementsByTagName('app-root');
    for (let i : number = 0; i < tags.length; i++) {
      console.log('started: ' + '#' + tags[i].getAttribute('id'));
      const factory: ComponentFactory<AppComponent> = this.resolver.resolveComponentFactory(AppComponent);
      (<any>factory).factory.selector = '#' + tags[i].getAttribute('id');
      appRef.bootstrap(factory);
    }
  }
}
