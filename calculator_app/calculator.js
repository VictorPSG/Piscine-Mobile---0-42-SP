import { create, all } from 'mathjs';
const math = create(all);

export function handle_press(button, setCurrentValue, currentValue, currentResult, setResult) {
    currentValue = currentValue || '';
	
    if (button === 'C') {
        const operators = ['+', '-', '/', '*', '.'];

        if (operators.includes(currentValue.slice(-1))) {
            setCurrentValue(currentValue.slice(0, -1));
        } else if (currentValue.length > 1) {
            setCurrentValue(currentValue.slice(0, -1));
        } else {
            setCurrentValue('0');
        }
        return;
    } 
    else if (currentValue === '0' && button !== 'AC' && button != '=') {
        setCurrentValue('' + button);
    }
    else if (button === "AC") {
        setCurrentValue('0');
		setResult('0');
        return;
    }
	else if(button == '='){
		try {
			const result = math.evaluate(currentValue);
			setResult(result.toString());
			setCurrentValue('0');
			return;
		} catch (error) {
			setResult("Err");
			setCurrentValue('0');
			return null;
		}
	}
    else {
        setCurrentValue(currentValue + button);
    }
}

