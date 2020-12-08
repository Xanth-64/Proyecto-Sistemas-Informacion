import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Categories } from 'src/app/models/categories';
import { Product } from 'src/app/models/product';
import { CategoriesService } from 'src/app/service/admin-crud/categories.service';
import { ProductosService } from 'src/app/services/admin-crud/productos.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private Router: Router,private Auth: AuthenticationService, public product: ProductosService, public category: CategoriesService, public fb: FormBuilder) {}
  products: Array<Product>
  categories: Array<Categories>
  searchBar: FormGroup
  userId: string;
  userInput: string
  results: Array<Object>
  empty: string = ''
  currentCat: string = 'Todos'
  ngOnInit(): void {
    this.getAllCategories()
    this.getAllProducts()
    this.createForm()
    this.Auth.getCurrentUser().subscribe((currentUser) => {
      if(currentUser){
        this.userId = currentUser.uid;
      }
    })
  }
  createForm():void{
    this.searchBar = this.fb.group({
      searchBoxContent: '',
    })
  }
  selectCat(cat: Categories):void{
    this.currentCat = cat.name
    document.getElementById('dropdown-items').classList.remove('show')
  }
  toggleFilter():void{
    if (!document.getElementById('dropdown-items').classList.contains('show')) {
      document.getElementById('dropdown-items').classList.add('show')
    } else {
      document.getElementById('dropdown-items').classList.remove('show')
      
    }
  }
  getAllCategories():void{
    this.category.getAllCategories().subscribe((items) => 
    this.categories = items.map((item) =>({...item.payload.doc.data(),
    $key: item.payload.doc.id } as Categories)));
  }
  getAllProducts():void{
    this.product.getAllProducts().subscribe( (items) =>
      this.products = items.map((item) =>({...item.payload.doc.data(),
        $key: item.payload.doc.id } as Product))
    );
  }
  onSubmit(): void{
    console.log('test rocket')
    this.userInput = this.searchBar.get('searchBoxContent').value
    console.log(this.userInput)
    this.results = this.products.filter((value) => {
      if (value.title.includes(this.userInput)) {
        return value
      }
      this.Router.navigate(['explore/' + this.userInput])
    })
    console.log(this.results)
  }
  isAuth(): boolean{
    return this.Auth.isAuthenticated();
  }

}
