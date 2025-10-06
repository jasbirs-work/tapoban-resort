import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images = [
    'https://picsum.photos/seed/g1/1200/800',
    'https://picsum.photos/seed/g2/1200/800',
    'https://picsum.photos/seed/g3/1200/800',
    'https://picsum.photos/seed/g4/1200/800',
    'https://picsum.photos/seed/g5/1200/800',
    'https://picsum.photos/seed/g6/1200/800'
  ];
  selected: string | null = null;
  open(src:string){ this.selected = src }
  close(){ this.selected = null }
}
