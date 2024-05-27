import logo from './logo.svg';
import './App.css';

function App() {
	function solution(str, ending) {
		return str.slice(-ending.length ? -ending.length : str.length) === ending;
	}
	console.log(solution('abc', ''));
	console.log(solution('keck', ''));

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
