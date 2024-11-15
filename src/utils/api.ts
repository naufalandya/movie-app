import axios from "axios";

const apiKey = "cb8e13c6";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface OmdbResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
  Error?: string;
}

export const fetchMovies = async (query: string = "avenger"): Promise<Movie[]> => {
  try {
    const response = await axios.get<OmdbResponse>("https://www.omdbapi.com/", {
      params: {
        s: query,
        apikey: apiKey,
      },
    });

    if (response.data.Response === "True") {
      return response.data.Search;
    } else {
      console.error("Error:", response.data.Error);
      return [];
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
