import logo from './logo.svg';
import './App.css';

function App() {
	function stray(arr) {
		return arr.reduce((acc, item) => {
			return item === acc ? acc : item;
		});
	}

	console.log(stray([1, 1, 2, 1, 1]));

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
