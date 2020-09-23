import { expect } from "chai";
import { shallow } from "enzyme";
import React from "react";

import NewTask from "../component/newTask/NewTask";

describe("<NewTask />", () => {
  it("contains a h2 tag", () => {
    const newTask = shallow(<NewTask />);
    const h2Tag = newTask.find("h2");
    expect(h2Tag.text()).to.be.equal("Ajouter nouvelle tache");
  });

  it("contains an input tag", () => {
    const newTask = shallow(<NewTask />);
    const inpuTag = newTask.find("input");
  });

  it("contains a button", () => {
    const newTask = shallow(<NewTask />);
    const button = newTask.find("button");
    expect(button.text()).to.be.equal("Ajouter");
  });
});
