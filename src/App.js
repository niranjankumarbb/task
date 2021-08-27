import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Link, Route,Switch} from 'react-router-dom'
import {connect } from 'react-redux'
import {Navbar, Nav} from 'react-bootstrap'
import Dashboard from './components/Dashboard/Dashboard.js'


function App(props) {

  return (
    <div >
       <BrowserRouter>
       <Navbar bg="info" variant="dark">
       <Navbar.Brand   href="#">COVID 19 ind- Daily Report</Navbar.Brand>        
       </Navbar>
        <Dashboard/>
       </BrowserRouter>
       </div>
   )
}
export default App