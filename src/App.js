import { BrowserRouter } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import './style/global.scss';

function App() {
	return (
		<BrowserRouter>
			<Layout />
		</BrowserRouter>
	);
}

export default App;
