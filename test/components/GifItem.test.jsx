import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('first test', () => {
	const gif = {
		title: 'One punch man',
		url: 'https://media2.giphy.com/media/X8cs1EFGQgVL5bhVDH/giphy.gif?cid=4720ee8dr73naon14e3aqfihvo8hvm4k48hgwhw3sdtnn4k0&ep=v1_gifs_search&rid=giphy.gif&ct=g'
	};
	test('Matching Snapshot testing', () => {
		const { container } = render(<GifItem {...gif} />);
		expect(container).toMatchSnapshot();
	});
	test('Debe de matchear el url con el que tengo en mi constante gif', () => {
		render(<GifItem {...gif} />);
		// expect(screen.getByRole('img').src).toBe(gif.url);
		// expect(screen.getByRole('img').alt).toBe(gif.title);
		const { src, alt } = screen.getByRole('img');
		expect(src).toBe(gif.url);
		expect(alt).toBe(gif.title);
	});
	test('Debe de matchear el titulo su innerHTML con el nuestro', () => {
		render(<GifItem {...gif} />);
		expect(screen.getByText(gif.title).innerHTML).toBeTruthy();
	});
});
