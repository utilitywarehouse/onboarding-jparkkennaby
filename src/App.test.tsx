import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

const renderMockedElement = () => {
  return render(<App />);
};

describe("App component", () => {
  it("should render a form", () => {
    renderMockedElement();
    expect(screen.getAllByRole("form").length).toEqual(1);
  });

  it("should render an input", () => {
    const { container } = renderMockedElement();
    expect(container.querySelectorAll("input").length).toEqual(1);
  });

  it("should render an button", () => {
    renderMockedElement();
    expect(screen.getAllByRole("button").length).toEqual(1);
  });

  it("should render 3 playing cards", async () => {
    renderMockedElement();
    const button = screen.getAllByRole("button");
    fireEvent.click(button[0]);

    await waitFor(() => {
      expect(screen.getAllByRole("img").length).toBe(3);
    });
  });
});
