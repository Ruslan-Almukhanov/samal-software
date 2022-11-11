import Sidebar from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

describe("testing <Sidebar/>", () => {
  it("<Sidebar link renders corectly", async () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    const link = await screen.findByText(/Локомотивы/);
    expect(link).toBeInTheDocument();
  });
});
