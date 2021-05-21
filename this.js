const x = {
    firstName: '',
    lastName: '',
    setName: function(name) {
      console.log(this)
      let splitName = function(n) {
       console.log(this)
        const nameArr = name.split(' ');
        this.firstName = name[0];
        this.lastName = name[1];
      }
      splitName(name);
    }
  }
  var name = 'Jon doe';
  x.setName(name);
  console.log(x.firstName); 
  console.log(x.lastName); 


  var Foo = function( a ) {
    this.a=a;
    this.bar=function() {   
      return this.a; 
    }
    
    this.baz = function() {
      return a; 
    };
    
    function bar(){
        console.log(this);
    }
    bar();
  };
  
  Foo.prototype = {
    biz: function() { 
      return this.a; 
    }
  };
  
  var f = new Foo( 7 );
  console.log(f.bar()); 
  console.log(f.baz()); 
  console.log(f.biz());


function a(){
    console.log(this)
  }
  a() 
  
  
  var a = function(){
    console.log(this)
  }
  a() 
  
  
  var a = function sayHello(){
    console.log(this)
  }
  a() 

  const a =()=>{
      this.name="tatti";
      console.log(this);
  }
  a(); //{ name: 'tatti' }

const a ={
    fn:()=>{
        this.name="arrow";
        console.log(this);
    }
}
a.fn(); //{ name: 'arrow' }

var arrowObject = {
    name: 'arrowObject',
    printName: () => {
      console.log(this);
    }
  };
  
  
  arrowObject.printName();


obj = {
    name: "supername",
    getN: function(){
      console.log(this.name) 
      function x(){
        console.log(this.name) 
      }
    //   x.call(this);
      x()
    }
  }
  obj.getN()

  obj = {
    name: "supername",
    getN: function(){
      console.log(this.name) 
      var x=()=>{
        console.log(this.name) 
      }
      x()
    }
  }
  obj.getN()
