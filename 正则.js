'use strict';


let a = "my $text='English is a West Germanic language that was first spoken in early medieval England and is now a global lingua franca.[4][5] English is 23 February 12 - 1:30pm either the official language or an official language in almost 60 sovereign states. It is the most commonly spoken language in the United Kingdom, the United States, Canada, Australia, Ireland, and New Zealand, and it is widely spoken in some areas of the Caribbean, Africa, and South Asia.[6] It is the third most common native 12 - 2pm language in the world, after Mandarin and Spanish.[7] It is the most widely learned second language and is an official language of the United Nations, of the European Union, and of many other world and regional international organisations. 21 March 12 - 1:30pm Chinatown Shanghai and Beijing, 12 March 01 - 02pm Never meet up together.';"

let m = /\d\d \w{1,} \d{1,2} - \d{1,2}:\d{2}[a|p]m/g;
let n = /\d\d - \d[a|p]m/g;
let p = /\d\d \w{5} \d\d - \d{1,2}:\d\d[a|p]m/g;

//要匹配的字符串
//23 February 12 - 1:30pm
//12 - 2pm
//21 March 12 - 1:30pm

let M = m.exec(a);
let N = n.exec(a);
let P = p.exec(a);

console.log(M[0]);
console.log(N[0]);
console.log(P[0]);

