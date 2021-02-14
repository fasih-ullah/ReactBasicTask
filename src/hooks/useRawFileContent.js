import React, { useState, useEffect } from "react";
import webServices from "../webServices/webServiceHandler";

function useRawFileContent(url) {
    const [content, setContent] = useState({text:[], loading: false, error: null});
    let isMounted = true;
    useEffect(() => {
      setContent({...content, loading: true});
      webServices.getUrlData(url).then(_data => {
        setContent({...content, text: _data, loading: false});
      }).catch(err => {
        setContent({...content, error: err, loading: false});
      }) 
      return () => { isMounted = false };
    }, [url]);
    return content;
}

export default useRawFileContent