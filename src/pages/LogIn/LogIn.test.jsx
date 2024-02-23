/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import LogIn from "./index";
import { render } from "@testing-library/react";

jest.mock("axios", () => {});

jest.mock("react-router-dom", () => {
  const useNavigate = jest.fn();
  const Link = <div data-testid='test-link'>I am link</div>;
  return({useNavigate, Link})
})

describe('Testing Login page', () => {
  beforeAll(() => {

  });
  beforeEach(() => {

  });
  afterEach(() => {

  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  it('should render without crashing', () => {
  //  const {debug} = render(<LogIn />);
   console.log(render(<LogIn />));
  //  debug();
  });
});