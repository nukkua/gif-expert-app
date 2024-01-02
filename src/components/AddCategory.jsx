import { useState } from 'react';
import PropTypes from 'prop-types';

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
			<form onSubmit={onSubmit} aria-label="form">
				<input value={inputValue} onChange={onInputChange} type="text" placeholder="Buscar gifs" />
			</form>
		</>
	);
};

AddCategory.protoTypes = {
	onAddCategory: PropTypes.func.isRequired
};
