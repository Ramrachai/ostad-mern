function swap (input) {
    let nums = input.trim().split(" ").map(Number)
    let swaped = [...nums].reverse()

    let before = `Before swapping: num1 = ${nums[0]}, num2 = ${nums[1]}`
    let after = `After  swapping: num1 = ${swaped[0]}, num2 = ${swaped[1]}`


    let numArr = input.trim().split(" ").map(Number)
    let num1 = numArr[0]
    let num2 = numArr[1]


    console.log(typeof before)
    console.log(after)

    return swaped
}

swap('34 56')