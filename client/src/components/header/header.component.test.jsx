import React from "react";
import { Link } from "react-router-dom";
import ShallowRenderer from "react-test-renderer/shallow";
import "jest-styled-components";

import Header from "./header.component";
import HeaderContainer from "./header.styles";

describe("Header", () => {
  // snapshot test, probably isn't useful for simple component like this
  // test("rendering header", () => {
  //   const component = renderer.create(
  //     <BrowserRouter>
  //       <Header />
  //     </BrowserRouter>
  //   );
  //   let tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  it("should shallow render", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Header />);
    const result = renderer.getRenderOutput();

    expect(result).toEqual(
      <HeaderContainer>
        <Link to="/home">{`Back to Home`}</Link>
      </HeaderContainer>
    );
  });

  it("should have matching children", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Header />);
    const result = renderer.getRenderOutput();

    expect(result.props.children).toEqual(
      <Link to="/home">{`Back to Home`}</Link>
    );
  });

  it("should not break with children passed in", () => {
    const dummyData = { x: "data", y: "data" };
    const renderer = new ShallowRenderer();
    renderer.render(<Header prop={dummyData} />);
    const result = renderer.getRenderOutput();

    expect(result).toEqual(
      <HeaderContainer>
        <Link to="/home">{`Back to Home`}</Link>
      </HeaderContainer>
    );
  });

  it("should not match children with props passed in", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Header />);
    const result = renderer.getRenderOutput();

    expect(result.props.children).not.toEqual(<a href="">Test</a>);
  });
});
