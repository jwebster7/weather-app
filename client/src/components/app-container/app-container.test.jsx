import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import "regenerator-runtime/runtime";
import "jest-styled-components";

import AppContainer from "./app-container.component";

describe("App Container", () => {
  it("should show the nav Header", () => {
    const tree = renderer.create(
      <MemoryRouter
        initialEntries={["weather"]}
      >
        <AppContainer />
      </MemoryRouter>
    );
    const component = tree.toJSON();
    expect(component.children[0].type).toBe("nav");
  });

  it("it should not show the nav Header", () => {
    const tree = renderer.create(
      <MemoryRouter initialEntries={["homePath"]}>
        <AppContainer />
      </MemoryRouter>
    );
    const component = tree.toJSON();
    expect(component.type).toEqual("div");
    expect(component.children).toBe(null);
  });
});
