import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
	{ path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
	{ path: 'amenities', loadComponent: () => import('./pages/amenities/amenities.component').then(m => m.AmenitiesComponent) },
	{ path: 'gallery', loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent) },
	{ path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
	{ path: '**', redirectTo: '' }
];
