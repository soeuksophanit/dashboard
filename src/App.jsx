import React from "react";
import Container from "./components/Container";
import ProjectBoard from "./components/ProjectBoard";
import NavBar from "./components/NavBar";
import { useData } from "./hooks/useData";
import Messages from "./components/Messages";
import { messages } from "./data/message";
import SideBar from "./components/SideBar";

function App() {
  const { categories, users, addNewProject } = useData();
  const classes =
    "bg-white px-[32px] rounded-[32px] grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-[32px] h-[90vh] overflow-hidden";

  return (
    <Container className={classes}>
      <SideBar />
      <div className="col-[2/3] row-[1/3]">
        <main className="grid grid-cols-[1fr_auto] grid-rows-[auto_1fr] gap-3">
          <NavBar />
          <ProjectBoard
            categories={categories}
            users={users}
            addNewProject={addNewProject}
          />
          <Messages person={messages[0]} />
        </main>
      </div>
    </Container>
  );
}

export default App;
