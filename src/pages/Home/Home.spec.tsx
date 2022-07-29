import { act, render, screen } from '@testing-library/react';
import * as React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Home from './Home';

let container: HTMLDivElement | null = null;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();

	container = null;
});

jest.mock('../../components/Home/Home', () =>
	jest.fn(() => <div id="mocked">mock</div>),
);

describe('Test render Home', () => {
	it('Check if render', async () => {
		act(() => {
			render(<Home />, { container });
		});

		expect(screen.getByText('mock')).toBeInTheDocument();
		expect(screen.getByText('Hello World')).toBeInTheDocument();
	});
});
