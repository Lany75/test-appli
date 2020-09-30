import { expect } from "chai";
import { mount, shallow } from "enzyme";
import React from "react";

import TaskList from "../component/taskList/TaskList";
import * as TaskContext from "../context/taskContext";

const taskContextTest = [
  {
    name: "tache 1",
    id: "4c19eded-36bb-42b5-ad29-c6e58627c481",
  },
  {
    name: "tache 2",
    id: "4c19eded-36bb-42b5-ad29-c6e58627c123",
  },
];

const noTaskContextTest = [];

describe("<TaskList />", () => {
  it("contains a h2 tag", () => {
    const spy = jest
      .spyOn(TaskContext, "useTaskContext")
      .mockImplementation(() => taskContextTest);
    const taskList = shallow(<TaskList />);

    const h2Tag = taskList.find("h2");
    expect(h2Tag).to.have.length(1);
    expect(h2Tag.text()).to.be.equal("Liste des taches");
    //spy.mockRestore();
  });

  it.skip("contains a ul tag when tasks are provided", () => {
    jest
      .spyOn(TaskContext, "useTaskContext")
      .mockImplementation(() => taskContextTest);
    const taskList = shallow(<TaskList />);

    const ulTag = taskList.find("ul");
    expect(ulTag).to.have.length(1);
  });

  it.skip("contains 2 TaskComponent when 2 tasks are provided in the context", () => {
    jest
      .spyOn(TaskContext, "useTaskContext")
      .mockImplementation(() => taskContextTest);
    const taskList = shallow(<TaskList />);

    const taskComponent = taskList.find(".task-component");
    expect(taskComponent).to.have.length(2);
  });

  it.skip("contains a div tag when tasks are not provided", () => {
    const spy = jest
      .spyOn(TaskContext, "useTaskContext")
      .mockImplementation(() => noTaskContextTest);
    const taskList = shallow(<TaskList />);

    const divTag = taskList.find("div");
    expect(divTag).to.have.length(1);
    expect(divTag.text()).to.be.equal("Pas encore de tache");
  });
});
