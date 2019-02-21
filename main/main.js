function main(inputs) {
    if (inputs === null || inputs === '') {
        return "请输入行驶公里数与等待时间，期待输入为“行驶公里数 等待时间”（等待时间可选））";
    }

    let inputsList = inputs.split(' ');

    let kilometers = parseFloat(inputsList[0]),
        pricePerKilo = 0.8,
        waitingPricePerKilo = 0.25,
        result = 0,
        reg = /^\d+(\.{0,1}\d*)/;

    if (!reg.test(kilometers)) {
        return "行驶公里数输入不符合要求，期待输入为“行驶公里数 等待时间”（等待时间可选））";
    }

    if (kilometers <= 2) {
        result = 6;
    } else if (kilometers < 8) {
        result = 6 + (kilometers - 2) * pricePerKilo
    } else {
        result = 6 + (kilometers - 2) * pricePerKilo * 1.5
    }

    if (inputsList.length > 1) {
        let waitingTime = parseFloat(inputsList[1]);
        if (!reg.test(waitingTime)) {
            return "等待时间输入不符合要求，期待输入为“行驶公里数 等待时间”（等待时间可选））";
        } else {
            result += waitingPricePerKilo * waitingTime
        }
    }

    return Math.round(result);
};

module.exports = main;