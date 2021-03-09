import fs = require('fs');

export function sortedJson() {
  const sorted = [];
  const json = JSON.parse(fs.readFileSync('./testdata.json', 'utf-8'));
  for (let i = 0; i < json.length; i++) {
    const arr2 = json[i];
    delete arr2.idInstance;
    delete arr2.idNode;
    delete arr2.idParent;
    delete arr2.idRole;
    delete arr2.idZone;
    delete arr2.levelOrder;
    delete arr2.sex;
    arr2.resources = JSON.parse(arr2.resources);
    arr2.exp = arr2.resources[0].value + arr2.resources[1].value;
    arr2.money = arr2.resources[2].value;
    delete arr2.resources;
    sorted.push(arr2);
  }
  sorted.sort(compare)
  sorted.reduce((a, b) => {
    let { exp, money } = b;
    if (!a[[exp, money]]) a[[exp, money]] = ++a.count;
    b.place = a[[exp, money]];
    return a
    }, { count: 0 })
  
    let reduced = JSON.stringify(sorted, "", 2)
  let j = JSON.parse(reduced)
  
  return j
}

export function compare(a, b) {
  if (a.exp > b.exp) return -1;
  if (a.exp < b.exp) return 1;
  if (a.money > b.money) return -1;
  if (a.money < b.money) return 1;
  return 0;
}
