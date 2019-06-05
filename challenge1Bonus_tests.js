//remove the 'x' to turn these tests on - the third input is an array of holidays that the function will not count as a day on or between the other dates
xdescribe('Challenge 1 - daysBetweenDates - Bonus', function() {
  it('returns number of days between dates minus holidays between', function() {
    var result1 = daysBetweenDates(new Date('2018-06-01'), new Date('2018-06-04'), [new Date('2018-06-01'), new Date('2018-06-03')]);
    expect(result1).toEqual(1);
    var result2 = daysBetweenDates(new Date('2018-06-01'), new Date('2018-06-04'), [new Date('2017-06-01'), new Date('2019-06-03')]);
    expect(result2).toEqual(3);
  });

  it('returns number of days between dates minus holidays between while ignoring non-dates', function() {
    var result1 = daysBetweenDates(new Date('2018-06-01'), new Date('2018-06-04'), [new Date('2018-06-01'), null, 'hello', 123, new Date('2018-06-03')]);
    expect(result1).toEqual(1);
  });
});
