import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import "regenerator-runtime/runtime";
import "jest-styled-components";

import Home from "./home.component";

describe("Home", () => {
  it("should render", () => {
    const tree = renderer.create(
      <MemoryRouter initialEntries={["homePath"]}>
        <Home />
      </MemoryRouter>
    );
    const component = tree.toJSON();
    expect(component.type).toEqual("div");
    expect(component.children[0].type).toEqual("h1");
    expect(component.children[1].type).toEqual("div");
    // console.log();
    component.children[1].children.forEach((child) => {
      expect(child.type).toEqual("a");
      expect(child.children[0].type).toEqual("button");
    });
  });
});
