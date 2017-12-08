let a = {
    foo: 42,
    bar: function () {
    console.log(this);
    console.log(arguments);
    //  console.log('Inside `bar`:', this.foo);
    console.log('Inside `bar`:', this.foo);
    },
  }

a.bar();
