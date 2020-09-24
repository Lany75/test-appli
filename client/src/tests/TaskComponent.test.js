import { expect } from "chai";
import { shallow } from "enzyme";
import React from "react";
import TaskComponent from "../component/taskComponent/TaskComponent";

describe("<TaskComponent />", () => {
  const taskComponent = shallow(<TaskComponent name="azerty" />);

  it("contains a div tag with class name task-component", () => {
    expect(taskComponent.find(".task-component")).to.have.length(1);
  });

  it("contains a li tag with the name passed in props", () => {
    const liTag = taskComponent.find("li");
    expect(liTag).to.have.length(1);
    expect(liTag.text()).to.be.equal("azerty");
  });

  it("contains a delete icon with id btn-supp-task", () => {
    expect(taskComponent.find("#btn-supp-task")).to.have.length(1);
  });
});
