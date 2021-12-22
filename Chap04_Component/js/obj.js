
var obj = {
  name: 'NolBu',
  getName: function() {
    return this.name;
  }
}

// ES6
const hungbu = {
  name: 'Hungbu',
  getName() {
    return this.name;
  }
}

console.log(obj.getName());
console.log(hungbu.getName());
