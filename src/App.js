import logo from './logo.svg';
import './App.css';

function App() {
	const sequenceSum = (begin, end, step) => {
		let count = 0;
		for (let i = begin; i <= end; i += step) {
			count += i;
		}
		return count;
	};

	console.log(sequenceSum(2, 6, 2));
	console.log(sequenceSum(1, 5, 3));

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
