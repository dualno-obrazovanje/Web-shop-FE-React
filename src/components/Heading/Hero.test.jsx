import React from "react";
import Heading from "./index";
import { render, cleanup } from "@testing-library/react";

describe('Testing Heading page', () => {
  beforeAll(() => {

  });
  beforeEach(() => {

  });
  afterEach(() => {
    cleanup();
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  it('should render without crashing', () => {
    render(<Heading setModal={jest.fn()} cart={{a: '123'}} handleModalOpening={jest.fn} />);
  });
});