import { getGifsBySearch } from "../adapters/giphyAdapters"

function GifSearch({props}) {
    const {gifs, setGifs, error, setError, searchTerm, setSearchTerm} = props

    const handleSubmit = async (event) => {
        event.preventDefault();
        const [gifData, error] = await getGifsBySearch(searchTerm)
        if (gifData) setGifs(gifData.data)
        if (error) setError(error)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" className="form-control" id="searchInput" />
            <button type="submit" className="btn btn-success">Search</button>
        </form>
    )
}

export default GifSearch