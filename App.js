import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Navigation } from './src/infrastructure/navigation';
export default function App() {
  return (
      
    <View style={styles.container}>
      <Navigation />
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
