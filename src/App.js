import logo from './logo.svg';
import './App.css';

function App() {
	function removeUrlAnchor(url) {
		return url.split('#').length >= 2 ? url.split('#').slice(0, 1).join('') : url;
	}

	console.log(removeUrlAnchor('www.codewars.com'));

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
