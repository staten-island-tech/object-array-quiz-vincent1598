const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
const democrat = presidents.filter((presidents) => presidents.party === "D");

console.table(democrat);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
const onetermrepublicans = presidents.filter((president) => {
  if (president.terms === 1 && president.party === "R") {
    return true;
  }
});

console.table(onetermrepublicans);

//3) return only the last three presidents
const recent = [...presidents.slice(0, 3)];

console.table(recent);

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
const term2dems = presidents.filter((president) => {
  if (president.terms === 2 && president.party === "D") {
    return true;
  }
});

console.table(term2dems);

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

const LBJ = (alert("LBJ served two terms") = presidents.filter((president) => {
  if (president.name === "Lyndon Johnson" && president.term === "2");
  else {
    alert("LBJ was one and done");
  }
}));
console.log(LBJ);
