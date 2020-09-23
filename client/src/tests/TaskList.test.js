import { expect } from "chai";
import { shallow } from "enzyme";
import React from "react";

import TaskList from "../component/taskList/TaskList";

describe("<TaskList />", () => {
  it("contains a h2 tag", () => {
    const taskList = shallow(<TaskList />);
    const h2Tag = taskList.find("h2");
    expect(h2Tag.text()).to.be.equal("Liste des taches");
  });

  it("contains a ul tag", () => {
    const taskList = shallow(<TaskList />);
    const ulTag = taskList.find("ul");
  });

  it("contains 3 li tag", () => {
    const taskList = shallow(<TaskList />);
    const liTag = taskList.find("li");
    expect(liTag).to.have.lengthOf(3);
  });
});
