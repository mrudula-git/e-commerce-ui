const SearchBar = () => {
  return (
    <div className="max-w-2xl mx-auto my-8">
      <input
        type="text"
        placeholder="Search a product"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
