
(function(){
    
    function User(name, age) {
        this.name = name;
        this.age = age;

        this.info = function() {
            console.log(this.name + '님의 나이는 ' + this.age);
        }
    }

    User.prototype.getName = function() {
        console.log(this.name)
    }
    

    let nolbu = new User('NolBu', 30);
    let hungbu = new User('HungBu', 20);

    nolbu.info();
    hungbu.info();

    nolbu.getName();
    hungbu.getName();
    

    console.log(nolbu)
    console.log(hungbu);

})();
