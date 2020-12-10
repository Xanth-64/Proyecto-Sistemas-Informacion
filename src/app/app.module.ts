import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Imports de Firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
// Environment Import

import {environment} from '../environments/environment';

//Component Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { LoginComponent } from './pages/login/login.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';
import { AdminPedidosComponent } from './pages/admin-pedidos/admin-pedidos.component';
import { AdminProductosComponent } from './pages/admin-productos/admin-productos.component';
import { AdminCatalogosComponent } from './pages/admin-catalogos/admin-catalogos.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CategoriesFormComponent } from './components/forms/admin/categories-form/categories-form.component';
import { InvoiceFormComponent } from './components/forms/admin/invoice-form/invoice-form.component';
import { ProductFormComponent } from './components/forms/admin/product-form/product-form.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { SignednavBarComponent } from './components/signednav-bar/signednav-bar.component';
import { GeneralNavBarComponent } from './components/general-nav-bar/general-nav-bar.component';
import { InvoiceDescriptionComponent } from './components/invoices/invoice-description/invoice-description.component';
import { CatalogosComponent } from './components/admin/catalogos/catalogos.component';
import { AdminSideComponent } from './components/admin/catalogos/admin-side/admin-side.component';
import { AdminTableComponent } from './components/admin/catalogos/admin-table/admin-table.component';
import { ProductListComponent } from './components/lists/admin/product-list/product-list.component';
import { CrearProductosComponent } from './pages/admin-productos/crear-productos/crear-productos.component';
import { ActualizarProductosComponent } from './pages/admin-productos/actualizar-productos/actualizar-productos.component';
import { SideBarComponent } from './components/admin/side-bar/side-bar.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { FilterTableComponent } from './components/explore/filter-table/filter-table.component';
import { SearchresultsTableComponent } from './components/explore/searchresults-table/searchresults-table.component';
import { AdminMethodsComponent } from './pages/admin-methods/admin-methods.component';
import { PaymentManageFormComponent } from './components/forms/admin/payment-manage-form/payment-manage-form.component';
import { CartComponent } from './pages/cart/cart.component';
import { PaymentInitComponent } from './pages/payment-init/payment-init.component';
import { PaymentFinishComponent } from './pages/payment-finish/payment-finish.component';
import { CartBagViewComponent } from './components/cart-bag-view/cart-bag-view.component';
import { CartProductViewComponent } from './components/cart-product-view/cart-product-view.component';
import { CartProductViewElementComponent } from './components/cart-product-view-element/cart-product-view-element.component';
import { MainTitleComponent } from './components/homepage/main-title/main-title.component';
import { ProductCardComponent } from './components/homepage/product-card/product-card.component';
import { FeaturedProductsComponent } from './components/homepage/featured-products/featured-products.component';
import { NavbarBackComponent } from './components/navbar-back/navbar-back.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductViewComponent } from './components/explore/product-view/product-view.component';
import { ProductViewPageComponent } from './pages/product-view-page/product-view-page.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { WishListTableComponent } from './components/wish-list-table/wish-list-table.component';
import { WishListProductComponent } from './components/wish-list-product/wish-list-product.component';
import { InvoiceDescriptionBagComponent } from './components/invoiceDescriptionComponents/invoice-description-bag/invoice-description-bag.component';
import { InvoiceDescriptionProductComponent } from './components/invoiceDescriptionComponents/invoice-description-product/invoice-description-product.component';
import { CartViewComponent } from './components/explore/product-view/cart-view/cart-view.component';
import { CartFormComponent } from './components/explore/product-view/cart-form/cart-form.component';
import { ProductViewCartbagComponent } from './components/product-view-cartbag/product-view-cartbag.component';
import { ProductViewCartprodComponent } from './components/product-view-cartprod/product-view-cartprod.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignInComponent,
    LoginComponent,
    UserinfoComponent,
    AdminPedidosComponent,
    AdminProductosComponent,
    AdminCatalogosComponent,
    HomepageComponent,
    CategoriesFormComponent,
    InvoiceFormComponent,
    ProductFormComponent,
    ContactanosComponent,
    SignednavBarComponent,
    GeneralNavBarComponent,
    InvoiceDescriptionComponent,
    CatalogosComponent,
    AdminSideComponent,
    AdminTableComponent,
    ProductListComponent,
    CrearProductosComponent,
    ActualizarProductosComponent,
    SideBarComponent,
    AboutUsComponent,
    ExploreComponent,
    FilterTableComponent,
    SearchresultsTableComponent,
    AdminMethodsComponent,
    PaymentManageFormComponent,
    CartComponent,
    PaymentInitComponent,
    PaymentFinishComponent,
    CartBagViewComponent,
    CartProductViewComponent,
    CartProductViewElementComponent,
    MainTitleComponent,
    ProductCardComponent,
    FeaturedProductsComponent,
    NavbarBackComponent,
    FooterComponent,
    ProductViewComponent,
    ProductViewPageComponent,
    WishListComponent,
    WishListTableComponent,
    WishListProductComponent,
    InvoiceDescriptionBagComponent,
    InvoiceDescriptionProductComponent,
    CartViewComponent,
    CartFormComponent,
    ProductViewCartbagComponent,
    ProductViewCartprodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // Importar las funcionalidades de Firebase:

    // Primero se Configura el Modulo Principal
    AngularFireModule.initializeApp(environment.firebaseConfig),

    // Luego se inicializan los Módulos individuales
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
