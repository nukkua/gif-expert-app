import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components';

describe('Test on <AddCategory>', () => {
	test('debe cambiar el valor de la caja de texto', () => {
		render(<AddCategory onAddCategory={() => {}} />);
		const input = screen.getByRole('textbox');
		fireEvent.input(input, { target: { value: 'Saitama' } });

		expect(input.value).toBe('Saitama');
	});
	test('debe de llamar onAddCategory si el input tiene un valor', () => {
		const inputValue = 'Saitama';
		const onAddCategory = jest.fn(); // jest function => marcada como un mock
		// un mock es una simulacion, en este caso no es la implementacion real de la funcion
		// es una simulacion

		render(<AddCategory onAddCategory={onAddCategory} />);

		const input = screen.getByRole('textbox'); // pasa por referencia
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(input.value).toBeFalsy();
		expect(input.value).toBe('');

		expect(onAddCategory).toHaveBeenCalled();
		expect(onAddCategory).toHaveBeenCalledTimes(1);
		expect(onAddCategory).toHaveBeenCalledWith(inputValue);
	});

	test('no debe de llamar onAddCategory si el input.length <= 1', () => {
		const inputValue = 'a';
		const onAddCategory = jest.fn();

		render(<AddCategory onAddCategory={onAddCategory} />);

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(input.value).toBeTruthy();
		expect(input.value).toBe(inputValue);

		expect(onAddCategory).toHaveBeenCalledTimes(0);
		expect(onAddCategory).not.toHaveBeenCalled();
	});
});

// Siempre debo pensar que puedo evaluar segun como se comporta el functional component o el hook
// En este caso:
// 1. Modifico un input, asi que voy a querer revisar su valor
// 2. Ademas de un input hago un submit, y dentro de este submit ejecuto mas procedimientos
// 3. Y evaluo ambos casos, cuando mando un input menor o igual a 1
// 4. Evaluo cuando el valor del input es indicado
// const onAddCategory = jest.fn();
