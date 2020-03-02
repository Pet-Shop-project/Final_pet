import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { AlldogsComponent } from './dogs/alldogs/alldogs.component';
import { LightdogsComponent } from './dogs/lightdogs/lightdogs.component';
import { NormaldogsComponent } from './dogs/normaldogs/normaldogs.component';
import { HeavydogsComponent } from './dogs/heavydogs/heavydogs.component';
import { AlldogdetailsComponent } from './dogdetails/alldogdetails/alldogdetails.component';
import { LightdogdetailsComponent } from './dogdetails/lightdogdetails/lightdogdetails.component';
import { NormaldogdetailsComponent } from './dogdetails/normaldogdetails/normaldogdetails.component';
import { HeavydogdetailsComponent } from './dogdetails/heavydogdetails/heavydogdetails.component';
import { AllpetsComponent } from './small pets/allpets/allpets.component';
import { LightpetsComponent } from './small pets/lightpets/lightpets.component';
import { HeavypetsComponent } from './small pets/heavypets/heavypets.component';
import { NormalpetsComponent } from './small pets/normalpets/normalpets.component';
import { HomeComponent } from './home/home.component';
import { AllCatsComponent } from './Cats/all-cats/all-cats.component';
import { LightCatsComponent } from './Cats/light-cats/light-cats.component';
import { NormalCatsComponent } from './Cats/normal-cats/normal-cats.component';
import { HeavyCatsComponent } from './Cats/heavy-cats/heavy-cats.component';
import { CatsDetailsComponent } from './Cats/cats-details/cats-details.component';
import { AllpetsDetailsComponent } from './smallpets details/allpets-details/allpets-details.component';
import { LightpetsDetailsComponent } from './smallpets details/lightpets-details/lightpets-details.component';
import { HeavypetsDetailsComponent } from './smallpets details/heavypets-details/heavypets-details.component';
import { NormalpetsDetailsComponent } from './smallpets details/normalpets-details/normalpets-details.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { AllBirdsComponent } from './birds/all-birds/all-birds.component';
import { LightBirdsComponent } from './birds/light-birds/light-birds.component';
import { HeavyBirdsComponent } from './birds/heavy-birds/heavy-birds.component';
import { NormalBirdsComponent } from './birds/normal-birds/normal-birds.component';
import { AllDetailsComponent } from './birds-details/all-details/all-details.component';
import { LightlDetailsComponent } from './birds-details/lightl-details/lightl-details.component';
import { HeavyDetailsComponent } from './birds-details/heavy-details/heavy-details.component';
import { NormalDetailsComponent } from './birds-details/normal-details/normal-details.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { HeavyCatsDetailsComponent } from './Cats/heavy-cats-details/heavy-cats-details.component';
import { LightCatsDetailsComponent } from './Cats/light-cats-details/light-cats-details.component';
import { NormalCatsDetailsComponent } from './Cats/normal-cats-details/normal-cats-details.component';
// import {BirdsService} from './services/birds.service';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { SmallpetServiceService } from './services/smallpet-service.service';
import { AuthenticationService } from './services/authentication.service';
import { HeavyCatAdminComponent } from './cat_admin/heavy-cat-admin/heavy-cat-admin.component';
import { LightCatAdminComponent } from './cat_admin/light-cat-admin/light-cat-admin.component';
import { NormalCatAdminComponent } from './cat_admin/normal-cat-admin/normal-cat-admin.component';
import { DashboardDesignComponent } from './dashboard/dashboard-design/dashboard-design.component';
import { HeavyDogAdminComponent } from './dog-admin/heavy-dog-admin/heavy-dog-admin.component';
import { LightDogAdminComponent } from './dog-admin/light-dog-admin/light-dog-admin.component';
import { NormalDogAdminComponent } from './dog-admin/normal-dog-admin/normal-dog-admin.component';
import { AddformAdminComponent } from './dog-admin/addform-admin/addform-admin.component';
import { CatAdminAddformComponent } from './cat_admin/cat-admin-addform/cat-admin-addform.component';
import { AccessoriesAdminComponent } from './Admin accessories/accessories-admin/accessories-admin.component';
import { AccessoriesAdminAddformComponent } from './Admin accessories/accessories-admin-addform/accessories-admin-addform.component';
import { SmallpetAdminAddformComponent } from './dashboard/smallpets_dashbord/smallpet-admin-addform/smallpet-admin-addform.component';
import { BirdsAdminAddformComponent } from './dashboard/dashboard-design/birds_dashbord/birds-admin-addform/birds-admin-addform.component';
import { AllCatDetailsComponent } from './Cats/all-cat-details/all-cat-details.component';
import { DashboardNavbarComponent } from './dashboard/dashboard-navbar/dashboard-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { AllbirdsAdminComponent } from './dashboard/dashboard-design/birds_dashbord/allbirds-admin/allbirds-admin.component';
import { HeavybirdsAdminComponent } from './dashboard/dashboard-design/birds_dashbord/heavybirds-admin/heavybirds-admin.component';
import { LightbirdsAdminComponent } from './dashboard/dashboard-design/birds_dashbord/lightbirds-admin/lightbirds-admin.component';
import { NormalbirdsAdminComponent } from './dashboard/dashboard-design/birds_dashbord/normalbirds-admin/normalbirds-admin.component';
import { HeavysmallAdminComponent } from './dashboard/smallpets_dashbord/heavysmall-admin/heavysmall-admin.component';
import { LightsmallAdminComponent } from './dashboard/smallpets_dashbord/lightsmall-admin/lightsmall-admin.component';
import { NormalsmallAdminComponent } from './dashboard/smallpets_dashbord/normalsmall-admin/normalsmall-admin.component';
import { CartComponent } from './cart/cart.component';
import { AlldogsearchComponent } from './search/alldogsearch/alldogsearch.component';
import { AllcatsearchComponent } from './search/allcatsearch/allcatsearch.component';
import { PaymentComponent } from './payment/payment/payment.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LightCatAddformComponent } from './cat_admin/light-cat-addform/light-cat-addform.component';
import { NormalCatAddformComponent } from './cat_admin/normal-cat-addform/normal-cat-addform.component';
import { AddnewadminComponent } from './addnewadmin/addnewadmin.component';
import { AllbirdsearchComponent } from './search/allbirdsearch/allbirdsearch.component';
import { AllsmallpetsearchComponent } from './search/allsmallpetsearch/allsmallpetsearch.component';
import { LightdogsearchComponent } from './search/lightdogsearch/lightdogsearch.component';
import { NormaldogsearchComponent } from './search/normaldogsearch/normaldogsearch.component';
import { HeavydogsearchComponent } from './search/heavydogsearch/heavydogsearch.component';
import { HeavycatsearchComponent } from './search/heavycatsearch/heavycatsearch.component';
import { NormalcatsearchComponent } from './search/normalcatsearch/normalcatsearch.component';
import { LightcatsearchComponent } from './search/lightcatsearch/lightcatsearch.component';
import { LightsmallpetsearchComponent } from './search/lightsmallpetsearch/lightsmallpetsearch.component';
import { NormalsmallpetsearchComponent } from './search/normalsmallpetsearch/normalsmallpetsearch.component';
import { HeavysmallpetsearchComponent } from './search/heavysmallpetsearch/heavysmallpetsearch.component';
import { HeavybirdssearchComponent } from './search/heavybirdssearch/heavybirdssearch.component';
import { NormalbirdssearchComponent } from './search/normalbirdssearch/normalbirdssearch.component';
import { LightbirdssearchComponent } from './search/lightbirdssearch/lightbirdssearch.component';
import { AccessoryComponent } from './search/accessory/accessory.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CatAdminEditComponent } from './cat_admin/cat-admin-edit/cat-admin-edit.component';
import { HeavyCatEditComponent } from './cat_admin/heavy-cat-edit/heavy-cat-edit.component';
import { NormalCatEditComponent } from './cat_admin/normal-cat-edit/normal-cat-edit.component';
import { HeavyDogEditComponent } from './dog-admin/heavy-dog-edit/heavy-dog-edit.component';
import { LightDogEditComponent } from './dog-admin/light-dog-edit/light-dog-edit.component';
import { NormalDogEditComponent } from './dog-admin/normal-dog-edit/normal-dog-edit.component';
import { LightdogAddformComponent } from './dog-admin/lightdog-addform/lightdog-addform.component';
import { NormaldogAddformComponent } from './dog-admin/normaldog-addform/normaldog-addform.component';
import { LightbirdAddformComponent } from './dashboard/dashboard-design/birds_dashbord/lightbird-addform/lightbird-addform.component';
import { NormalbirdAddformComponent } from './dashboard/dashboard-design/birds_dashbord/normalbird-addform/normalbird-addform.component';
import { LightpetAddformComponent } from './dashboard/smallpets_dashbord/lightpet-addform/lightpet-addform.component';
import { NormalpetAddformComponent } from './dashboard/smallpets_dashbord/normalpet-addform/normalpet-addform.component';
import { HeavybirdEditComponent } from './dashboard/dashboard-design/birds_dashbord/heavybird-edit/heavybird-edit.component';
import { LightbirdEditComponent } from './dashboard/dashboard-design/birds_dashbord/lightbird-edit/lightbird-edit.component';
import { NormalbirdEditComponent } from './dashboard/dashboard-design/birds_dashbord/normalbird-edit/normalbird-edit.component';
import { HeavypetEditComponent } from './dashboard/smallpets_dashbord/heavypet-edit/heavypet-edit.component';
import { LightpetEditComponent } from './dashboard/smallpets_dashbord/lightpet-edit/lightpet-edit.component';
import { NormalpetEditComponent } from './dashboard/smallpets_dashbord/normalpet-edit/normalpet-edit.component';
import { EditAccessComponent } from './Admin accessories/edit-access/edit-access.component';



// import { from } from 'rxjs';
// import { MaterialModule } from './material/material.module';


// import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    AlldogsComponent,
    LightdogsComponent,
    NormaldogsComponent,
    HeavydogsComponent,
    AlldogdetailsComponent,
    LightdogdetailsComponent,
    NormaldogdetailsComponent,
    HeavydogdetailsComponent,
    AllpetsComponent,
    LightpetsComponent,
    HeavypetsComponent,
    NormalpetsComponent,
    HomeComponent,
    AllCatsComponent,
    LightCatsComponent,
    NormalCatsComponent,
    HeavyCatsComponent,
    CatsDetailsComponent,
    AllpetsDetailsComponent,
    LightpetsDetailsComponent,
    HeavypetsDetailsComponent,
    NormalpetsDetailsComponent,
    AccessoriesComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    AllBirdsComponent,
    LightBirdsComponent,
    HeavyBirdsComponent,
    NormalBirdsComponent,
    AllDetailsComponent,
    LightlDetailsComponent,
    HeavyDetailsComponent,
    NormalDetailsComponent,
    PageNotfoundComponent,
    HeavyCatsDetailsComponent,
    LightCatsDetailsComponent,
    NormalCatsDetailsComponent,
    HeavyCatAdminComponent,
    LightCatAdminComponent,
    NormalCatAdminComponent,
    DashboardDesignComponent,
    HeavyDogAdminComponent,
    LightDogAdminComponent,
    NormalDogAdminComponent,
    AddformAdminComponent,
    CatAdminAddformComponent,
    AccessoriesAdminComponent,
    AccessoriesAdminAddformComponent,
    SmallpetAdminAddformComponent,
    BirdsAdminAddformComponent,
    AllCatDetailsComponent,
    DashboardNavbarComponent,
    AllbirdsAdminComponent,
    HeavybirdsAdminComponent,
    LightbirdsAdminComponent,
    NormalbirdsAdminComponent,
    HeavysmallAdminComponent,
    LightsmallAdminComponent,
    NormalsmallAdminComponent,
    CartComponent,
    AlldogsearchComponent,
    AllcatsearchComponent,
    PaymentComponent,
    AdminloginComponent,
    LightCatAddformComponent,
    NormalCatAddformComponent,
    AddnewadminComponent,
    AllbirdsearchComponent,
    AllsmallpetsearchComponent,
    LightdogsearchComponent,
    NormaldogsearchComponent,
    HeavydogsearchComponent,
    HeavycatsearchComponent,
    NormalcatsearchComponent,
    LightcatsearchComponent,
    LightsmallpetsearchComponent,
    NormalsmallpetsearchComponent,
    HeavysmallpetsearchComponent,
    HeavybirdssearchComponent,
    NormalbirdssearchComponent,
    LightbirdssearchComponent,
    AccessoryComponent,
    WishlistComponent,
    CatAdminEditComponent,
    HeavyCatEditComponent,
    NormalCatEditComponent,
    HeavyDogEditComponent,
    LightDogEditComponent,
    NormalDogEditComponent,
    LightdogAddformComponent,
    NormaldogAddformComponent,
    LightbirdAddformComponent,
    NormalbirdAddformComponent,
    LightpetAddformComponent,
    NormalpetAddformComponent,
    HeavybirdEditComponent,
    LightbirdEditComponent,
    NormalbirdEditComponent,
    HeavypetEditComponent,
    LightpetEditComponent,
    NormalpetEditComponent,
    EditAccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
  
    // MaterialModule
    
  
  ],
 
  providers: [
    // SmallpetServiceService
    AuthenticationService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
