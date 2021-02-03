import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  const [novoTexto, setNovoTexto] = useState('Open up App.js to start working on your app!');
  return (
    <View style={styles.container}>
      <Text>{novoTexto}</Text>
      <Button title="Alterar texto principal!" onPress={()=>setNovoTexto("Texto alterado com sucesso!")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
