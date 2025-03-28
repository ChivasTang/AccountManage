import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IconButton from './IconButton.tsx';
import Asset from '../assets/Asset.tsx';

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
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
