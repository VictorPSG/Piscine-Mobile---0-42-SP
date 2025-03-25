import React from 'react';
import { 
  View, 
  Text, 
  StatusBar, 
  TouchableOpacity, 
} from 'react-native';
import { responsive } from './style/responsive.js';
import { styles } from './style/styles.js';
import { handle_press } from './calculator.js';

export default function App() {
  const dynamicStyles = responsive();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topSection}>
        <View style={dynamicStyles.headerStyle}>
          <Text style={styles.headerTitle}>Calculator</Text>
        </View>
        <View style={dynamicStyles.displayStyle}>
          <Text style={dynamicStyles.displayTextStyle}>0</Text>
          <Text style={dynamicStyles.displayTextStyle}>0</Text>
        </View>
      </View>

      <View style={styles.buttonsArea}>
        <View style={dynamicStyles.rowStyle}>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press(7)}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press(8)}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press(9)}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonsArea}>
        <View style={dynamicStyles.rowStyle}>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press(4)}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press(5)}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press(6)}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonsArea}>
        <View style={dynamicStyles.rowStyle}>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press(1)}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press(2)}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press(3)}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonsArea}>
        <View style={dynamicStyles.rowStyle}>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press(0)}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press('=')}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsArea}>
        <View style={dynamicStyles.rowStyle}>
          <TouchableOpacity style={dynamicStyles.buttonStyle}  onPress={() =>handle_press("AC")}>
            <Text style={styles.buttonAc}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press('C')}>
            <Text style={styles.buttonAc}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </View>
  );
}