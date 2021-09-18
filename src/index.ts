const BILL_VALUES: number[] = [500, 200, 100, 50, 20, 10];

class Wad {
  billValue: number;
  nbBills: number;
}

class Withdrawal {
  wads: Wad[];
  rest: number;
}

export function withdraw(amount: number): Withdrawal {

  function withdrawNextBillValue({ wads: withdrawals, rest }: Withdrawal, billValue: number): Withdrawal {
    const withdrawal: Withdrawal = withdrawWad(billValue, rest);

    return {
      wads: [...withdrawals, ...withdrawal.wads],
      rest: withdrawal.rest,
    };
  }

  return BILL_VALUES.reduce(withdrawNextBillValue, { wads: [], rest: amount });
}

export function withdrawWad(billValue: number, amount: number): Withdrawal {
  const rest: number = amount % billValue;
  const nbBills: number = (amount - rest) / billValue;

  return { wads: [{ billValue: billValue, nbBills }], rest };
}
