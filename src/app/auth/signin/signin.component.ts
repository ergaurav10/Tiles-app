import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { AuthService } from '../auth.service';
import { TileSelectService } from '../../tools/services/tile-select.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private tileService: TileSelectService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signinUser(email, password)
    .subscribe(
      (response) => {
        this.authService.setToken(response.headers.get('x-auth'));
        this.authService.setUser(response.body);

        this.tileService.fetchTilesListFromDatabase();

        this.router.navigate(['../'], {relativeTo: this.route});

      },
      (error) => {
        alert('Unable to log-in : Please check your credentials.');
      }
    );

  }

}
