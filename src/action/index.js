export const incNumber = (num) => {
    return {
        type: "INCREMENT",
        payload: num
    }
}

export const decNumber = () => {
    return {
        type: "DECREMENT"
    }
}
export const MultiNumber = (num) => {
    return {
        type: "MULTIPLE",
        payload: num
    }
}
export const divideNumber = (num) => {
    return {
        type: "DIVIDE",
        payload: num
    }
}