import { WidgetTaskHandlerProps } from "react-native-android-widget";
import { MyWidget } from "./nayi-file";

const nameToWidget = {
  // MyWidget will be the **name** with which we will reference our widget.
  MyWidget: MyWidget,
};

export async function widgetTaskHandler(props: WidgetTaskHandlerProps) {
  const widgetInfo = props.widgetInfo;
  const Widget =
    nameToWidget[widgetInfo.widgetName as keyof typeof nameToWidget];

  switch (props.widgetAction) {
    case 'WIDGET_ADDED':
      props.renderWidget(<Widget />);
      break;

    case 'WIDGET_UPDATE':
      // Not needed for now
      break;

    case 'WIDGET_RESIZED':
      console.log('WIDGET_RESIZED');
      break;

    case 'WIDGET_DELETED':
      // Not needed for now
      break;

    case 'WIDGET_CLICK':
      // Not needed for now
      break;

    default:
      break;
  }
}