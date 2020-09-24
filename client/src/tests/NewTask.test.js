import { expect } from "chai";
import { shallow } from "enzyme";
import React from "react";

import NewTask from "../component/newTask/NewTask";

describe("<NewTask />", () => {
  const newTask = shallow(<NewTask />);

  it("contains a h2 tag", () => {
    const h2Tag = newTask.find("h2");
    expect(h2Tag).to.have.length(1);
    expect(h2Tag.text()).to.be.equal("Ajouter nouvelle tache");
  });

  it("contains an input tag with id new-task", () => {
    const inpuTag = newTask.find("#new-task");
    expect(inpuTag).to.have.length(1);
    expect(inpuTag.props().label).to.be.equal("nouvelle tâche");
    expect(inpuTag.props().type).to.be.equal("text");
  });

  it("contains a button to add task", () => {
    const button = newTask.find("#btn-add-task");
    expect(button).to.have.length(1);
    expect(button.props().variant).to.be.equal("contained");
    expect(button.text()).to.be.equal("Ajouter");
  });
});
