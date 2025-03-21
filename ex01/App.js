import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [text, newText] = useState("A Simple Text")

  const handlePress = () =>{
    newText(prevText => (prevText === "A Simple Text" ? "Hello, World!" : "A Simple Text"));
    console.log("Button pressed");
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    gap: 16,
  },
  button: {
    backgroundColor: '#F6F6F6',
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 48,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  text: {
    backgroundColor: '#9bbf9e',
    color: 'white',
    padding: 10,
    paddingHorizontal: 48,
    borderRadius: 10, 
    fontSize: 30,
  },
});