import {Province, sampleProvinceData} from "./Province.js";
import {assert, expect} from "chai";

describe('province', function () {
    it('shortfall', function () {
        const asia = new Province(sampleProvinceData());
        assert.equal(asia.shortfall, 5);
    });
});

describe('province', function () {
    let asia;
    beforeEach(function() {
        asia = new Province(sampleProvinceData());
    });

    it('shortfall', function () {
        expect(asia.shortfall).equal(5);
    });

    it('profit', function() {
        expect(asia.profit).equal(230);
    });

    it('change production', function() {
        asia.producers[0].production = 20;
        expect(asia.shortfall).equal(-6);
        expect(asia.profit).equal(292);
    });

    it('zero demand', function () { // 수요가 없다.
        asia.demand = 0;
        expect(asia.shortfall).equal(-25);
        expect(asia.profit).equal(0);
    });

    it('negative demand', function () { // 수요가 마이너스다.
        asia.demand = -1;
        expect(asia.shortfall).equal(-26);
        expect(asia.profit).equal(-10);
    });

    it('empty string demand', function () { // 수요 입력란이 비어있다.
        asia.demand = "";
        expect(asia.shortfall).NaN;
        expect(asia.profit).NaN;
    });
});

describe('no producers', function() {   // 생산자가 없는 경우
    let noProducers;
    beforeEach(function () {
        const data = {
            name: "No producers",
            producers: [],
            demand: 30,
            price: 20,
        };
        noProducers = new Province(data);
    });

    it('shortfall', function() {
        expect(noProducers.shortfall).equal(30);
    });

    it('profit', function () {
        expect(noProducers.profit).equal(0);
    });
});
