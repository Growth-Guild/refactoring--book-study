import {Province, sampleProvinceData} from "./Province.js";
import {assert, expect} from "chai";

describe('province', function () {
    it('shortfall', function () {
        const asia = new Province(sampleProvinceData());
        assert.equal(asia.shortfall, 5);
    });
});

describe('province', function () {
    it('shortfall', function () {
        const asia = new Province(sampleProvinceData());
        expect(asia.shortfall).equal(5);
    });
});
