import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IconButton from './IconButton.tsx';

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
        imgKey={'icon_back'}
        onPress={onBackPress}
      />
      <Text style={styles.title}>{title}</Text>
      <IconButton
        show={showCloseIcon}
        imgKey={'icon_close'}
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
