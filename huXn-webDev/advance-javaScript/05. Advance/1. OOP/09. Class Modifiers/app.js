function Myclass(public, private, protected) {
  //Public field
  this.public = public;


  // Private Field (closure)
  const _private = private;

  // Protected Field
  const _protected = protected;


  //.......................................

  //Public Method

  this.publicMethod = function () {
    return `Public field: ${this.public}`;
  };

  //Private method (closure)

  function _privateMethod() {
    return `Private Method: ${_private}`
  }

  // Protected Method (closure)

  function _protectedMethod() {
    return `Protected Method: ${_protected}`;
  }

  // Method to access protected method
  this.acessProtectedMethod = function () {
    return _protectedMethod();
  }
}

const myObj = new Myclass("Public Data", "Private data", "Protected Data");

console.log(myObj.public);
console.log(myObj._private);
console.log(myObj._protected);

console.log(myObj.publicMethod());

// !console.log(myObj._privateMethod());
// !console.log(myObj._protectedMethod()); throw an error

console.log(myObj.acessProtectedMethod());