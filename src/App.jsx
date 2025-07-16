import {StrictMode} from 'react';
import {BrowserRouter} from 'react-router';
import {Provider} from 'react-redux';
import store from './store/index.js';
import PublicRoutes from './routes/PublicRoutes.jsx';

/**
 * <Provider store={store}>: Provides the Redux store to all components
 * <StrictMode>: Enables additional checks and warnings for the app
 * <BrowserRouter>: Sets up routing for the application
 * <PublicRoutes />: Contains the main routing logic for the app
 */

const App = () => (
    <Provider store={store}>
        <StrictMode>
            <BrowserRouter>
                <PublicRoutes/>
            </BrowserRouter>
        </StrictMode>
    </Provider>
);

export default App
