import logo from './logo.svg';
import './App.css';

function App() {
	const binaryArrayToNumber = arr => {
		return parseInt(arr.join(''), 2);
	};
	console.log(binaryArrayToNumber([0, 0, 0, 1]));
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
