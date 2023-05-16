import { useState, useEffect } from "react";
import axios from "axios";

function MarvelInfo() {
  const [avatar, setAvatar] = useState<string>("");
  const [comics, setComics] = useState<Array<any>>([]);
  const [movies, setMovies] = useState<Array<any>>([]);

  useEffect(() => {
    // Función para obtener el avatar del personaje Iron Man
    async function fetchAvatar() {
      const response = await axios.get(
        "https://gateway.marvel.com/v1/public/characters/1009368",
        {
          params: {
            apikey: "827f91c03de8dc5d43eb4c3e29d4245d86356848",
          },
        }
      );
      setAvatar(response.data.data.results[0].thumbnail.path);
    }

    // Función para obtener los cómics del personaje Iron Man
    async function fetchComics() {
      const response = await axios.get(
        "https://gateway.marvel.com/v1/public/characters/1009368/comics",
        {
          params: {
            apikey: "827f91c03de8dc5d43eb4c3e29d4245d86356848",
            orderBy: "-onsaleDate", // Ordenar por fecha de lanzamiento
          },
        }
      );
      setComics(response.data.data.results);
    }

    // Función para obtener las películas del personaje Iron Man
    async function fetchMovies() {
      const response = await axios.get(
        "https://gateway.marvel.com/v1/public/characters/1009368/movies",
        {
          params: {
            apikey: "827f91c03de8dc5d43eb4c3e29d4245d86356848",
          },
        }
      );
      setMovies(response.data.data.results);
    }

    fetchAvatar();
    fetchComics();
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Iron Man</h1>
      <img src={avatar} alt="Avatar de Iron Man" />
      <h2>Cómics</h2>
      <ul>
        {comics.map((comic) => (
          <li key={comic.id}>{comic.title}</li>
        ))}
      </ul>
      <h2>Películas</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MarvelInfo;