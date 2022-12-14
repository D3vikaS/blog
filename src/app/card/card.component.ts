import { Component, OnInit } from '@angular/core';
import { blogContent } from '../blogcontent';
import { BlogServerService } from '../blog-server.service';
import { DeleteDataComponent } from '../delete-data/delete-data.component';
import {
  ModalDismissReasons,
  NgbActiveModal,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(
    public blogService: BlogServerService,
    private modalService: NgbModal,
    // public modalRef: NgbActiveModal

  ) {}


  blogList: blogContent[] = [];
  // blogList:any

  maxLen(value: string) {
    value = value.substring(0, 100);
    return value;
  }

  // sending data to preview component
  // dataToDisplay is single object and that goes to blog
  dataToDisplay: blogContent = {} as blogContent;
  preview = false;
  indexValue = 0;
  showData(index: number) {
    this.dataToDisplay = this.blogList[index];
    this.preview = true;
  }

  // to show the blog once privew button is clicked.
  visible(event: any) {
    this.preview = event;
    this.clickEdit = false;
  }

  //  edit data
  clickEdit: boolean = false;
  editData(index: Number) {
    this.clickEdit = true;
  }

  // sending blog data to delete component
  clickDelete = false;
  deleteDAta = false;


  open(blog:any) {
    let modalRef = this.modalService.open(DeleteDataComponent, { backdropClass: 'light-blue-backdrop' });
    modalRef.componentInstance.blog = blog

    modalRef.result.then((result:any)=>{
      if (result==true){
        this.sureDelete(result)


      }
      //no else as of now

    })
  }

  //deleting value to blog content
  sureDelete(event: any) {
    if (event === true) {
      this.deleteDAta = true;
      if (this.deleteDAta == true) {
        this.blogList.splice(this.indexValue, 1);
        // this.modalRef.close();
      }
    }
  }

  ngOnInit(): void {
    // this.blogList = this.blogService.getData();
    this.blogService.getAllData().subscribe((res)=>{
      console.log(res)
      this.blogList=res;

    })
  }
}
