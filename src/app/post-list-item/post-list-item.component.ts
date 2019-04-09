import { Component, Input, OnInit } from '@angular/core'; // ON OUBLIE PAS D'IMPORTER INPUT

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

// Récupération des différentes variables définies en tant qu'attribut dans notre template 
// On peut désormais afficher leur contenus dans nos composant post list item
  @Input() articleTitle;
  @Input() articleContent;
  @Input() articleLoveIts;
  @Input() articleCreatedAt;

  constructor() { }

  ngOnInit() {
  }

// Création des méthodes
  onLike() {
	this.articleLoveIts ++;
  }

  onDislike() {
  	this.articleLoveIts --;
  }

}
