import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpModule, Http } from "@angular/http";
import { HttpWrapperService } from "./http-wrapper.service";
import { AppRoutingModule } from '../app-routing.module';
import { TemplateService } from './template.service';



@NgModule({
  imports: [AppRoutingModule, HttpModule]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [HttpWrapperService , TemplateService]
    
    };
  }
}
