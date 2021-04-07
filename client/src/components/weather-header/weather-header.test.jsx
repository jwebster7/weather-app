import React from "react";
import renderer from "react-test-renderer";
import "regenerator-runtime/runtime";
import "jest-styled-components";

import { AppContext } from "../../context/app.provider";
import WeatherHeader from "./weather-header.component";

describe("Weather Header", () => {
  it("should render", () => {
    const state = {
      address: {
        city: "city",
        county: "county",
        state: "state"
      }
    };

    const conditions = {
      icon: "01d"
    };

    const dateTime = "01/01/01";

    const tree = renderer.create(
      <AppContext.Provider value={{ dispatch: () => {}, state: state }}>
        <WeatherHeader conditions={conditions} dateTime={dateTime} />
      </AppContext.Provider>
    );
    const component = tree.toJSON();
    expect(component.type).toEqual("div");
    expect(component.children[0].type).toEqual("img");
    expect(component.children[1].type).toEqual("div");
    expect(component.children[1].children[0].type).toEqual("span");
    expect(component.children[1].children[1].type).toEqual("span");
  });

  it("should render props correctly", () => {
    const state = {
      address: {
        city: "city",
        county: "county",
        state: "state"
      }
    };

    const conditions = {
      icon: "01d"
    };

    const dateTime = "01/01/01";

    const tree = renderer.create(
      <AppContext.Provider value={{ dispatch: () => {}, state: state }}>
        <WeatherHeader conditions={conditions} dateTime={dateTime} />
      </AppContext.Provider>
    );
    const component = tree.toJSON();
    // the location container stores address data like so: ["city, ", " ", "county, ", " ", "state"]
    expect(component.children[1].children[0].children[0]).toEqual("city, ");
    expect(component.children[1].children[0].children[2]).toEqual("county, ");
    expect(component.children[1].children[0].children[4]).toEqual("state");
    expect(component.children[1].children[1].children[0]).toEqual("01/01/01");
  });
});
