interface SquareConfig {
    color: string;
    width: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

const T1 = { color: 'asdf', width:3, test: 123};

// let mySquare = createSquare({color: "black", width:123, test: 132}); // NO
// let mySquare = createSquare(T1); // OK



interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);