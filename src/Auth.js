import "@aws-amplify/ui-react/styles.css";
import App from "./App";

import {

  View,
  withAuthenticator,
  Card,
} from "@aws-amplify/ui-react";


function Auth(){ 
  return (
<View >
  <Card style={{ margin: 0, padding: 0 }} />
  <App />
</View>

  )
}

export default withAuthenticator(Auth);