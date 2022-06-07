// Import data
import {postings} from './postings'
// Import components
import './App.css';
import Directory from './Components/directory'
import Gallery from './Components/gallery'
import Searchbar from './Components/searchbar'
import Sidebar from './Components/sidebar'

const App = () => {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Searchbar />
        <Directory />
        <Sidebar />
        <Gallery postings={postings} />
      </div>
    </div>
  );
}

export default App;
