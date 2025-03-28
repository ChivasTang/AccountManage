import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Asset from '../assets/Asset.tsx';

type ImageProps = {
  asset: Asset;
  width?: number;
  height?: number;
  style?: object;
};

const Png: React.FC<ImageProps> = ({asset, width = 24, height = 24, style}) => {
  return (
    <Image source={asset} style={[styles.image, {width, height}, style]} />
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
});

export default Png;
