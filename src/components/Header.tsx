import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IconButton from './IconButton.tsx';
import Asset from '../assets/Asset.tsx';
import SplitLine from './SplitLine.tsx';

type HeaderProps = {
  title: string;
  showBackIcon?: boolean;
  showCloseIcon?: boolean;
  onBackPress?: () => void;
  onClosePress?: () => void;
};

const Header: React.FC<HeaderProps> = ({
  title,
  showBackIcon = false,
  showCloseIcon = false,
  onBackPress = () => {},
  onClosePress = () => {},
}) => {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <IconButton
          show={showBackIcon}
          asset={Asset.icon_back}
          onPress={onBackPress}
        />
        <Text style={styles.title}>{title}</Text>
        <IconButton
          show={showCloseIcon}
          asset={Asset.icon_close}
          onPress={onClosePress}
        />
      </View>
      <SplitLine />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
