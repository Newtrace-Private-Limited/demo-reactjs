import { withAuthenticator } from '@aws-amplify/ui-react';

function App(signOut) {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <div onClick={signOut} style={{ marginTop: '8px', marginLeft: '5px' , cursor: "pointer"}}/> sign out
    </div>

    
  );
}

export default withAuthenticator(App);
