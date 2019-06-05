const DOG_FILTER_CONSTANT = "DOG";
const CAT_FILTER_CONSTANT = "CAT";


class FakeDatabase {
    constructor() {
        this.data = [
            { name: "Lancelot", type: "Dog", age: 10, breed: "German Shepherd" },
            { name: "Matilda", type: "Dog", age: 9, breed: "German Shepherd" },
            { name: "Zeus", type: "Dog", age: 4, breed: "Leonberger" },
            { name: "Norah", type: "Dog", age: 7, breed: "Mixed" },
            { name: "Tobias", type: "Cat", age: 6, breed: "Tabby" },
        ];
    }

    getData() {
        return this.data || [];
    }
}

class PetService {
    constructor(db) {
        this.db = db;
    }

    fetchDogs() {
        let data = this.db.getData();
        return this.filter(data, DOG_FILTER_CONSTANT);
    }

    filter(data, typeFilter) {
        return data.filter(x => {
            return x.type === typeFilter;
        });
    }
}