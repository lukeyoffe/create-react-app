import * as React from 'react';
import Typography from '@mui/material/Typography';
import MyAppBar from './MyAppBar';
import Button from '@mui/material/Button'
import TrickButton from './TrickButton';


export default function App() {
  return (
    <div>
      <MyAppBar/>
      <body style={{margin: 15}}>
        <Typography variant="h5">
          If you want to make have your own website hosted on CSIL servers (or something, idk the specifics) and you have an account on CSIL:
        </Typography>
        <ol style={{maxWidth: "60%"}}>
          <li>Check if your home directory (the one you're logged into when you log in) has a public_html folder.  If not, make one</li>
          <li>Create an index.html file in the public_html folder, add some stuff to it, and go to:
            <br/><a href="https://sites.cs.ucsb.edu/~your-csil-username/">https://sites.cs.ucsb.edu/~your-csil-username/</a></li>
          <li>
            If you are are using npm for dependencies and you defined a build script in package.json,
            you can run:
            <br/><code>npm run build</code><br/>
            and then copy the contents of the build folder into
            the public_html folder, and you should be set.  I'm not sure how yarn works so I don't
            have anything to say about it.  If you have any questions, good luck!
          </li>
        </ol>
        <Typography variant="h6">
          Here is a button that serves absolutely no purpose:
        </Typography>
        <TrickButton/>
      </body>
    </div>

    
    
  );
}
