import logo from './logo.svg';
import './App.css';

function App() {
	function twoOldestAges(ages) {
		const arr = ages.sort((a, b) => a - b);
		return arr.slice(-2);
	}

	console.log(twoOldestAges([1, 2, 10, 8]));

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
