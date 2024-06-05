import './style/App.scss';
import './components/Widget/Widget.scss';
import './components/Button/Button.scss';
import AppRouter from "./Router";

function App() {
    return (
        <div className="App">
            <AppRouter />
        </div>
    );
}

export default App;
