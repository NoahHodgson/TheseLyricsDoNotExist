import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container, FormControl, InputGroup, Image } from 'react-bootstrap';
import './App.css';
import { TitleBar } from './components/TitleBar';

function App() {
  const [values, setValues] = useState({artist:"", songTitle: "", songLyrics:""})

  function setArtist(artist:string){setValues({...values, artist:artist})}

  function setSong(songLyr:string, songTitle:string){setValues({...values, songTitle: songTitle, songLyrics:songLyr})}

  function clearAll(){setValues({...values, artist:"", songTitle: "", songLyrics:""})}

  return ( 
    <div className="App">
      <TitleBar/>
      <br></br>
      <Container style={{justifyContent:"center"}}>
        {""===values.artist ? 
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search for an artist"
            aria-label="Artist" style={{ marginLeft:"25%", maxWidth: "50%"}}/>
          <Button size="sm" variant="outline-secondary" id="button" style={{}}>
            <Image src="https://img.icons8.com/ios-filled/344/search--v2.png" alt="search" style={{ width: "60px", height: "auto" }} />
          </Button>
        </InputGroup> : 
        <></>}
      </Container>
    </div>
  );
}

export default App;
