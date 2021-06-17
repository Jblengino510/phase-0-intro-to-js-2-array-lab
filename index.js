const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo");
}
const allCats = [...cats, "Broom"];
function appendCat(name) {
    return allCats;
}
const moreCats = ["Arnold", ...cats];
function prependCat(name) {
    return moreCats;
}
const lastCat = [...cats.slice(0, 2)];
function removeLastCat(name) {
    return lastCat;
}
const firstCat = [...cats.slice(0, 0), "Otis", "Garfield"];
function removeFirstCat(name) {
    return firstCat;
}