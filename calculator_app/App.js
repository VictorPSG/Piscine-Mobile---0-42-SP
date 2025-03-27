import React, {useState} from 'react';
import { 
  View, 
  Text, 
  StatusBar, 
  TouchableOpacity, 
} from 'react-native';
import { responsive } from './style/responsive.js';
import { styles } from './style/styles.js';
import { handle_press } from './calculator.js';
import { ScrollView } from 'react-native';

export default function App() {
	const dynamicStyles = responsive();
	const [currentValue, setCurrentValue] = useState("0");
	const [currentResult, setResult] = useState("0");
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topSection}>
        <View style={dynamicStyles.headerStyle}>
          <Text style={styles.headerTitle}>Calculator</Text>
        </View>
        <View style={dynamicStyles.displayStyle}>
  			<ScrollView 
    			horizontal 
    			showsHorizontalScrollIndicator={false}
    			contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end'}}
  			>
				<Text style={dynamicStyles.displayTextStyle}>{currentValue}</Text>
			</ScrollView>
			<ScrollView 
    			horizontal 
    			showsHorizontalScrollIndicator={false}
    			contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end'}}
  			>
				<Text style={dynamicStyles.displayTextStyle}>{currentResult}</Text>
			</ScrollView>
        </View>
    </View>
      <View style={styles.buttonsArea}>
        <View style={dynamicStyles.rowStyle}>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press(7, setCurrentValue, currentValue)}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press(8, setCurrentValue, currentValue)}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press(9, setCurrentValue, currentValue)}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press('/', setCurrentValue, currentValue)}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonsArea}>
        <View style={dynamicStyles.rowStyle}>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press(4, setCurrentValue, currentValue)}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press(5, setCurrentValue, currentValue)}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press(6, setCurrentValue, currentValue)}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press('*', setCurrentValue, currentValue)}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonsArea}>
        <View style={dynamicStyles.rowStyle}>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press(1, setCurrentValue, currentValue)}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press(2, setCurrentValue, currentValue)}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press(3, setCurrentValue, currentValue)}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press('-', setCurrentValue, currentValue)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonsArea}>
        <View style={dynamicStyles.rowStyle}>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press(0, setCurrentValue, currentValue)}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press('.', setCurrentValue, currentValue)}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press('=', setCurrentValue, currentValue, currentResult, setResult)}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press('+', setCurrentValue, currentValue)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsArea}>
        <View style={dynamicStyles.rowStyle}>
          <TouchableOpacity style={dynamicStyles.buttonStyle}  onPress={() =>handle_press("AC", setCurrentValue, currentValue, currentResult, setResult)}>
            <Text style={styles.buttonAc}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={dynamicStyles.buttonStyle} onPress={() =>handle_press('C', setCurrentValue, currentValue)}>
            <Text style={styles.buttonAc}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </View>
  );
}