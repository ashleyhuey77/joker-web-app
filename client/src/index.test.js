import React from 'react';
import ReactDOM from 'react-dom';
import {Sidebar} from "./components/global/index.js";
import {Content} from "./components/global/Content.js";
import {BrowserRouter} from "react-router-dom";

import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { App } from "../App";

describe("Index", () => {
  it("renders without crashing given the required props", () => {
    const props = {
      isFetching: false,
      dispatch: jest.fn(),
      selectedSubreddit: "reactjs",
      posts: [],
    };
    const wrapper = shallow(<App {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
