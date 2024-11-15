import { useEffect, useState } from "react";
import { fetchMovies } from "../utils/api";

interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export function useMovie() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("avenger");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const getMovies = async () => {
          setIsLoading(true);
          const fetchedMovies = await fetchMovies(searchQuery);
          setMovies(fetchedMovies);
          setIsLoading(false);
        };
    
        getMovies();
    }, [searchQuery]);

    return {
        movies,
        setMovies,
        searchQuery,
        setSearchQuery,
        isLoading,
        setIsLoading
    }
}