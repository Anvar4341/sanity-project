import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";
import styled from "styled-components"
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";


function App() {
  return (
    <BrowserRouter>
    <Container>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<MainContainer/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Container>
    </BrowserRouter>
  )
}

const Container = styled.div`
display: flex;
height: 97vh;
box-sizing: border-box;
background-color: #e4e4e4; 
border-radius: 2rem;
`

export default App;



