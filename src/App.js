import './App.css';
import Clock from './component/clock'
import { DateTimeContextProvider } from './context/datetimecontext';

function App() {

    return (
        <DateTimeContextProvider>

            <div className="App">

                <Clock></Clock>

            </div>

        </DateTimeContextProvider>
    );
}

export default App;
