import "./models.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ModelsSlider from "../ModelsImageSlider/modelsSlider";
import { FaArrowRightLong } from "react-icons/fa6";

function models() {
  return (
    <div className="models-container section-padding">
      <h1>Models</h1>
      <Tabs>
        <TabList>
          <div className="models-tabs">
            <Tab>All</Tab>
            <Tab>Prishtina</Tab>
            <Tab>Peja</Tab>
            <Tab>Ferizaji</Tab>
            <Tab>Mitrovica</Tab>
            <Tab>Gjakova</Tab>
            <Tab>Gjilani</Tab>
            <Tab>Prizreni</Tab>
          </div>
          <div className="models-viewAll">
            <p>View All</p>
            <FaArrowRightLong />
          </div>
        </TabList>
        <TabPanel>
          <ModelsSlider />
        </TabPanel>
        <TabPanel>
          <h2>Under Construction...</h2>
        </TabPanel>
        <TabPanel>
          <h2>Under Construction...</h2>
        </TabPanel>
        <TabPanel>
          <h2>Under Construction...</h2>
        </TabPanel>
        <TabPanel>
          <h2>Under Construction...</h2>
        </TabPanel>
        <TabPanel>
          <h2>Under Construction...</h2>
        </TabPanel>
        <TabPanel>
          <h2>Under Construction...</h2>
        </TabPanel>
        <TabPanel>
          <h2>Under Construction...</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default models;
