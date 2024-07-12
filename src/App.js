import logo from './logo.svg';
import './App.css';

function App() {
	function flattenAndSort(array) {
		return array.flat(Infinity).sort((a, b) => a - b);
	}
	console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));

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
