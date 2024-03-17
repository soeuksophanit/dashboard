import React, { useState } from "react";
import Container from "./components/Container";
import ProjectBoard from "./components/ProjectBoard";
import NavBar from "./components/NavBar";
import { useData } from "./hooks/useData";

function App() {
  const { categories, users } = useData();

  return (
    <Container>
      <NavBar />
      <ProjectBoard categories={categories} users={users} />
    </Container>
  );
}

export default App;
