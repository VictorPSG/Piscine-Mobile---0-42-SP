import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  StatusBar, 
  TouchableOpacity, 
  useWindowDimensions 
} from 'react-native';

export default function App() {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;

  // Ajustes dinâmicos para responsividade em diferentes orientações
  const headerStyle = { ...styles.header}
    if(isPortrait)
    {
      headerStyle.paddingTop = 50;
      headerStyle.paddingBottom = 20;
    }
    else
    {
      headerStyle.paddingTop = 20;
      headerStyle.paddingBottom = 10;
    }

  const displayStyle = {...styles.display}
    if(isPortrait)
      displayStyle.padding = 16;
    else
      displayStyle.padding = 8;

  const rowStyle = { ...styles.row}
    if(isPortrait)
      rowStyle.marginBottom = 6;
    else
      rowStyle.marginBottom = 3;

  const buttonStyle = {...styles.button}
  if(isPortrait)
    buttonStyle.paddingVertical = 10;
  else
    buttonStyle.paddingVertical = 5;

  const displayTextStyle = {...styles.displayText}
    if(isPortrait)
    {
      displayTextStyle.fontSize = 48;
      displayTextStyle.paddingHorizontal = 26;
    }
    else
    {
      displayTextStyle.fontSize = 36;
      displayTextStyle.paddingHorizontal = 84;
    }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Seção superior com cabeçalho e display */}
      <View style={styles.topSection}>
        <View style={headerStyle}>
          <Text style={styles.headerTitle}>Calculator</Text>
        </View>
        <View style={displayStyle}>
          <Text style={displayTextStyle}>0</Text>
          <Text style={displayTextStyle}>0</Text>
        </View>
      </View>

      {/* Área dos botões alinhada na parte de baixo */}
      <View style={styles.buttonsArea}>
        <View style={rowStyle}>
          <TouchableOpacity style={buttonStyle}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonStyle}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonStyle}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonStyle}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={rowStyle}>
          <TouchableOpacity style={buttonStyle}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonStyle}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonStyle}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonStyle}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={rowStyle}>
          <TouchableOpacity style={buttonStyle}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonStyle}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonStyle}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonStyle}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={rowStyle}>
          <TouchableOpacity style={buttonStyle}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonStyle}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonStyle}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonStyle}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={rowStyle}>
          <TouchableOpacity style={buttonStyle}>
            <Text style={styles.buttonAc}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonStyle}>
            <Text style={styles.buttonAc}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // Seção superior ocupa o espaço restante, mantendo o cabeçalho e o display no topo
  topSection: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    backgroundColor: '#6200ee',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  display: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  displayText: {
    color: '#333',
  },
  // Área dos botões sempre fica na parte inferior
  buttonsArea: {
    padding: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
  },
  buttonAc: {
    fontSize: 24,
    color: 'red',
  },
});
