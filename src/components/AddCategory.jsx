import { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {
	// estamos evitando el two way databinding??
	const [inputValue, setInputValue] = useState('');

	const onInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const onSubmit = (event) => {
		const newValueSanitized = inputValue.trim();
		event.preventDefault();
		if (newValueSanitized.length <= 1) {
			return;
		}
		onAddCategory(newValueSanitized);
		setInputValue('');
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<input value={inputValue} onChange={onInputChange} type="text" placeholder="Buscar gifs" />
			</form>
		</>
	);
};
