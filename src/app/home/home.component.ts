import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  Images =[{
    src:'https://images.pexels.com/photos/16972273/pexels-photo-16972273/free-photo-of-cold-snow-light-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt:'Image',
    title:'Sky Hover',
    desc:'Flying High',
    btn:'read more'

  },
  {
  src:'https://images.pexels.com/photos/16942978/pexels-photo-16942978/free-photo-of-snow-wood-light-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  alt:'Image',
  title:'Morning Drives',
  desc:'Foggy',
  btn:'read more'
  }
]
}
