//Question-1
const obj = {
    a: () =>{
        console.log(this)
    },
b() {
    console.log(this)
},
c(){
    this.e.bind(this)
},
d(){
    this.e.apply(this)
},
e: () => console.log(this),
f(){
    return new Promise((resolve,reject) => {
        resolve('test')
    })
},
g(){
    this.f().then(() => console.log(this))
}
}

obj.a()    ////window
obj.b()   ////obj
obj.c()   ////window
obj.d()   ///window
obj.e()   ///window
obj.f().then(e => console.log(e))  ///'test'
obj.g()      ////obj


//Question-2

var myMethod = function(){
    console.log(this.location)
}

var place1 = {
    location:'Istanbul',
    myMethod:myMethod
}

var place2 = {
    location:'Ankara',
    myMethod:myMethod
}

place1.myMethod()  ///'Istanbul'
place2.myMethod()    ///'Ankara'
place1.myMethod.call(place2) //'Ankara
place2.myMethod.call(place1)   //'Istanbul'
myMethod()   //[object Location]
myMethod.apply(place2)    ///'Ankara'
myMethod.call(place1,place2)   ///'Istanbul'
myMethod.bind(place1)(place2)    ///'Istanbul
place2.myMethod.bind(place1)(place2)   ////'Istanbul'
myMethod.bind(place1).call(place2)   /////'Istanbul

//Question-3
[1,2,3,4].filter((x,y) => y-2)   /// [1,2,4]
2 + 2 + "true" + 2 + "false" + true   ///"4true2falsetrue"
((x,y) => x + 'test' + y)(2)    ///"2testundefined"