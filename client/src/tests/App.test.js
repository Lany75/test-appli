import { expect } from "chai";
import { shallow } from "enzyme";
import React from "react";

import App from "../App";
import NewTask from "../component/newTask/NewTask";
import TaskList from "../component/taskList/TaskList";

describe("<App />", () => {
  it("contains a h1 tag", () => {
    const application = shallow(<App />);
    const h1Tag = application.find("h1");
    expect(h1Tag.text()).to.be.equal("TODO LIST");
  });

  it("contains a list of tasks", () => {
    const application = shallow(<App />);
    expect(application).to.contain(<TaskList />);
  });

  it("contains a add task container", () => {
    const application = shallow(<App />);
    expect(application).to.contain(<NewTask />);
  });
});
