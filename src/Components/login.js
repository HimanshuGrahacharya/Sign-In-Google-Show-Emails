import { GoogleLogin } from "react-google-login";

// Google Client ID
const clientId =
  "264497336364-odq4po0p3itht7bpminpohspji9p55s2.apps.googleusercontent.com";

function Login() {
  const onSuccess = async res => {
    console.log("Login Success! Current user: ", res.profileObj);

    // Once logged in successfully, make a request to the secured endpoint
    try {
      const response = await fetch("/secured", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${res.tokenId}`, // Pass the Google token as a Bearer token in the Authorization header
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch secured API");
      }

      const data = await response.json();
      console.log("Response from secured API:", data);
      // Handle the response as needed
    } catch (error) {
      console.error("Error fetching secured API:", error);
      // Handle errors
    }
  };

  const onFailure = res => {
    console.log("LOGIN FAILED! res:", res);
  };

  return (
    <div id="signInButton" style={{ margin: "2vh" }}>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
