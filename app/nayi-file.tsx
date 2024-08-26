import { FlexWidget, ImageWidget } from 'react-native-android-widget';

export function MyWidget() {
  return (
    <FlexWidget>
      <ImageWidget
        image={require('../assets/images/widget-preview.png')}
        imageWidth={88}
        imageHeight={88}
      />
    </FlexWidget>
  );
}