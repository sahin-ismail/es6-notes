Promise.resolve(1).then(function () { console.log('promise resolve') })
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('immediate'));
process.nextTick(() => console.log('nextTick'));
console.log('current event loop');

//Output
// current event loop
// nextTick
// promise resolve
// timeout
// immediate

