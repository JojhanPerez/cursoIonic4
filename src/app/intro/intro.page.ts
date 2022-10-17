import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlide: true,
    speed: 400
  };

  slides = [
    {
      title: 'Escuha tu música',
      subTitle: 'en cualquier lugar',
      description: 'Los mejores álbunes, las mejores canciones. Escucha y comparte en cualquier momento y a todas horas',
      icon: 'play-circle-outline'
    },
    {
      title: 'Disfruta de nuestro reproductor',
      subTitle: 'con los mejores videos',
      description: 'Entra al modo video de nuestro reproductor y obtén accesoa clips, documentales de tu artista favorito',
      icon: 'videocam-outline'
    },
    {
      title: 'Accede al exclusivo',
      subTitle: 'modo de deporte',
      description: 'Crea una playlist basaad en tu actividad fisica. Ten reportes y acceso a lo que necesites, integrand un GPS.',
      icon: 'bicycle-outline'
    },
    {
      title: 'Mi curso de ionic 4',
      subTitle: 'Formación de Opitech',
      description: 'Descubriendo el maravilloso mundo del front-end.',
      icon: 'code-working-outline'
    }
  ];

  constructor(private router: Router, private storage: Storage) { }

  finish() {
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl('/login');
  };

  async ngOnInit() {
    await this.storage.create();
  };

}
