
const tickets = [{
    origin: "MEL",
    destination: "PVG"
}]


const tickets1 = [{
    origin: "MEL",
    destination: "PVG"
},{
    origin: "PVG",
    destination: "SYD"
},{origin: "MEL",
destination: "PVG"
},{
origin: "PVG",
destination: "SYD"
}]
// getStops() ==> Direct

// 直达票
// 1 stop
// 2 stops

// input tickets
// output: 1 stop or n stops or Direct

const SPECIAL_CASES = {
    0: "Direct",
    10: "Around the world",
}
const pluralize = (length) => length > 1 ? "s" : "";

const getStops = (tickets) => {   
    const length = tickets.length - 1;
    return SPECIAL_CASES[length] || `${length} stop${pluralize}`;
}   

console.log(getStops(tickets));
console.log(getStops(tickets1));