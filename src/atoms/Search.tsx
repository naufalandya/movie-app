import React from "react";

interface SearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  return (
    <div className="mb-6 w-full max-w-md">
        <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for a movie..."
        className="w-full p-4 bg-neutral-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />

    </div>
  );
};

export default Search;
