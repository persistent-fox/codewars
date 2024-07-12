import logo from './logo.svg';
import './App.css';

function App() {
	function minValue(val) {
		const arr = Array.from(new Set(val)).sort((a, b) => a - b);
		return +arr.join('');
	}
	console.log(minValue([5, 7, 5, 9, 7]));
	console.log(minValue([1, 3, 1]));
	console.log(minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]));

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
