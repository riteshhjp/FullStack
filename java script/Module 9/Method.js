const obj = {
    first_name :"ritesh",
    last_name : "kumar",
    age : 25, 
    verify_age : function(){
        console.log(obj.age);

    }
}

console.log(obj.verify_age());
obj.verify_age(); // acting like as a method.