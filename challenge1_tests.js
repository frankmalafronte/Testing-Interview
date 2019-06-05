describe('Challenge 1 - daysBetweenDates', function() {
  it('returns null if either date input is null', function() {
    var result1 = daysBetweenDates(null, new Date('2018-06-04'));
    expect(result1).toEqual(null);
    var result2 = daysBetweenDates(new Date('2018-06-04'), null);
    expect(result2).toEqual(null);
  });

  it('returns null if either date input is not a date', function() {
    var result1 = daysBetweenDates(123, new Date('2018-06-04'));
    expect(result1).toEqual(null);
    var result2 = daysBetweenDates(new Date('2018-06-04'), 'hello');
    expect(result2).toEqual(null);
  });

  it('returns null if date1 is after date2', function() {
    var result1 = daysBetweenDates(new Date('2018-06-05'), new Date('2018-06-04'));
    expect(result1).toEqual(null);
    var result2 = daysBetweenDates(new Date('2018-06-04'), new Date('2018-06-04'));
    expect(result2).not.toEqual(null);
  });

  it('returns correct number of days between dates', function() {
    var result1 = daysBetweenDates(new Date('2018-06-03'), new Date('2018-06-07'));
    expect(result1).toEqual(4);
    var result2 = daysBetweenDates(new Date('2018-06-04'), new Date('2018-06-04'));
    expect(result2).toEqual(0);
    var result3 = daysBetweenDates(new Date('2018-06-04'), new Date('2019-06-04'));
    expect(result3).toEqual(365);
  });

});
