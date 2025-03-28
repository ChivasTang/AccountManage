import React from 'react';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import Images from '../assets/Images.tsx';

type ImageProps = {
  name: keyof typeof Images;
  width?: number;
  height?: number;
  style?: object;
};

const Png: React.FC<ImageProps> = ({name, width = 24, height = 24, style}) => {
  const source: ImageSourcePropType = Images[name];

  return (
    <Image source={source} style={[styles.image, {width, height}, style]} />
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
});

export default Png;
