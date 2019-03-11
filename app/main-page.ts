import { Color } from "tns-core-modules/color";
import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';

const flashlight = require("nativescript-flashlight");
import {
  AR,
  ARLoadedEventData,
  ARMaterial,
  ARNodeInteraction,
  ARPlaneDetectedEventData,
  ARPlaneTappedEventData,
  ARSceneTappedEventData,
  ARTrackingFaceEventData,
  ARTrackingImageDetectedEventData
} from 'nativescript-ar';

const planeMaterial = <ARMaterial>{
  diffuse: new Color("white"),
  transparency: 0.2
};

export function pageLoaded(args: observable.EventData) {
  const page = <pages.Page>args.object;
  const model = new observable.Observable();
  model.set("planeMaterial", planeMaterial);
  page.bindingContext = model;

  setupFlashlight(page);
}

function setupFlashlight(page) {
  const flashlightSwitch = page.getViewById("flashlightSwitch");
  flashlightSwitch.on("checkedChange", (args: any) => {
    args.value ? flashlight.on() : flashlight.off();
  });
}
