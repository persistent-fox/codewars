import logo from './logo.svg';
import './App.css';

function App() {
	function sumOfMinimums(arr) {
		return arr.reduce((acc, el) => acc + Math.min(...el), 0);
	}

	console.log(
		sumOfMinimums([
			[1, 2, 3, 4, 5],
			[5, 6, 7, 8, 9],
			[20, 21, 34, 56, 100],
		])
	);

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
