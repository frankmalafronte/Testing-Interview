describe('Challenge 2 - Test Class', function () {
  it('Can filter data set', function () {
      let db = new FakeDatabase();
      let service = new PetService(db);

      let results = service.fetchDogs();

      expect(results.length).toEqual(4);
      expect(results.filter(x => x.type.toLowerCase() !== "dog").length).toEqual(0);
  });
});
