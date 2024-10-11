import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ourmodels.scss";
import Waterfall from "../../components/Waterfall/waterfall";

function ourmodels() {
  return (
    <div className="ourmodels-container">
      <h1>OUR MODELS</h1>
      <Tabs>
        <TabList>
          <Tab>Any</Tab>
          <Tab>Kids</Tab>
          <Tab>Female</Tab>
          <Tab>Male</Tab>
          <Tab>Mature</Tab>
        </TabList>

        <TabPanel>
          <Waterfall />
        </TabPanel>
        <TabPanel>
          <h1>Under Construction...</h1>
        </TabPanel>
        <TabPanel>
          <h1>Under Construction...</h1>
        </TabPanel>
        <TabPanel>
          <h1>Under Construction...</h1>
        </TabPanel>
        <TabPanel>
          <h1>Under Construction...</h1>
        </TabPanel>
      </Tabs>
      <button>See All Models</button>
    </div>
  );
}

export default ourmodels;
