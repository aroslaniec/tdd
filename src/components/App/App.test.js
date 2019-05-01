import React from "react";
import { shallow } from "enzyme";

import App from "./App";

// Default test from CRA
/*it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});*/

describe("App", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should have className set accordingly to naming convention", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.hasClass("app")).toBeTruthy();
  });
});
