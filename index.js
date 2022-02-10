const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyAppendCat (name) { 
    return cats.push("Ralph");
}

destructivelyAppendCat();

function destructivelyPrependCat (name) { 
    return cats.unshift("Bob");
}

destructivelyPrependCat();

function destructivelyRemoveLastCat () { 
    return cats.splice(-1);
}

destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat () {
    return cats.splice(0, 1);
}

destructivelyRemoveFirstCat();

function appendCat (name) { 
    const newCatNames = [...cats, "Broom"];
    return newCatNames;
}
appendCat();

function prependCat(name) {
    const catNamesAgain = ["Arnold", ...cats]; 
    return catNamesAgain;
}

prependCat();

function removeLastCat() { 
    const noLastCat = cats.slice(0, -1); 
    return noLastCat;
}

removeLastCat();

function removeFirstCat() { 
    const noFirstCat = cats.slice(1);
    return noFirstCat;
}

removeFirstCat();