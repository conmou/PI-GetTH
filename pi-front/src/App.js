import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import Day from './DayAverage'
import Min from './Min';


function App () {
    return(
		<div class="container" className="App">
			<Routes>
				<Route path="/day" element={ <Day /> } />
				<Route path="/" element={ <Min /> } />
			</Routes>
		</div>
	)
}

export default App;