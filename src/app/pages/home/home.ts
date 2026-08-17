import { Component } from '@angular/core';
import { Membro } from '../../components/membro/membro';
import { User } from '../../components/user/user';

@Component({
  selector: 'app-home',
  imports: [Membro, User],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
