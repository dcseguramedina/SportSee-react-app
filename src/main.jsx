import {createRoot} from 'react-dom/client';
import App from '../src/App';
import './App.css';

// Find the HTML element with the id "root" where the React app will be mounted
const rootElement = document.getElementById("root");

// Ensure that the root element exists, throwing an error if it doesn't
if (!rootElement) {
    throw new Error("Failed to find the root element");
}

// Create a React root using the React 18 rendering API
const root = createRoot(rootElement);

// Render the React application into the root element
root.render(<App/>);
