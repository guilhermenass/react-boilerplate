import { formatPrice } from './';

describe("formatPrice", () => {
  it("should return the price in Brazilian format", () => {
    const price = 3000
    const formattedDate = formatPrice(price);
    expect(formattedDate).toBe("R$ 30,00");
  });
});
