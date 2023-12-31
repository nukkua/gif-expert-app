import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const getImages = async () => {
		const newImages = await getGifs(category);
		setImages(newImages);
		setIsLoading(false);
	};
	useEffect(() => {
		getImages();
	}, []);

	return {
		images,
		isLoading
	};
};

// Este custom hook funcionad de la siguiente forma:
// por dentro va renderizar, ambos estados, y luego de que cambien habra una rerenderizacion
