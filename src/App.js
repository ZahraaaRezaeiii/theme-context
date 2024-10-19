import './App.css';
import { ThemeProvider } from './ThemeContext';
import { Theme } from './Theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Theme></Theme>
      </ThemeProvider>
    </div>
  );
}

export default App;
