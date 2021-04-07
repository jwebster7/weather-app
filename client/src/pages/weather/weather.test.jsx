import React from "react";
import renderer from "react-test-renderer";
import "regenerator-runtime/runtime";
import "jest-styled-components";

import { AppContext } from "../../context/app.provider";
import Weather from "./weather.component";

describe("Weather", () => {
  it("should render", () => {
    const happyState = {
      current: {
        feels_like: 70.32,
        humidity: 60,
        speed: 21.85,
        temp: 70.74,
        temp_max: 71.6,
        temp_min: 69.01
      },
      weather: {
        description: "overcast clouds",
        icon: "04d",
        id: 804,
        main: "Clouds"
      },
      dateTime: "01/01/01"
    };

    const tree = renderer.create(
      <AppContext.Provider value={{ dispatch: () => {}, state: happyState }}>
        <Weather />
      </AppContext.Provider>
    );
    const component = tree.toJSON();
    expect(component.type).toEqual("div");
    expect(component.children[0].type).toEqual("div");
    expect(component.children[1].type).toEqual("div");
  });

  it("should not render", () => {
    const sadState = {
      current: {
        feels_like: 70.32,
        humidity: 60,
        speed: 21.85,
        temp: 70.74,
        temp_max: 71.6,
        temp_min: 69.01
      },
      weather: undefined,
      dateTime: "01/01/01"
    };

    const tree = renderer.create(
      <AppContext.Provider value={{ dispatch: () => {}, state: sadState }}>
        <Weather />
      </AppContext.Provider>
    );
    const component = tree.toJSON();
    // check for the Spinner, which has a structure of: <div><div></div></div>
    expect(component.type).toEqual("div");
    expect(component.children[0].type).toEqual("div");
    expect(component.children[1]).toBeUndefined();
  });
});
