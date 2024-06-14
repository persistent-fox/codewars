import logo from './logo.svg';
import './App.css';

function App() {
	function myFind(callback) {
		for (let i = 0; i < this.length; i++) {
			if (callback(this[i])) return this[i];
		}
	}

	Array.prototype.myFind = myFind;
	const arr = [1, 2, 3, 2, 4, 5];
	const arr2 = [
		{ id: 1, name: 'Jason' },
		{ id: 2, name: 'Tom Riddle' },
		{ id: 3, name: 'Rita Bright' },
	];
	console.log(arr2.myFind(item => item.id === 2));

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
