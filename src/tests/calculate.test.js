import calculate from '../logic/calculate';

describe('check buttons functions', () => {
  it('test AC buttons return an empty object', () => {
    expect(calculate({ total: '55', next: '58', operation: '+' }, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  it('test number button', () => {
    expect(calculate({ total: null, next: null, operation: null }, '5')).toEqual({
      total: null,
      next: '5',
    });
    expect(calculate({ total: null, next: '65', operation: null }, '8')).toEqual({
      total: null,
      next: '658',
    });
    expect(calculate({ total: null, next: '35.45', operation: null }, '8')).toEqual({
      total: null,
      next: '35.458',
    });
  });

  it('test operation button', () => {
    expect(calculate({ total: null, next: '35', operation: null }, '+')).toEqual({
      total: '35',
      next: null,
      operation: '+',
    });
    expect(calculate({ total: '56', next: '45', operation: '+' }, 'X')).toEqual({
      total: '101',
      next: null,
      operation: 'X',
    });
  });

  it('test = button', () => {
    expect(calculate({ total: '85', next: '35', operation: '-' }, '=')).toEqual({
      total: '50',
      next: null,
      operation: null,
    });
    expect(calculate({ total: '35', next: null, operation: 'x' }, '=')).toEqual({});
  });

  it('test . button', () => {
    expect(calculate({ total: '85', next: '35', operation: '-' }, '.')).toEqual({
      total: '85',
      next: '35.',
      operation: '-',
    });
    expect(calculate({ total: null, next: null, operation: null }, '.')).toEqual({
      total: null,
      next: '0.',
      operation: null,
    });
  });

  it('test +/- button', () => {
    expect(calculate({ total: '85', next: '35', operation: '-' }, '+/-')).toEqual({
      total: '85',
      next: '-35',
      operation: '-',
    });
    expect(calculate({ total: '23', next: '-675', operation: 'x' }, '+/-')).toEqual({
      total: '23',
      next: '675',
      operation: 'x',
    });
  });
});
