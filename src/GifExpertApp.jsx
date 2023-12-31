import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
	// nunca meter hooks a condicionales, por que pierde la referencia de cual es el estado
	const [categories, setCategories] = useState(['One Punch Man']);

	const addCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;
		setCategories([newCategory, ...categories]);
		// setCategories((cat) => [...cat, 'Valorant']);
	};
	return (
		<>
			<h1>GifExpertApp</h1>
			<AddCategory onAddCategory={(value) => addCategory(value)} />

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};
