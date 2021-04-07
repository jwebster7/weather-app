import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import renderer from "react-test-renderer";
import "regenerator-runtime/runtime";
import "jest-styled-components";

import { AppContext } from "../../context/app.provider";
import Forecast from "./forecast.component";

describe("Forecast", () => {
  it("should render", () => {
    const happyState = {
      forecast: [
        {
          dt: 1618164000,
          weather: {
            main: "Clouds",
            description: "few clouds",
            icon: "02d"
          },
          current: {
            temp: 68.32,
            temp_max: 71.94,
            temp_min: 47.57,
            feels_like: 66.92,
            speed: 18.9,
            humidity: 44
          }
        },
        {
          dt: 1618164001,
          weather: {
            main: "Clouds",
            description: "few clouds",
            icon: "02d"
          },
          current: {
            temp: 68.32,
            temp_max: 71.94,
            temp_min: 47.57,
            feels_like: 66.92,
            speed: 18.9,
            humidity: 44
          }
        },
        {
          dt: 1618164002,
          weather: {
            main: "Clouds",
            description: "few clouds",
            icon: "02d"
          },
          current: {
            temp: 68.32,
            temp_max: 71.94,
            temp_min: 47.57,
            feels_like: 66.92,
            speed: 18.9,
            humidity: 44
          }
        },
        {
          dt: 1618164002,
          weather: {
            main: "Clouds",
            description: "few clouds",
            icon: "02d"
          },
          current: {
            temp: 68.32,
            temp_max: 71.94,
            temp_min: 47.57,
            feels_like: 66.92,
            speed: 18.9,
            humidity: 44
          }
        }
      ]
    };

    const tree = renderer.create(
      <AppContext.Provider value={{ dispatch: () => {}, state: happyState }}>
        <MemoryRouter initialEntries={["/forecast/0"]}>
          <Route exact path="/forecast/:forecastid">
            <Forecast />
          </Route>
        </MemoryRouter>
      </AppContext.Provider>
    );
    const component = tree.toJSON();
    expect(component.type).toEqual("div");
    expect(component.children[0].type).toEqual("div");
    expect(component.children[1].type).toEqual("div");
    component.children[1].children.forEach((child) => {
      expect(child.type).toEqual("button");
    });
  });
});
