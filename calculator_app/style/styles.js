import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor: '#fff',
  },
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
