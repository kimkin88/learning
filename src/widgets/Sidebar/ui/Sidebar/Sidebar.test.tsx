import { fireEvent, screen } from "@testing-library/react";
import { withTranslation } from "react-i18next";
import { renderWithTranslations } from "shared/lib/tests/renderWithTranslations/renderWithTranslations";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";

describe("Sidebar", () => {
  test("buttonRender", () => {
    renderWithTranslations(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("test toggle sidebar view", () => {
    renderWithTranslations(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
