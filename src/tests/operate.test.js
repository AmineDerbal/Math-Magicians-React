import operate from '../logic/operate';

describe('test All operation of calculator', () => {
  it('addition of two value', () => {
    expect(operate('1', '2', '+')).toBe('3');
    expect(operate('5', '8', '+')).toBe('13');
  });

  it('substraction operations', () => {
    expect(operate('10', '2', '-')).toBe('8');
    expect(operate('5', '8', '-')).toBe('-3');
  });

  it('multiplication operation', () => {
    expect(operate('5', '3', 'x')).toBe('15');
    expect(operate('75', '8', 'x')).toBe('600');
  });

  it('division operations', () => {
    expect(operate('15', '3', '÷')).toBe('5');
    expect(operate('75', '8', '÷')).toBe('9.375');
    expect(operate('75', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('modulo operations', () => {
    expect(operate('15', '3', '%')).toBe('0');
    expect(operate('60', '8', '%')).toBe('4');
    expect(operate('10', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
