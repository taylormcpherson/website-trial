import { Component } from '@angular/core';
import {Observable, Subject} from "rxjs";
import { Injectable } from '@angular/core';
import { DeviceDetectorService } from "ngx-device-detector";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    //animation triggers go here
  ]
})

export class AppComponent {
  title = 'Taylor McPherson';
  deviceInfo = null;

    constructor(private deviceService: DeviceDetectorService) {
      this.epicFunction();
    }

    epicFunction() {
      console.log('hello `Home` component');
      this.deviceInfo = this.deviceService.getDeviceInfo();
      const isMobile = this.deviceService.isMobile();
      const isTablet = this.deviceService.isTablet();
      const isDesktopDevice = this.deviceService.isDesktop();
      console.log(this.deviceInfo);
      console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
      console.log(isTablet);  // returns if the device us a tablet (iPad etc)
      console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.
    }

}




