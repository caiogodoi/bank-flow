import React from 'react';
import * as RNSvg from 'react-native-svg';
const { Svg, G, Path } = RNSvg;

interface EyeClosed {
  width: number;
  height: number;
  color: string;
  onPress: () => void;
}

const EyeClosed = ({
  width,
  height,
  color,
  onPress,
}: EyeClosed) => (
  <Svg width={width} height={height} viewBox="0 0 32 32">
    <G fill="none" fillRule="evenodd" onPress={onPress}>
      <Path fill="none" d="M0 0h32v32H0z" />
      <Path
        d="M25.824 13.715c.555-.772.867-1.341.907-1.419a.883.883 0 00-1.564-.825c-.03.059-3.188 5.888-8.658 5.898-5.71 0-8.855-5.837-8.886-5.896a.886.886 0 00-1.568.822c.043.081.381.703.992 1.534l-1.755 1.58a.885.885 0 001.184 1.315l1.698-1.528c.624.674 1.392 1.37 2.289 1.991L9.454 19.45a.885.885 0 001.616.719l.924-2.076c1.066.518 2.282.878 3.632.993v2.344a.884.884 0 101.77 0v-2.348A9.842 9.842 0 0021 18.019l.944 2.123a.883.883 0 001.168.447.882.882 0 00.448-1.167l-1.04-2.337a14.23 14.23 0 002.191-1.99l1.811 1.63a.884.884 0 101.184-1.315l-1.883-1.695z"
        fill={color}
      />
    </G>
  </Svg>
);

EyeClosed.defaultProps = {
  color: 'white',
  width: 32,
  height: 32,
};

export default EyeClosed;
