import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @paid
 * @name TealiumAdIdentifier
 * @description
 * This module depends on the [Tealium Cordova Plugin](https://github.com/tealium/cordova-plugin). Without it, this module will not do anything.
 * Makes the IDFA and Google Ad Identifier available in the Tealium data layer.
 * 
 * @usage
 * ```
 * import { TealiumAdIdentifier } from '@ionic-native/tealium-adidentifier';
 *
 *
 * constructor(private adIdentifier: TealiumAdIdentifier) { }
 *
 * ...
 *
 *
 * this.adIdentifier.setPersistent("main");
 * this.adIdentifier.setVolatile("main");
 *
 * ```
 */

@Plugin({
  pluginName: 'TealiumAdIdentifier',
  plugin: 'tealium-cordova-adidentifier', // npm package name, example: cordova-plugin-camera
  pluginRef: 'window.tealiumAdIdentifier', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/Tealium/cordova-plugin', // the github repository URL for the plugin
  platforms: ['Android', 'iOS'], // Array of platforms supported, example: ['Android', 'iOS']
  install: '', // OPTIONAL install command, in case the plugin requires variables
})

@Injectable()
export class TealiumAdIdentifier extends IonicNativePlugin {

  /**
   * This function stores the ad identifier information as persistent data
   * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  setPersistent(instanceName: string): Promise<any> {
    return;
  }

  /**
   * This function stores the ad identifier information as volatile data
   * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  setVolatile(instanceName: string): Promise<any> {
    return;
  }

}
