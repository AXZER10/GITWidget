import { FlexWidget, ImageWidget } from 'react-native-android-widget';

export function MyWidget() {
  return (
    <FlexWidget
      style={{
        height: 'match_parent',
        width: 'match_parent',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 16,
      }}
    >
      <ImageWidget
        image={require('../assets/images/icon.png')}
        imageWidth={300}
        imageHeight={260}
      />
    </FlexWidget>
  );
}