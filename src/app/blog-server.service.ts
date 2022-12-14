import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { blogContent } from './blogcontent';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }

}

@Injectable({
  providedIn: 'root'
})
export class BlogServerService {

  constructor( public _http:HttpClient) { }
  apiUrl = 'http://localhost:8000/'


  // getData(){
  //   return [
  //     {
  //       title:"abc",
  //       content:"orem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClass orem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //       author:"meme"
  //     },
  //     {
  //       title:"cdf",
  //       content:"orem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClass orem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassorem Ipsum is simply dummy text of the printing and typesetting contentClasscontentClasscontentClassindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //       author:"meme"
  //     },
  //     {
  //       title:"bla bla",
  //       content:"",
  //       author:"meme"
  //     },
  //     {
  //       title:"uauau",
  //       content:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //       author:"meme"
  //     },
  //   ]
  // }

getAllData():Observable<blogContent[]>{
  return this._http.get<blogContent[]>(this.apiUrl)

}



}
