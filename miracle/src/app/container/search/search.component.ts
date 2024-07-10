import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText:string = ' ';
  
  @Output()
  searchTextChanged: EventEmitter<string>= new EventEmitter<string>();
  @ViewChild('searchInput') inputEl : ElementRef;

  updateSearchText(){
    this.searchText = this.inputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
  // onSearchTextChanged(){
  //   this.searchTextChanged.emit(this.searchText);
  // }
}
