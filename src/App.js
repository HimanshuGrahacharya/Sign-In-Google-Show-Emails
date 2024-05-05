import "./App.css";

import LoginButton from "./Components/login";
import LogoutButton from "./Components/logout";
import { useEffect } from "react";
import { gapi } from "gapi-script";
const clientId =
  "264497336364-odq4po0p3itht7bpminpohspji9p55s2.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  // var accesToken = gapi.auth.getToken().access_Token;
  return (
    <div style={{display:"flex", alignItems:"center",justifyContent:"center", marginTop:"20vh"}}>
      <div className="App">
        <LoginButton />
        <LogoutButton />
      </div>
    </div>
  );
}

export default App;
