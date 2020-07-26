
let y = app.counters.createCounter();
console.log('y', y.getCount());
y.incrementCount();
y.incrementCount();
y.incrementCount();
y.incrementCount();
y.incrementCount();

let x = app.counters.createCounter();
console.log('x', x.getCount());
x.incrementCount();
x.incrementCount();
x.incrementCount();
x.incrementCount();
x.incrementCount();
x.incrementCount();
x.incrementCount();
x.incrementCount();
x.incrementCount();
x.incrementCount();
x.incrementCount();
x.incrementCount();
x.incrementCount();
x.incrementCount();
x.incrementCount();

app.counters.incrementCount();
app.counters.incrementCount();
app.counters.incrementCount();
app.counters.incrementCount();
app.counters.incrementCount();
app.counters.incrementCount();
app.counters.incrementCount();
app.counters.incrementCount();
app.counters.incrementCount();
app.counters.incrementCount();

let z = app.counters.createCounter();

console.log('xcount', x.getCount());
console.log('ycount', y.getCount());
console.log('onlyOne',app.counters.getCount());
console.log('amountCreated',z.getAmountCreated());

