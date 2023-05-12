import React from 'react';
import ReactDOM from 'react-dom';
import {Sidebar} from "./components/global/index.js";
import {Content} from "./components/global/Content.js";
import {BrowserRouter} from "react-router-dom";

describe('Main index page', () => {
  it('renders without crashing', () => {
    const div = document.getElementById('root');
    ReactDOM.render(
      <BrowserRouter history={"/"}>
        <Sidebar />
        <Content />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
