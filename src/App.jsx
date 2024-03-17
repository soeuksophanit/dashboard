import React, { useState } from "react";
import Container from "./components/Container";
import ProjectBoard from "./components/ProjectBoard";
import { categories } from "./data/category";
import { users } from "./data/user";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";

function App() {
  return (
    <Container>
      <NavBar />
      <ProjectBoard categories={categories} users={users} />
    </Container>
  );
}

export default App;
