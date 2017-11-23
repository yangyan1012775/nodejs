let a = {
    foo: 42,
    bar: () => {
    console.log(this);
    console.log(arguments);
    console.log('Inside `bar`:', this.foo);
    // console.log('Inside `bar`:', a.foo);
    },
  };
a.bar();
