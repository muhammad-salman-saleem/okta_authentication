import { Button, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const App = () => {
  const [loading, setLoading] = useState(false); 
  const location = useLocation();
  const githubLogin = "https://dev-84826579.okta.com/oauth2/v1/authorize?idp=0oagwpfpjkU4wK2Jq5d7&client_id=0oagwuiqhhdQGdUa05d7&response_type=code&response_mode=fragment&scope=openid%20email%20profile&redirect_uri=http://localhost:3000/authorization-code/callback&state=WM6D&nonce=YsG76jo";
  
  useEffect(() => {
    const urlString = window.location.href;
    const hashIndex = urlString.indexOf("#");
    const hashString = urlString.substring(hashIndex + 1);
    const params = hashString.split("&");
    for (let i = 0; i < params.length; i++) {
      const param = params[i].split("=");
      if (param[0] === "code") {
        console.log("Value of 'code' parameter:", param[1]);
        const codeValue = param[1];
        console.log("codeValue", codeValue);
        break;
      }
    }
  }, []);

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false); 
    }, 2000); 
  };

  return (
    <div>
      {
        loading?<CircularProgress size={24} />:
        <Button 
        component="a" 
        href={githubLogin} 
        variant="outlined" 
        onClick={handleButtonClick} 
        disabled={loading} 
      >
        Login With Google
      </Button>
      }
 
    </div>
  );
};

export default App;
