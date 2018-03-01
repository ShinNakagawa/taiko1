import { Component } from '@angular/core';
import { ViewController, IonicPage, NavParams } from 'ionic-angular';
import { YtProvider } from './../../../providers/yt/yt';
import { Observable } from 'rxjs/Observable';
import { Song } from '../../../models/song.model';


@IonicPage()
@Component({
  selector: 'page-song',
  templateUrl: 'song.html'
})
export class SongPage {
  videos: Observable<any[]>;
  videoFull: Observable<any[]>;
  song: Song;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public ytProvider: YtProvider) {
      this.song = navParams.get('song');
      this.videoFull = this.ytProvider.getVideoSnippet(this.song.fullVideoID);
      this.videos = this.ytProvider.getListVideos(this.song.playListID);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  openVideo(video) {
    console.log(video);
    window.open('https://www.youtube.com/watch?v=' + video.id);
  }

  openListVideo(video) {
    console.log(video);
    window.open('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId);
  }


}
