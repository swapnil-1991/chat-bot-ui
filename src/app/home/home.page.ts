import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  addScript: boolean = false;

  constructor() {}

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPureChatScript();
    }
  }

  addPureChatScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      const scripttagElement = document.createElement('script');
      scripttagElement.type = 'text/javascript';
      scripttagElement.innerHTML = `(function(){var js,fs,d=document,id="tars-widget-script",b="https://tars-file-upload.s3.amazonaws.com/bulb/";if(!d.getElementById(id)){js=d.createElement("script");js.id=id;js.type="text/javascript";js.src=b+"js/widget.js";fs=d.getElementsByTagName("script")[0];fs.parentNode.insertBefore(js,fs)}})();window.tarsSettings = {"convid":"Vy-wgM"};`;
      document.getElementsByTagName('head')[0].appendChild(scripttagElement);
    })
  }

}
