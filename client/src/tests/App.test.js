import { expect } from "chai";
import { mount, shallow } from "enzyme";
import React from "react";

import App from "../App";
import NewTask from "../component/newTask/NewTask";
import TaskList from "../component/taskList/TaskList";

describe("<App />", () => {
  const application = shallow(<App />);

  it("contains a div tag with class name App", () => {
    expect(application.find(".App")).to.have.length(1);
  });

  it("contains a h1 tag", () => {
    const h1Tag = application.find("h1");
    expect(h1Tag).to.have.length(1);
    expect(h1Tag.text()).to.be.equal("TODO LIST");
  });

  it("contains a list of tasks", () => {
    expect(application.find(TaskList)).to.have.length(1);
  });

  it("contains a add task container", () => {
    expect(application.find(NewTask)).to.have.length(1);
  });
});
