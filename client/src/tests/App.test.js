import { expect } from "chai";
import { shallow } from "enzyme";
import React from "react";

import App from "../App";

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
    expect(application.find("#task-list")).to.have.length(1);
  });

  it("contains a add task container", () => {
    expect(application.find("#new-task")).to.have.length(1);
  });
});
