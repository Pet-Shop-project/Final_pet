import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlldogsComponent } from './dogs/alldogs/alldogs.component';
import { LightdogsComponent } from './dogs/lightdogs/lightdogs.component';
import { NormaldogsComponent } from './dogs/normaldogs/normaldogs.component';
import { HeavydogsComponent } from './dogs/heavydogs/heavydogs.component';
import { SliderComponent } from './slider/slider.component';
import { AlldogdetailsComponent } from './dogdetails/alldogdetails/alldogdetails.component';
import { LightdogdetailsComponent } from './dogdetails/lightdogdetails/lightdogdetails.component';
import { NormaldogdetailsComponent } from './dogdetails/normaldogdetails/normaldogdetails.component';
import { HeavydogdetailsComponent } from './dogdetails/heavydogdetails/heavydogdetails.component';
import { AllpetsComponent } from "src/app/small pets/allpets/allpets.component";
import { LightpetsComponent } from "src/app/small pets/lightpets/lightpets.component";
import { HeavypetsComponent } from "src/app/small pets/heavypets/heavypets.component";
import { NormalpetsComponent } from "src/app/small pets/normalpets/normalpets.component";
import {AllCatsComponent}  from './Cats/all-cats/all-cats.component';
import {LightCatsComponent} from './Cats/light-cats/light-cats.component';
import{NormalCatsComponent} from './Cats/normal-cats/normal-cats.component';
import {HeavyCatsComponent} from './Cats/heavy-cats/heavy-cats.component';
import {CatsDetailsComponent} from './Cats/cats-details/cats-details.component';
import { AllpetsDetailsComponent } from "src/app/smallpets details/allpets-details/allpets-details.component";
import { LightpetsDetailsComponent } from "src/app/smallpets details/lightpets-details/lightpets-details.component";
import { HeavypetsDetailsComponent } from "src/app/smallpets details/heavypets-details/heavypets-details.component";
import { NormalpetsDetailsComponent } from "src/app/smallpets details/normalpets-details/normalpets-details.component";
import { AccessoriesComponent } from "src/app/accessories/accessories.component";
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { AllBirdsComponent } from './birds/all-birds/all-birds.component';
import { HeavyBirdsComponent } from './birds/heavy-birds/heavy-birds.component';
import { LightBirdsComponent } from './birds/light-birds/light-birds.component';
import { NormalBirdsComponent } from './birds/normal-birds/normal-birds.component';
import { NormalDetailsComponent } from './birds-details/normal-details/normal-details.component';
import { LightlDetailsComponent } from './birds-details/lightl-details/lightl-details.component';
import { AllDetailsComponent } from './birds-details/all-details/all-details.component';
import { HeavyDetailsComponent } from './birds-details/heavy-details/heavy-details.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import {HeavyCatsDetailsComponent} from './Cats/heavy-cats-details/heavy-cats-details.component'
import {LightCatsDetailsComponent} from './Cats/light-cats-details/light-cats-details.component'
import {NormalCatsDetailsComponent} from './Cats/normal-cats-details/normal-cats-details.component'
import {HeavyCatAdminComponent} from '../app/cat_admin/heavy-cat-admin/heavy-cat-admin.component'
import {LightCatAdminComponent} from '../app/cat_admin/light-cat-admin/light-cat-admin.component'
import {NormalCatAdminComponent} from './cat_admin/normal-cat-admin/normal-cat-admin.component'
import {HeavyDogAdminComponent} from './dog-admin/heavy-dog-admin/heavy-dog-admin.component'
import {LightDogAdminComponent} from './dog-admin/light-dog-admin/light-dog-admin.component'
import {NormalDogAdminComponent} from'./dog-admin/normal-dog-admin/normal-dog-admin.component'
import {DashboardDesignComponent} from './dashboard/dashboard-design/dashboard-design.component'
import { AddformAdminComponent } from "./dog-admin/addform-admin/addform-admin.component";
import { AccessoriesAdminComponent } from "src/app/Admin accessories/accessories-admin/accessories-admin.component";
import { CatAdminAddformComponent } from './cat_admin/cat-admin-addform/cat-admin-addform.component';
import { AccessoriesAdminAddformComponent } from './Admin accessories/accessories-admin-addform/accessories-admin-addform.component';
import { SmallpetAdminAddformComponent } from './smallpet-admin-addform/smallpet-admin-addform.component';
import { BirdsAdminAddformComponent } from './birds-admin-addform/birds-admin-addform.component';
import {AllCatDetailsComponent} from './Cats/all-cat-details/all-cat-details.component'
import { AllbirdsAdminComponent } from './dashboard/dashboard-design/birds_dashbord/allbirds-admin/allbirds-admin.component';
import { HeavybirdsAdminComponent } from './dashboard/dashboard-design/birds_dashbord/heavybirds-admin/heavybirds-admin.component';
import { LightbirdsAdminComponent } from './dashboard/dashboard-design/birds_dashbord/lightbirds-admin/lightbirds-admin.component';
import { NormalbirdsAdminComponent } from './dashboard/dashboard-design/birds_dashbord/normalbirds-admin/normalbirds-admin.component';
import { HeavysmallAdminComponent } from './dashboard/smallpets_dashbord/heavysmall-admin/heavysmall-admin.component';
import { LightsmallAdminComponent } from './dashboard/smallpets_dashbord/lightsmall-admin/lightsmall-admin.component';
import { NormalsmallAdminComponent } from './dashboard/smallpets_dashbord/normalsmall-admin/normalsmall-admin.component';
import { CartComponent } from './cart/cart.component';
import { AlldogsearchComponent } from './search/alldogsearch/alldogsearch.component';
import { PaymentComponent } from './payment/payment/payment.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddnewadminComponent } from './addnewadmin/addnewadmin.component';
import { LightdogsearchComponent } from './search/lightdogsearch/lightdogsearch.component';
import { NormaldogsearchComponent } from './search/normaldogsearch/normaldogsearch.component';
import { HeavydogsearchComponent } from './search/heavydogsearch/heavydogsearch.component';
import { AllcatsearchComponent } from './search/allcatsearch/allcatsearch.component';
import { LightcatsearchComponent } from './search/lightcatsearch/lightcatsearch.component';
import { NormalcatsearchComponent } from './search/normalcatsearch/normalcatsearch.component';
import { HeavycatsearchComponent } from './search/heavycatsearch/heavycatsearch.component';
import { AllsmallpetsearchComponent } from './search/allsmallpetsearch/allsmallpetsearch.component';
import { LightsmallpetsearchComponent } from './search/lightsmallpetsearch/lightsmallpetsearch.component';
import { NormalsmallpetsearchComponent } from './search/normalsmallpetsearch/normalsmallpetsearch.component';
import { HeavysmallpetsearchComponent } from './search/heavysmallpetsearch/heavysmallpetsearch.component';
import { AllbirdsearchComponent } from './search/allbirdsearch/allbirdsearch.component';
import { LightbirdssearchComponent } from './search/lightbirdssearch/lightbirdssearch.component';
import { NormalbirdssearchComponent } from './search/normalbirdssearch/normalbirdssearch.component';
import { HeavybirdssearchComponent } from './search/heavybirdssearch/heavybirdssearch.component';
import { AccessoryComponent } from './search/accessory/accessory.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  

  {path:'',component:SliderComponent},
  {path:'accessories',component:AccessoriesComponent},
  {path:'dogs/alldogs',component:AlldogsComponent},
  {path:'dogs/lightdogs',component:LightdogsComponent},
  {path:'dogs/normaldogs',component:NormaldogsComponent},
  {path:'dogs/heavydogs',component:HeavydogsComponent},
  {path:'alldogdetails/:_id',component:AlldogdetailsComponent},
  {path:'all-cat-details/:_id',component:AllCatDetailsComponent},

  {path:'lightdogdetails/:_id',component:LightdogdetailsComponent},
  {path:'normaldogdetails/:_id',component:NormaldogdetailsComponent},
  {path:'heavydogdetails/:_id',component:HeavydogdetailsComponent},
  {path:'smallpets/all',component:AllpetsComponent},
  {path:'smallpets/light',component:LightpetsComponent},
  {path:'smallpets/heavy',component:HeavypetsComponent},
  {path:'smallpets/normal',component:NormalpetsComponent},
  
  {path:'all-cats',component:AllCatsComponent},
  {path:'light-cats',component:LightCatsComponent},
  {path:'normal-cats',component:NormalCatsComponent},
  {path:'heavy-cats',component:HeavyCatsComponent},
  {path:'details-cats',component:CatsDetailsComponent},
  {path:'alldetail/:_id',component:AllpetsDetailsComponent},
  
  {path:'alldetail',component:AllpetsDetailsComponent},
  {path:'lightdetail/:_id',component:LightpetsDetailsComponent},
  {path:'heavydetail/:_id',component:HeavypetsDetailsComponent},
  {path:'normaldetail/:_id',component:NormalpetsDetailsComponent},
  {path:'lightdetail',component:LightpetsDetailsComponent},
  {path:'heavydetail',component:HeavypetsDetailsComponent},
  {path:'normaldetail',component:NormalpetsDetailsComponent},
  {path:'user',component:UserComponent
,children:[{path:'Login',component:LoginComponent},{path:'SignUp',component:SignupComponent}]},
{path:'all-birds',component:AllBirdsComponent},
{path:'heavy-birds',component:HeavyBirdsComponent},
{path:'light-birds',component:LightBirdsComponent},
{path:'normal-birds',component:NormalBirdsComponent},
{path:'normal-details/:_id',component:NormalDetailsComponent},
{path:'light-details/:_id',component:LightlDetailsComponent},
{path:'all-details/:_id',component:AllDetailsComponent},
{path:'heavy-details/:_id',component:HeavyDetailsComponent},
{path:'heavy-cats-details/:_id',component:HeavyCatsDetailsComponent},
{path:'light-cats-details/:_id',component:LightCatsDetailsComponent},
{path:'normal-cats-details/:_id',component:NormalCatsDetailsComponent},
// {path:'404',component:PageNotfoundComponent},
// { path: '', component:PageNotfoundComponent},
{path:'heavy-cats-details',component:HeavyCatsDetailsComponent},
{path:'light-cats-details',component:LightCatsDetailsComponent},
{path:'normal-cats-details',component:NormalCatsDetailsComponent},
{path:'heavy-cat-admin',component:HeavyCatAdminComponent},
{path:'light-cat-admin',component:LightCatAdminComponent},
{path:'normal-cat-admin',component:NormalCatAdminComponent},
{path:'heavy-dog-admin',component:HeavyDogAdminComponent},
{path:'light-dog-admin',component:LightDogAdminComponent},
{path:'normal-dog-admin',component:NormalDogAdminComponent},
{path:'dashboard',component:DashboardDesignComponent},
{path:'allbirds_admin',component:AllbirdsAdminComponent},
{path:'heavybirds_admin',component:HeavybirdsAdminComponent},
{path:'lightbirds_admin',component:LightbirdsAdminComponent},
{path:'normalbirds_admin',component:NormalbirdsAdminComponent},
{path:'heavysmall_admin',component:HeavysmallAdminComponent},
{path:'lightsmall_admin',component:LightsmallAdminComponent},
{path:'normalsmall_admin',component:NormalsmallAdminComponent},
{path:'accessories_admin',component:AccessoriesAdminComponent},
{path:'dog_addform',component:AddformAdminComponent},
{path:'cat_addform',component:CatAdminAddformComponent},
{path:'accessories_addform',component:AccessoriesAdminAddformComponent},
{path:'smallpet_addform',component:SmallpetAdminAddformComponent},
{path:'birds_addform',component:BirdsAdminAddformComponent},
{path:'cart',component:CartComponent},
{path:'all_dog_search/:name',component:AlldogsearchComponent},
{path:'payment',component:PaymentComponent},
{path:'adminlogin',component:AdminloginComponent},
{path:'addnewadmin',component:AddnewadminComponent},
{path:'lightdogsearch/:name',component:LightdogsearchComponent},
{path:'normaldogsearch/:name',component:NormaldogsearchComponent},
{path:'heavydogsearch/:name',component:HeavydogsearchComponent},
{path:'allcatsearch/:name',component:AllcatsearchComponent},
{path:'lightcatsearch/:name',component:LightcatsearchComponent},
{path:'normalcatsearch/:name',component:NormalcatsearchComponent},
{path:'heavycatsearch/:name',component:HeavycatsearchComponent},
{path:'allsmallpetsearch/:name',component:AllsmallpetsearchComponent},
{path:'lightsmallpetsearch/:name',component:LightsmallpetsearchComponent},
{path:'normalsmallpetsearch/:name',component:NormalsmallpetsearchComponent},
{path:'heavysmallpetsearch/:name',component:HeavysmallpetsearchComponent},
{path:'allbirdssearch/:name',component:AllbirdsearchComponent},
{path:'lightbirdssearch/:name',component:LightbirdssearchComponent},
{path:'normalbirdssearch/:name',component:NormalbirdssearchComponent},
{path:'heavybirdssearch/:name',component:HeavybirdssearchComponent},
{path:'accessorysearch/:name',component:AccessoryComponent},
{path:'wishlist',component:WishlistComponent}


// {path:'404',component:PageNotfoundComponent},
// { path: '', component:PageNotfoundComponent},
    
//     { path: '**', redirectTo: '404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
