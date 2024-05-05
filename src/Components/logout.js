import { GoogleLogout } from "react-google-login";
const clientId =
  "264497336364-odq4po0p3itht7bpminpohspji9p55s2.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Log out successfull");
  };
  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;

