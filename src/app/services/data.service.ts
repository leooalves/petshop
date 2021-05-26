import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

	public url:string = "http://localhost:3000/v1";

	constructor(private http: HttpClient){    }

	public composeHeader(){
		const token = localStorage.getItem('petshop.token');
		const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
		return headers;
	}

	getProducts(){
		return this.http.get<Product[]>(`${this.url}/products`)
	}

	authenticate(data:any){
		return this.http.post<Product[]>(`${this.url}/accounts/authenticate`,data)
	}

	refreshToken(){
		return this.http.post<Product[]>(`${this.url}/accounts/refresh-token`, null, {headers: this.composeHeader()})
	}
}
