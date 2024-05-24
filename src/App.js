import logo from './logo.svg';
import './App.css';

function App() {
	function duplicateCount(text) {
		const obj = {};
		text
			.toLowerCase()
			.split('')
			.map(item => {
				if (obj[item]) {
					obj[item] += 1;
				} else {
					obj[item] = 1;
				}
			});
		return Object.values(obj).filter(item => item > 1).length;
	}

	console.log(duplicateCount('indivisibility'));
	console.log(duplicateCount('Indivisibilities'));

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
