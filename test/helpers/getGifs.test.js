import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => {
	const randomCategory = 'One Punch Man';
	test('testeando el resultado del fetch que cumpla con el objeto que esperamos', async () => {
		const gifs = await getGifs(randomCategory);
		expect(gifs.length).toBeGreaterThan(0);
		expect(gifs[0]).toEqual({
			id: expect.any(String),
			title: expect.any(String),
			url: expect.any(String)
		});
	});
});

// Siempre debo pensar que puedo evaluar segun como se comporta el functional component o el hook
// En este caso:
// 1. Hago fetch a la API con una cierta categoria
// 2. Espero que me devuelva valores
// 3. Espero que me lo entregue en el formato que describi
