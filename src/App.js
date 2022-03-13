import React, { Component } from 'react';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import {  Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import FileUpload from "./pages/FileUpload";
import Home from "./pages/Home";
import HighChart from "./pages/HighChart";

//Vermont Kids Data

const AppRoutes = () => (
    <Routes >
        <Route path="/" element={<Layout/>} />
        <Route index element={<Home/>}/>
        <Route path="upload" element={<FileUpload/>}/>
        <Route path="chart" element={<HighChart/>}/>
    </Routes>
);

function App() {

  //const { user } = useAuthenticator((context) => [context.user]);
  //const { route } = useAuthenticator(context => [context.route]);
  //console.log(user);
  //console.log(route);

  return (

    <div className="App">
        <AppRoutes />
    </div>
  );
}

export default App;

/*

<BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="upload" element={<FileUpload/>}/>
                    <Route path="chart" element={<HighChart/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

{ user &&
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="upload" element={<FileUpload/>}/>
                    <Route path="chart" element={<HighChart/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        }
<Authenticator>
            {({ signOut, user }) => (
                <div className="App">
                    <p>
                        Hey {user.username}, welcome to my channel, with auth!
                    </p>
                    <button onClick={signOut}>Sign out</button>
                </div>
            )}
        </Authenticator>
 */
