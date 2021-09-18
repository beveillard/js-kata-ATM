import {
  withdrawWad,
  withdraw,
} from ".";

describe("Test of withdrawWad", function () {

  it("Should return 1 x 500 bill and rest 50", function () {
    expect(withdrawWad(500, 550)).toEqual(
      {
        wads: [{ billValue: 500, nbBills: 1 }],
        rest: 50,
      }
    );
  });

});

describe("Test of withdraw", function () {

  it("Should return 1 x 500 bill", function () {
    expect(withdraw(500)).toEqual(
      {
        wads:
          [
            { billValue: 500, nbBills: 1 },
            { billValue: 200, nbBills: 0 },
            { billValue: 100, nbBills: 0 },
            { billValue: 50, nbBills: 0 },
            { billValue: 20, nbBills: 0 },
            { billValue: 10, nbBills: 0 },
          ],
        rest: 0
      }
    );
  });

  it("Should return 1 x 10 bill", function () {
    expect(withdraw(10)).toEqual(
      {
        wads:
          [
            { billValue: 500, nbBills: 0 },
            { billValue: 200, nbBills: 0 },
            { billValue: 100, nbBills: 0 },
            { billValue: 50, nbBills: 0 },
            { billValue: 20, nbBills: 0 },
            { billValue: 10, nbBills: 1 },
          ],
        rest: 0
      }
    );
  });

  it("Should return 1 x 20 + 1 x 10 bills", function () {
    expect(withdraw(30)).toEqual(
      {
        wads:
          [
            { billValue: 500, nbBills: 0 },
            { billValue: 200, nbBills: 0 },
            { billValue: 100, nbBills: 0 },
            { billValue: 50, nbBills: 0 },
            { billValue: 20, nbBills: 1 },
            { billValue: 10, nbBills: 1 },
          ],
        rest: 0
      }
    );
  });

  it("Should return 1 x 200 + 1 x 50 + 1 x 20 bills", function () {
    expect(withdraw(270)).toEqual(
      {
        wads:
          [
            { billValue: 500, nbBills: 0 },
            { billValue: 200, nbBills: 1 },
            { billValue: 100, nbBills: 0 },
            { billValue: 50, nbBills: 1 },
            { billValue: 20, nbBills: 1 },
            { billValue: 10, nbBills: 0 },
          ],
        rest: 0
      }
    );
  });

});
