import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import AddSportObject from "../Components/AdminComponents.js/AddSportObject";

const AdminPanel = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="SportObject"
        transition={false}
        id="noanim-tab-example"
      >
        <Tab eventKey="SportObject" title="Dodaj Obiekt Sportowy">
          <AddSportObject />
        </Tab>
        <Tab eventKey="Gym" title="Dodaj Salę do obiektu spotowego"></Tab>
        <Tab eventKey="contact" title="Więcj w przyszłości.." disabled></Tab>
      </Tabs>
    </>
  );
};
export default AdminPanel;
