import {StyleSheet, View} from 'react-native';

export default () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#f0f0f0',
  },
});
