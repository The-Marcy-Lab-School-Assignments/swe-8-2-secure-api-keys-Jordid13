import { useEffect, useState } from 'react';
import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch';


function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [gifs, setGifs] = useState([]);
  const [error, setError] = useState(null);

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <div className="ui container">
        <GifSearch props={{gifs, setGifs, error, setError, searchTerm, setSearchTerm}}></GifSearch>
        <br></br>
        <GifContainer props={{gifs, setGifs, error, setError}} />
      </div>
    </div>
  );
}

export default App;
