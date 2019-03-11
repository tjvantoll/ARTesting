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

/*const planeMaterial = <ARMaterial>{
  diffuse: new Color("red"),
  transparency: 0.2
};*/

const planeMaterial = "Assets.scnassets/Materials/tron/tron-diffuse.png";

export function pageLoaded(args: observable.EventData) {
  const page = <pages.Page>args.object;
  const model = new observable.Observable();
  model.set("planeMaterial", planeMaterial);
  page.bindingContext = model;

  setupFlashlight(page);
}

export function onPlaneTapped(args: ARPlaneTappedEventData) {
  args.object.addModel({
    name: "Models.scnassets/Car.dae",
    position: {
      x: args.position.x,
      y: args.position.y,
      z: args.position.z
    },
    scale: 1,
    mass: 20
  });
}

export function onArLoaded(args: ARLoadedEventData) {
  args.object.addText({
    text: "NativeScript",
    position: {
      x: 2.7,
      y: -0.2,
      z: -4
    },
    scale: 0.1,
    depth: 1,
    materials: [new Color("blue")],
    rotation: {
      x: 40,
      y: 15,
      z: 90
    }
  });
}











function setupFlashlight(page) {
  const flashlightSwitch = page.getViewById("flashlightSwitch");
  flashlightSwitch.on("checkedChange", (args: any) => {
    args.value ? flashlight.on() : flashlight.off();
  });
}
