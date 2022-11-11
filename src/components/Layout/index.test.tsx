import Layout from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

describe("testing <Layout/>", () => {
  it("<Layout renders corectly", () => {
    render(
      <Router>
        <Layout />
      </Router>
    );

    const element = screen.getByTestId("layout");
    expect(element).toBeInTheDocument();
  });
});
