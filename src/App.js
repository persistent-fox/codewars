import logo from './logo.svg';
import './App.css';

function App() {
	function divisors(num) {
		const arr = [];
		for (let i = 2; i < num; i++) {
			if (num % i === 0) {
				arr.push(i);
			}
		}
		return arr.length ? arr : `${num} is prime`;
	}

	divisors(12);

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
