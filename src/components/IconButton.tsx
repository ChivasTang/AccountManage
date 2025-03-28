import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Png from './Png.tsx';
import Asset from '../assets/Asset.tsx';

type IconButtonProps = {
  show: boolean;
  asset: Asset;
  onPress: () => void;
  width?: number;
  height?: number;
  style?: any;
};

const IconButton: React.FC<IconButtonProps> = ({
  show = true,
  asset,
  onPress,
  width = 24,
  height = 24,
  style,
}) => {
  return show ? (
    <TouchableOpacity onPress={onPress} style={[styles.root, style]}>
      <Png asset={asset} width={width} height={height} />
    </TouchableOpacity>
  ) : (
    <View style={[styles.root, style]} />
  );
};

const styles = StyleSheet.create({
  root: {
    width: 32,
    height: 32,
    padding: 8,
  },
});

export default IconButton;
