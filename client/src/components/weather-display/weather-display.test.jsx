import React from "react";
import renderer from "react-test-renderer";
import "regenerator-runtime/runtime";
import "jest-styled-components";

import { AppContext } from "../../context/app.provider";
import WeatherDisplay from "./weather-display.component";
import { WeatherDisplayContainer } from "./weather-display.styles";

describe("Weather Display", () => {
  it("should render", () => {
    const weather = {
      feels_like: 70.32,
      humidity: 60,
      speed: 21.85,
      temp: 70.74,
      temp_max: 71.6,
      temp_min: 69.01
    };

    const tree = renderer.create(
      <AppContext.Provider value={{ dispatch: () => {}, state: {} }}>
        <WeatherDisplay weather={weather} />
      </AppContext.Provider>
    );
    const component = tree.toJSON();
    expect(component.type).toEqual("div");
    expect(component.children[0].type).toEqual("div");
  });

  it("should render the Spinner with empty props", () => {
    const weather = {};

    const tree = renderer.create(
      <AppContext.Provider value={{ dispatch: () => {}, state: {} }}>
        <WeatherDisplay weather={weather} />
      </AppContext.Provider>
    );
    const component = tree.toJSON();
    expect(component.type).toEqual("div");
    expect(component.children[0].type).toBe("div");
    expect(component.children[0].children).toBeNull();
  });
});

describe("Weather Display Styles", () => {
  it("should have expected color styles", () => {
    const tree = renderer.create(<WeatherDisplayContainer />).toJSON();
    expect(tree).toHaveStyleRule("color", "black");
  });
});
