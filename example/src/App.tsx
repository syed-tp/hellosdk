import { Text, View, StyleSheet } from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
      <Text>Hello, im SDK's app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
