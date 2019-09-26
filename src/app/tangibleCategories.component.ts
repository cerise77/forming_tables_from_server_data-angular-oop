import { Component, OnInit, ViewChild, ViewChildren, ElementRef, Renderer2, AfterViewInit, HostListener, Directive} from '@angular/core';
import { HttpService } from './http.tangiblescategories';

import {Table} from './table';


@Component({
    selector: 'tangiblecategories-app',
    templateUrl: './html/app.component.html',
    styleUrls: ['./css/app.component.css'],
    providers: [HttpService]
})

export class TangibleCategories {


  @ViewChild ('addRoww') addRow: ElementRef;
  @ViewChild ('wholetable') wholeTable: ElementRef;

  tables: Table;

  constructor(private httpService: HttpService, private renderer: Renderer2, private elRef: ElementRef){}


  ngOnInit(){
    this.httpService.getData().subscribe((data:Table) => {
      this.tables=data;
    })
  }


  onEdit(increased:any){

    if (increased.target.classList.contains("edit")){

      var parent = increased.target.parentNode.parentNode;

      var inner = parent.children;

      var popupElement = this.renderer.createElement('div');
      this.wholeTable.nativeElement.appendChild(popupElement);
      this.renderer.addClass(popupElement, 'popup');
      this.renderer.setProperty(popupElement, 'ppp');

      class Popup{

      constructor(padding: any, width: any, background: any, position: any, display: any, top: any, marginLeft: any){

        popupElement.style.position = position;
        popupElement.style.display = display;
        popupElement.style.top = top + "px";
        popupElement.style.marginLeft = marginLeft + "%";
        popupElement.style.padding = padding;
        popupElement.style.width = width + "%";
        popupElement.style.background = background;
        }
      }

      let popup: Popup = new Popup("20px 10px 0", 35, 'gray', 'fixed', "inline-block", 35, 25);

      for(let i = 0; i < 9; i++){
          var blockDiv = '<div class="items">#fff</div>';
          var blockChildren = "";

          for (let j = 0; j < 1; j++) {
            blockChildren += '<p class="textItems"></p><textarea class="textareaItems"></textarea>';
          }

          blockDiv = blockDiv.replace(/#fff/, blockChildren);
          popupElement.innerHTML += blockDiv;

      }

      var items = this.wholeTable.nativeElement.querySelectorAll('div.items');
      var textItems = this.wholeTable.nativeElement.querySelectorAll('p.textItems');
      var textareaItems = this.wholeTable.nativeElement.querySelectorAll('textarea');


        for (let k = 0; k < items.length; k++) {

          textItems[k].innerHTML = 1+k;

          textareaItems[k].addEventListener('blur', () => {

              for (let l = 0; l < textareaItems.length; l++) {

                if (textareaItems[l].value !== '') {
                  inner[l].innerHTML = textareaItems[l].value;
                } else if (textareaItems[l].value == ''){
                  inner[l].innerHTML = inner[l].innerHTML;
                }

              }

           });
        }



      var button = this.renderer.createElement('div');
      popupElement.appendChild(button);
      this.renderer.addClass(button, 'button');

      document.querySelector('.button').addEventListener('click', () => {
        this.renderer.removeChild(this.wholeTable.nativeElement, popupElement);

     });


     class ButtonPopup {
       constructor(padding: any, width: any, background: any, margin: any, border: any, cursor: any, height: any, textDecoration: any, textAlign: any){

          button.style.margin = margin;
          button.style.border = border;
          button.style.padding = padding;
          button.style.cursor = cursor;
          button.style.background = background;
          button.style.height = height + "px";
          button.style.textDecoration = textDecoration;
          button.style.textAlign = textAlign;
          button.style.width = width;
          button.innerHTML = "Save";

           }
      }

       var buttonPopup = new ButtonPopup("4px", "100px", "#ddde00", "10px auto", "solid 1px #000", "pointer", 24, "none", "center");

    }

  }


  onDelete(increased:any){

    if (increased.target.classList.contains("delete")){

      increased.target.parentNode.parentNode.remove();
    }
  }


  onAdd(increased:any){

    for(let m = 0; m < 1; m++){
      var mainDiv = '<div class="addDiv">#ddd</div>';
      var divChildren = "";

      for (let n = 0; n < 10; n++) {

        divChildren += '<div class="divD"></div>';

      }

      mainDiv = mainDiv.replace(/#ddd/, divChildren);

      var elemD = this.renderer.createElement('div');
      this.addRow.nativeElement.innerHTML += mainDiv;

    }

    var butEdit = this.renderer.createElement('a');
    this.renderer.addClass(butEdit, 'edit');
    this.renderer.setProperty(butEdit, 'innerHTML', 'edit');

    var butDelete = this.renderer.createElement('a');
    this.renderer.addClass(butDelete, 'delete');
    this.renderer.setProperty(butDelete, 'innerHTML', 'delete');

     var div = this.addRow.nativeElement.querySelectorAll('.divD');

    for (let k = 0; k < div.length; k++) {
      this.renderer.appendChild(div[k], butEdit);
      this.renderer.appendChild(div[k], butDelete);
    }



  }

}
