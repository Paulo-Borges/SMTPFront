import { Component, inject } from '@angular/core';
import { Membro } from '../../components/membro/membro';
import { User } from '../../components/user/user';
import { LoginService } from '../../services/login-service';
import { Login } from '../../components/login/login';

@Component({
  selector: 'app-home',
  imports: [Membro, User, Login],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 
}
