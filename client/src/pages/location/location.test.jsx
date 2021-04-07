import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import "regenerator-runtime/runtime";
import "jest-styled-components";

import { AppContext } from "../../context/app.provider";
import Location from "./location.component";

describe("Location", () => {
  it("should render", () => {
    const tree = renderer.create(
      <AppContext.Provider value={{ dispatch: () => {}, state: {} }}>
        <Location />
      </AppContext.Provider>
    );
    const component = tree.toJSON();
    expect(component.type).toEqual("div");
    expect(component.children[0].type).toEqual("form");
  });
});
