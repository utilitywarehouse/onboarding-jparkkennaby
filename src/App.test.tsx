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

  it("should render a certain amount of playing cards", async () => {
    const amount = 6;

    const { container } = renderMockedElement();
    const input = container.querySelectorAll("input")[0];
    const button = screen.getAllByRole("button");

    fireEvent.change(input, { target: { value: amount } });
    fireEvent.click(button[0]);

    await waitFor(() => {
      expect(screen.getAllByRole("img").length).toBe(amount);
    });
  });
});
