import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import "regenerator-runtime/runtime";
import "jest-styled-components";

import LocationForm from "./location-form.component";
import { AppContext } from "../../context/app.provider";

describe("Location Form", () => {
  it("should render Location Form", () => {
    const tree = renderer.create(
      <AppContext.Provider value={{ dispatch: () => {}, state: {} }}>
        <LocationForm />
      </AppContext.Provider>
    );
    const component = tree.toJSON();
    expect(component.type).toEqual("form");
    expect(component.children[0].type).toEqual("h2");
    expect(component.children[1].type).toEqual("div");
    expect(component.children[1].children[0].type).toEqual("label");
    expect(component.children[1].children[1].type).toEqual("input");
    expect(component.children[2].type).toEqual("div");
    expect(component.children[2].children[0].type).toEqual("button");
  });
});
