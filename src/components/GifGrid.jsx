import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category);
	return (
		<>
			{isLoading && <h2>Cargando...</h2>}
			<h3>{category}</h3>
			<div className="card-grid">
				{images.map((image) => (
					<GifItem key={image.id} {...image} />
				))}
			</div>
		</>
	);
};

//NOTA
// El operador spread para cuando tengo un chingo de props como esta en el <GifItem>

// useEffect => tiene 2 parametros un callback, y la lista de dependencias
// la lista de dependencias vacia, me dice que solamente se va renderizar una vez
// lo que este dentro del callback

// NOTA
// Yo no necesito toda la data de cada objeto en el respuesta right?
// Graphql me permitiria seleccionar que campos quiero obtener
// Pero como no estamos usando Graphql, usaremos la funcion getGifs
// Que aparte de hacer el fetch, sanitiza los objetos

// OTRA NOTA ANASHE
// La cosa es que el <React.StrictMode> hace que la wea se renderize 2 veces,
// por eso vemos 2 consolelog del array de gifs
