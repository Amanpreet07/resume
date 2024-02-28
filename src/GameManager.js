import kaboom from "kaboom";
import "kaboom/global";
import { launchScreen } from "./scenes/LaunchScreen";
import { loadLaunchScreenAssets } from "./utils/AssetLoader";

kaboom({
  width: 1920,
  height: 1080,
  stretch: true,
  letterbox: true,
  background: [0, 0, 0],
});

loadLaunchScreenAssets.loadSprites();

scene("launch-screen", launchScreen.render());

go("launch-screen");
