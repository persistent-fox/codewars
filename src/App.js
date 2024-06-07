import logo from './logo.svg';
import './App.css';

function App() {
	const changeArr = arr => arr.map((item, index) => `${index + 1}: ${item}`);

	console.log(changeArr(['a', 'b', 'c']));

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
