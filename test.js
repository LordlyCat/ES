'use strict';

/*let jack = {

	grandparents: ["1", "2"],

	parents: ["3", "4"],

	brothers: ["5", "6"],

	friends: ["q","w"],

	girlfriend: "marry"

}*/


  /*[Symbol.iterator]() {
    const self = this;
    let index = 0;
    return {
      next() {
      	
        if (index < self.parents.length) {
          return {
            value: self.parents[index++],
            done: false
          };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }*/


var jack = new Set();

var grandparents = ["1", "2"];
var parents = ["3", "4"];
var brothers = ["5", "6"];
var friends = ["q","w"];
const girlfriend = ["marry"];//不可修改
var q = "233";


//添加
jack.add(grandparents).add(parents).add(brothers).add(friends).add(girlfriend);

for (let e of jack) {
	console.log(e);
}

console.log(jack.has(girlfriend));//查询
console.log(jack.delete(grandparents));//删除

var J;
function change (set) {//修改
	 J =  Array.from(set);
	 J[2][0] = "k";
}

change(jack);

console.log(J);

console.log(jack);

