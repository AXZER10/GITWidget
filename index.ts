import { AppRegistry } from "react-native";
import App from "./app/app";
import { name as appName } from "./app.json";
import { registerWidgetTaskHandler } from "react-native-android-widget";
import { widgetTaskHandler } from "./app/widget-task-handler";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
AppRegistry.registerComponent("MyWidget", () => App);
registerWidgetTaskHandler(widgetTaskHandler);
