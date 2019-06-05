describe("Challenge 3 - Calculate PNL", function() {
  it("can handle an empty orders array", function() {
      var orders = [];
      var pnl1 = calculatePnl(orders, 15);
      expect(pnl1).toBe(0);
  });

  it("determines pnl FIFO (partial sell)", function() {
      var orders = [[10, 15], [5, 10], [-12, 20]];
      var currentPrice = 17;
      var pnl1 = calculatePnl(orders, currentPrice);
      expect(pnl1).toBe(91);
  });

  it("determines pnl FIFO (full sell, incremental)", function() {
      var orders = [];
      orders.push([30, 10]);
      var pnl1 = calculatePnl(orders, 15);
      expect(pnl1).toBe(150);

      orders.push([20, 20]);
      var pnl2 = calculatePnl(orders, 15);
      expect(pnl2).toBe(50);

      orders.push([-10, 30]);
      var pnl3 = calculatePnl(orders, 15);
      expect(pnl3).toBe(200);

      orders.push([-40, 5]);
      var pnl4 = calculatePnl(orders, 15);
      expect(pnl4).toBe(-200)
  });
});