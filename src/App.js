import logo from './logo.svg';
import './App.css';

function App() {
	function sumDigits(number) {
		return Math.abs(number)
			.toString()
			.split('')
			.reduce((acc, el) => acc + +el, 0);
	}

	console.log(sumDigits(99));
	console.log(sumDigits(-32));

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
