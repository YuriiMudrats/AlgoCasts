// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    const mergeArr = [];
    const q1 = sourceOne.get();
    const q2 = sourceTwo.get()
    const maxLength = q1.length >= q2.length ? q1.length : q2.length;
  
    for(let i = 0 ;i<maxLength; ++i){
        if(q2[i])mergeArr.push(q2[i]);
        if(q1[i])mergeArr.push(q1[i]);        
    }
    const q = new Queue();
    mergeArr.reverse()
    mergeArr.forEach(i=>q.add(i))    
    console.log(q)
    return q
}

module.exports = weave;
