import React, { lazy, StrictMode } from 'react';
const App = lazy(() => import('./components/App'));
import { createRoot } from 'react-dom/client';

const container = document.querySelector('#root');
// Use hydrateRoot when the bug is solved
// import { hydrateRoot } from "react-dom/client";
// hydrateRoot(container, <App />)
const root = createRoot(container);
root.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
