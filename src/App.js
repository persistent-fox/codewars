import logo from './logo.svg';
import './App.css';

function App() {
	function validatePIN(pin) {
		if (pin.length === 4 || pin.length === 6) {
			return pin.split('').reduce((acc, curr) => {
				console.log(Number(curr) % 1);
				if (Number(curr) % 1 !== 0 || curr === ' ') acc = false;
				return acc;
			}, true);
		} else {
			return false;
		}
	}

	console.log(validatePIN('-1.234'));

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
