import React, { useState, useEffect } from "react";
import webServices from "../webServices/webServiceHandler";

function useGistFork(url) {
    const [forkData, setForkData] = useState({data:[], loading: false, error: null});

    useEffect(() => {
      let isMounted = true;
      setForkData({...forkData, loading: true});
      webServices.getUrlData(url).then(_data => {
        setForkData({...forkData, data: _data, loading: false});
      }).catch(err => {
        setForkData({...forkData, error: err, loading: false});
      }) 
      return () => { isMounted = false };
    }, [url]);

    return forkData;
}

export default useGistFork