import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm = ''
  constructor(activaredRoute:ActivatedRoute, private router:Router){
    activaredRoute.params.subscribe((params) => {
      if(params.searchTerm) this.searchTerm = params.searchTerm;
    })
  }

  search(term: string):void{
    if(term)
    this.router.navigateByUrl('/search/'+ term);
    else this.router.navigateByUrl('');
  }
}
