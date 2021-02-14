import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

import webServices  from "./webServices/webServiceHandler";
import SearchBar from './components/SearchBar';
import ListElementContainer from './components/ListElementContainer';
import useRawFileContent from './hooks/useRawFileContent';
import Content from "./components/Content";

function App() {
  const [username, setUsername] = useState("")
  const gistData = useSearchHandler(username);
  // let [isContentShown, setIsContentShown] = useState(false);
  // let [rawFileURL, setRawFileURL] = useState("");
  // const objRawFile = useRawFileContent(rawFileURL);

  return (
    <div className="App">
      <div className = "title">
          Code Task Code Byte
      </div>
      <SearchBar  onSearchHandler={setUsername}/>
      <ListElementContainer gistData={gistData.data} loading = {gistData.loading} />
      {/* <div style={{ width:'100%'}}>
                    <Content content={objRawFile.text} />  
                </div> */}
    </div>
  );
}


function useSearchHandler(username) {
    const [userGistData, setUserGistData] = useState({error:'', loading: false, data:null});

    useEffect(() => {
      let isMounted = false;
      setUserGistData({...userGistData, loading: true});
      webServices.getGistUserData(username).then(_data => {
        setUserGistData({...userGistData, data: _data, loading: false});
      }).catch(err => {
        setUserGistData({...userGistData, error: err, loading: false});
      }) 
      return () => { isMounted = false };
    }, [username]);

    return userGistData;
}

export default App;
