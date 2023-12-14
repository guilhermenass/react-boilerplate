import { formatHour } from './';

describe("formatHour", () => {
  it("should format time of a date.", () => {
    const date = '2023-11-01T20:50:21.247648Z'
    const formattedDate = formatHour(date);
    expect(formattedDate).toBe("17:50");
  });

  it("should not format when date is empty string", () => {
    const date = ""
    const formattedDate = formatHour(date);
    expect(formattedDate).toBe("");
  });
});
