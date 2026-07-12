const Search = ({searchTem, setSearchTerm}) => {
    return (
        <div className="search">
            <div>
                <img src="/src/assets/search.svg" alt="search" />
                <input
                    type="text"
                    placeholder="Search through thousands of movies"
                    value={searchTem}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}
export default Search
