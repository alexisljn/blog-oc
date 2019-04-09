import { Component, Input, OnInit } from '@angular/core'; // ON OUBLIE PAS D'IMPORTER INPUT

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

// Récupération de l'array posts à travers l'attribut articles grâce au décorateur Input() 
// Rappel : articles à été défini dans app.component.html comme un attribut de <post-list-component> content l'array posts
  @Input() articles;	

  constructor() { }

  ngOnInit() {

  }

}
