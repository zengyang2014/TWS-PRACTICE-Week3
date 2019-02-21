const main = require('../main/main');

describe('taxi fee', function() {
    it("should give error information when input is in a wrong format", function() {
        let result1 = main(null);
        let result2 = main("");
        let result3 = main("-9");
        let result4 = main("abc");
        let result5 = main("1 -2");
        let result6 = main("1 s");
        expect(result1).toString("请输入行驶公里数与等待时间，期待输入为“行驶公里数 等待时间”（等待时间可选））")
        expect(result2).toString("请输入行驶公里数与等待时间，期待输入为“行驶公里数 等待时间”（等待时间可选））")
        expect(result3).toString("行驶公里数输入不符合要求，期待输入为“行驶公里数 等待时间”（等待时间可选））")
        expect(result4).toString("行驶公里数输入不符合要求，期待输入为“行驶公里数 等待时间”（等待时间可选））")
        expect(result5).toString("等待时间输入不符合要求，期待输入为“行驶公里数 等待时间”（等待时间可选））")
        expect(result6).toString("等待时间输入不符合要求，期待输入为“行驶公里数 等待时间”（等待时间可选））")
    })

    it("should calculate total price when distance is less than 2 kilometers and waiting time is 0", function() {
        let inputs = "1";
        let result = main(inputs);
        expect(result).toEqual(6);
    });

    it("should calculate total price when distance is greater than 2 kilometers but less than 8 kilometers, and waiting time is 0", function() {
        let inputs = "4";
        let result = main(inputs);
        expect(result).toEqual(8);
    });

    it("should calculate total price when distance is greater than 8 kilometers and waiting time is 0", function() {
        let inputs = "8";
        let kilometers = 8;
        let result = main(inputs);
        expect(result).toEqual(13);
    });

    it("should calculate total price when distance is less than 2 kilometers, and has waiting time", function() {
        let inputs = "1 4";
        let result = main(inputs);
        expect(result).toEqual(7);
    });

    it("should calculate integer total price when distance is less than 2 kilometers, and has waiting time and the total price is a decimal number", function() {
        let inputs = "0.5 4.6";

        let result = main(inputs);
        expect(result).toEqual(7);
    });

    it("should calculate total price when distance is greater than 2 kilometers but less than 8 kilometers, and has waiting time", function() {
        let inputs = "4 4";

        let result = main(inputs);
        expect(result).toEqual(9);
    });

    it("should calculate total price when distance is greater than 8 kilometers, and has waiting time", function() {
        let inputs = "8 4";
        let result = main(inputs);
        expect(result).toEqual(14);
    });

});