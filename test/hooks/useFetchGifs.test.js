import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
	test('debe de regresar el estado inicial del hook', () => {
		const { result } = renderHook(() => useFetchGifs('One Punch'));
		const { images, isLoading } = result.current;

		expect(images.length).toBe(0);
		expect(isLoading).toBeTruthy();
	});
	test('debe de retornar una lista de imagenes, y isLoading == false', async () => {
		const { result } = renderHook(() => useFetchGifs('One Punch'));

		await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0));

		const { images, isLoading } = result.current;

		expect(images.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});

// Evaluamos el hook en funcion del retorno, lo mismo el getGif, o en funcion de las funciones ejecutadas
