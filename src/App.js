import logo from './logo.svg';
import './App.css';

function App() {
	const countBits = function (n) {
		let count = 0;
		while (Math.round(n / 2) >= 1) {
			if (Math.floor(n % 2)) {
				count++;
			}
			n = n / 2;
		}
		return count;
	};

	console.log(countBits(9));
	console.log(countBits(12));

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
