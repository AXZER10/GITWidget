// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,

import { AppRegistry } from "react-native";
import { widgetTaskHandler } from "./widget-task-handler";
import { registerWidgetTaskHandler } from "react-native-android-widget";
import App from "./app";

// the environment is set up appropriately
AppRegistry.registerComponent("main", () => App);
registerWidgetTaskHandler((props) =>
  widgetTaskHandler({
    ...props,
    widgetInfo: { ...props.widgetInfo, height: 100, width: 100 },
  })
);
