import {StyleSheet, View} from 'react-native';
import Header from '../components/Header.tsx';
import IconButton from '../components/IconButton.tsx';
import images from '../assets/Asset.tsx';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header
        title={'帐号管理'}
        showBackIcon={true}
        showCloseIcon={true}
        onBackPress={function (): void {
          console.log('onBackPress...');
        }}
        onClosePress={function (): void {
          console.log('onClosePress...');
        }}
      />
      <IconButton
        show={true}
        asset={images.icon_add}
        onPress={function (): void {
          console.log('onClosePressAddIcon...');
        }}
        width={40}
        height={40}
        style={styles.addIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  addIcon: {
    position: 'absolute',
    bottom: 64,
    right: 40,
  },
});

export default Home;
