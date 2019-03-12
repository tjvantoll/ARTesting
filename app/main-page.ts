import { AR, ARLoadedEventData, ARMaterial, ARNodeInteraction, ARPlaneDetectedEventData, ARPlaneTappedEventData, ARSceneTappedEventData, ARTrackingFaceEventData, ARTrackingImageDetectedEventData } from "nativescript-ar";
import { Color } from "tns-core-modules/color";
import * as observable from "tns-core-modules/data/observable";
import * as pages from "tns-core-modules/ui/page";

export function pageLoaded(args: observable.EventData) {
  const page = <pages.Page>args.object;
  const model = new observable.Observable();

  model.set("planeMaterial", <ARMaterial>{
    diffuse: new Color("red"),
    transparency: 0.2
  });

  page.bindingContext = model;
}