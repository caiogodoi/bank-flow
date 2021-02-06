import React from 'react';
import * as RNSvg from 'react-native-svg';
const { Svg, G, Path } = RNSvg;

interface EyeOpened {
  width: number;
  height: number;
  color: string;
  onPress: () => void;
}

const EyeOpened = ({
  width,
  height,
  color,
  onPress,
}: EyeOpened) => (
  <Svg width={width} height={height} viewBox="0 0 32 32">
    <G fill="none" fillRule="evenodd" onPress={onPress}>
      <Path fill="none" d="M0 0h32v32H0z" />
      <Path
        d="M16.5 14.306c2.153 0 3.898 1.676 3.898 3.744 0 2.067-1.745 3.744-3.898 3.744-2.152 0-3.898-1.677-3.898-3.744 0-2.068 1.746-3.744 3.898-3.744zm0 1.872c-1.075 0-1.949.84-1.949 1.872s.874 1.872 1.95 1.872c1.074 0 1.948-.84 1.948-1.872 0-1.033-.874-1.872-1.949-1.872zM16.37 10c3.34-.006 6.223 1.368 8.632 3.637.83.782 1.544 1.618 2.143 2.454.364.507.612.908.744 1.15a.918.918 0 01-.412 1.264.995.995 0 01-1.315-.396 5.944 5.944 0 00-.146-.245 15.068 15.068 0 00-2.38-2.89c-2.071-1.953-4.494-3.107-7.263-3.102-2.642.005-4.99 1.155-7.023 3.097a15.46 15.46 0 00-2.366 2.895 6.207 6.207 0 00-.147.248.995.995 0 01-1.317.391.918.918 0 01-.407-1.264c.132-.241.38-.64.74-1.147a17.335 17.335 0 012.123-2.45c2.367-2.261 5.172-3.636 8.393-3.642z"
        fill={color}
      />
    </G>
  </Svg>
);

EyeOpened.defaultProps = {
  color: 'white',
  width: 32,
  height: 32,
};

export default EyeOpened;
