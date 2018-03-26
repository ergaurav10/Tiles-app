import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { TileSelectService } from '../../tools/services/tile-select.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private tileService: TileSelectService) { }

  ngOnInit() {
  }

  onlogOut() {
    this.tileService.resetTilesList();
    this.authService.logout();
    this.router.navigate(['/signin']);
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

}
