import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Testing <GifApp>', () => {
	test('should', () => {
		render(<GifExpertApp />);
		screen.debug();
	});
});
