// code your solution here
const saturdayFun = (activity = "roller-skate") => {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = "go to the office") => {
    return activity = `This Monday, I will ${activity}.`
}

const wrapAdjective = (symbol = "*") => {
    return function adjective(sentence ="special") {
        return `You are ${symbol}${sentence}${symbol}!`
    }
}
