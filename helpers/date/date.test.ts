import { formatDate } from './';

describe("formatDate", () => {
  it("should format the date without dots and with the month abbreviated", () => {
    const date = '2023-09-30'
    const formattedDate = formatDate(date);
    const text = `escolha disponível até ${formattedDate}`
    expect(text).toBe("escolha disponível até 30 set 2023");
  });

  it("should not format when date is empty string", () => {
    const date = ""
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe("");
  });
});
