import React from "react";
import renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import "jest-styled-components";

import CustomButton from "./custom-button.component";

describe("Custom Button", () => {
  it("should not equal unstyled button", () => {
    const onClick = () => {
      return;
    };
    const children = "";

    const renderer = new ShallowRenderer();
    renderer.render(<CustomButton children={children} onClick={onClick} />);
    const result = renderer.getRenderOutput();

    expect(result).not.toEqual(<button onClick={onClick}>{children}</button>);
  });

  it("should have undefined children with no children props", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<CustomButton />);
    const result = renderer.getRenderOutput();

    expect(result.props.children).toEqual(undefined);
  });
});

describe("Custom Button Styles", () => {
  it("should have expected color styles", () => {
    const tree = renderer.create(<CustomButton />).toJSON();
    expect(tree).toHaveStyleRule("color", "white");
    expect(tree).toHaveStyleRule("background-color", "rgb(104,99,212)");
  });

  it("should have expected hover color styles", () => {
    const tree = renderer.create(<CustomButton />).toJSON();
    expect(tree).toHaveStyleRule("color", "black", {
      modifier: ":hover"
    });
    expect(tree).toHaveStyleRule("background-color", "rgb(255,255,255)", {
      modifier: ":hover"
    });
    expect(tree).toHaveStyleRule("border", "1.5px solid black", {
      modifier: ":hover"
    });
  });
});
