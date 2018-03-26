import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { AuthService } from '../auth.service';
import { TileSelectService } from '../../tools/services/tile-select.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private tileService: TileSelectService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signupUser(email, password)
    .subscribe(
      (response) => {
        this.authService.setToken(response.headers.get('x-auth'));
        this.authService.setUser(response.body);
      },
      (error) => {
        alert('Unable to create user :' + error.errmsg);

      }
    );
  }

}
