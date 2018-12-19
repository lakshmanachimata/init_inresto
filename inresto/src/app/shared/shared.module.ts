import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule} from './header/header.module'
import { SubheaderModule } from './header/subheader/subheader.module'
import { LeftsidebarModule } from './leftsidebar/leftsidebar.module'
import { RightsidebarModule } from './rightsidebar/rightsidebar.module'
import { FooterModule } from './footer/footer.module'
import { LoginModule } from './login/login.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { HeadermainComponent } from './header/headermain/headermain.component'
// import { HeaderleftComponent } from './header/headerleft/headerleft.component'
// import { HeaderrightComponent } from './header/headerright/headerright.component'
// import { FooterComponent } from './footer/footer/footer.component'
// import { LeftsidebarComponent } from './leftsidebar/leftsidebar/leftsidebar.component'
// import { RightsidebarComponent } from './rightsidebar/rightsidebar/rightsidebar.component'
// import { LoginComponent } from './login/login/login.component'

@NgModule({
  declarations: [PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    LeftsidebarModule,
    RightsidebarModule,
    FooterModule,
    LoginModule,
    SubheaderModule,
  ],
  exports:[
    HeaderModule,
    LeftsidebarModule,
    RightsidebarModule,
    FooterModule,
    LoginModule,
    SubheaderModule,
  ]
})
export class SharedModule { }
