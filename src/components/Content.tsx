import Search from "../atoms/Search";
import { useMovie } from "../hooks/useMovie";

const Content: React.FC = () => {
  const { movies, searchQuery, setSearchQuery, isLoading } = useMovie();

  return (
    <main className="p-6 bg-neutral-800 min-h-screen">
      <div className="container mx-auto">
        
      <div className="flex items-center justify-between">
        <h2 className="text-white text-lg font-semibold">Result:</h2>
        <div className="flex-grow flex justify-end">
            <Search
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
      </div>


        {isLoading && <p className="text-center text-white">Loading movies...</p>}

        {!isLoading && movies.length === 0 && (
          <p className="text-center text-white">No movies found.</p>
        )}

        {!isLoading && movies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <div
                key={movie.imdbID}
                className="bg-neutral-900 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/300x450"
                  }
                  alt={movie.Title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white truncate">{movie.Title}</h3>
                  <p className="text-sm text-neutral-400">{movie.Year}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Content;
