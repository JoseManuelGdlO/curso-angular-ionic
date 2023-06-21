import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { LoginPage } from "./pages/login/login.page";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
    declarations: [
        LoginPage
    ],
    imports: [
        IonicModule,
        CommonModule,
        AuthRoutingModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class AuthModule {}