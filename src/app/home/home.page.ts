import { Component, LOCALE_ID } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

interface IOptions {
  /** text to speak */
  text: string;
  /** a string like 'en-US', 'zh-CN', etc */
  locale?: string;
  /** speed rate, 0 ~ 1 */
  rate?: number;
  /** ambient(iOS) */
  category?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public tts: TextToSpeech,
    public toast: ToastController, 
    public loadCtrl: LoadingController) {}
  
  ttsOptions = {
    text: '',
    locale: 'en',
    rate: 1.5,
  }

  speakText() {
    this.tts.speak(this.ttsOptions)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

    // this.geolocation.getCurrentPosition().then((resp) => {
    //   // resp.coords.latitude
    //   // resp.coords.longitude
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });
     
    //  let watch = this.geolocation.watchPosition();
    //  watch.subscribe((data) => {
    //   // data can be a set of coordinates, or an error (if an error occurred).
    //   // data.coords.latitude
    //   // data.coords.longitude
    //  });



  // toast1 = this.toast.create({
  //   message: 'This is the first toast.',
  //   duration: 2000,
  //   position: 'top'
  // });
  
  // toast2 = this.toast.create({
  //   message: 'This is the second toast.',
  //   duration: 2000,
  //   position: 'top'
  // });

  // loader = this.loadCtrl.create({
    
  // });

  async presentToast() {
    const toast1 = await this.toast.create({
      message: 'This is the first toast.',
      duration: 2000,
      position: 'top'
    });
    // const toast2 = this.toast.create({
    //   message: 'This is the second toast.',
    //   duration: 2000,
    //   position: 'top'
    // })
    toast1.present().then(_ => toast1.onDidDismiss()
                    .then(_ => this.presentLoading()
    ));
    }

    // async presentToast2() {
    //   const toast2 = await this.toast.create({
    //     message: 'This is the second toast.',
    //     duration: 2000,
    //     position: 'top'
    //   })
    //   toast2.present();
    // }

    async presentLoading() {
      const loading = await this.loadCtrl.create({
        message: 'Hellooo',
        duration: 2000
      });
      await loading.present();
  
      loading.onDidDismiss();
  
      console.log('Loading dismissed!');
    }
  
  }