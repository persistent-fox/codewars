import logo from './logo.svg';
import './App.css';

function App() {
	function validatePIN(pin) {
		return /^\d+$/.test(pin) && (pin.length === 4 || pin.length === 6);
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
