import { expect } from "chai";
import { shallow } from "enzyme";
import React from "react";
import TaskComponent from "../component/taskComponent/TaskComponent";

describe("<TaskComponent />", () => {
  const task = { name: "tache 1", id: "4c19eded-36bb-42b5-ad29-c6e58627c481" };
  const taskComponent = shallow(<TaskComponent task={task} />);

  it("contains a div tag with class name task-component", () => {
    expect(taskComponent.find(".task-component")).to.have.length(1);
  });

  it("contains a li tag with the name passed in props", () => {
    const liTag = taskComponent.find("li");
    expect(liTag).to.have.length(1);
    expect(liTag.text()).to.be.equal("tache 1");
  });

  it("contains a delete icon with id btn-supp-task", () => {
    expect(taskComponent.find("#btn-supp-task")).to.have.length(1);
  });
});
