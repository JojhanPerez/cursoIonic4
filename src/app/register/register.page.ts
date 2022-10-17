import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  validationMessages = {
    nombre: [
      {
        type: 'required', message: 'El nombre es requerido'
      }
    ],
    apellido: [
      {
        type: 'required', message: 'El apellido es requerido'
      }
    ],
    email: [
      {
        type: 'required', message: 'El email es requerido'
      },
      {
        type: 'pattern', message: 'El email es invalido'
      }
    ],
    password: [
      {
        type: 'required', message: 'La contraseña es requerida'
      },
      {
        type: 'minlength', message: 'La contraseña debe tener minimo 5 caracteres'
      }
    ]
  };

  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthenticateService, private navCtrl: NavController,
    private storage: Storage) {
    this.registerForm = this.formBuilder.group({
      nombre: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      apellido: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    });
  }

  async ngOnInit() {
    await this.storage.create();
  };

  register(userData) {
    this.authService.registerUser(userData).then(() => {
      this.navCtrl.navigateBack('/login');
    });
  }

  goToLogin() {
    this.navCtrl.navigateBack('/login');
  }

}
