// Using loop
function fibsLoop(n) {
    const fibArr = [];

    let a = 1;
    let b = 0;
    for (let i = 0; i < n; i++) {
        fibArr.push(b);
        let c = a + b;
        b = a;
        a = c;
    }

    return fibArr;
}

// console.log(fibsLoop(8))

// Using recursion
function fibsRecursion(n) {
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }

    return [...fibsRecursion(n - 1), fibsRecursion(n - 1)[n - 2] + fibsRecursion(n - 2)[n - 3]];
}

console.log(fibsRecursion(5));