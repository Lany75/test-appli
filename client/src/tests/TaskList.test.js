import { expect } from "chai";
import { mount, shallow } from "enzyme";
import React from "react";

import App from "../App";
import TaskComponent from "../component/taskComponent/TaskComponent";
import TaskList from "../component/taskList/TaskList";
import * as TaskContext from "../context/taskContext";

describe("<TaskList />", () => {
  const tachesTest = [{ name: "tache 1" }, { name: "tache 2" }];
  const taskList = shallow(<TaskList tasks={tachesTest} />);

  it("contains a h2 tag", () => {
    const h2Tag = taskList.find("h2");
    expect(h2Tag).to.have.length(1);
    expect(h2Tag.text()).to.be.equal("Liste des taches");
  });

  it("contains a ul tag", () => {
    const ulTag = taskList.find("ul");
    expect(ulTag).to.have.length(1);
  });

  it("contains 2 TaskComponent", () => {
    const taskComponent = taskList.find(".task-component");
    expect(taskComponent).to.have.length(2);
  });
});
