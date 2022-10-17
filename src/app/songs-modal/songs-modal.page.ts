import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-songs-modal',
  templateUrl: './songs-modal.page.html',
  styleUrls: ['./songs-modal.page.scss'],
})
export class SongsModalPage {

  songs: any[];
  artist: any[];

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ionViewDienter() {
    this.songs = this.navParams.data.songs;
    console.log(this.navParams);
    this.artist = this.navParams.data.artists;
  }

  async selectSong(song) {
    await this.modalController.dismiss(song);
  }

}
