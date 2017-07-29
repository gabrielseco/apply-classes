var applyClasses = require('./applyClasses');

describe('Apply classes', function () {
  it('should test the classes utility with one class', function () {
    expect(applyClasses({
      notification: true,
      hidden: false
    })).toBe('notification');
  });
  it('should test the classes utility with zero class', function () {
    expect(applyClasses({
      notification: false
    })).toBe('');
  });

  it('should test the classes utility with two classes', function () {
    expect(applyClasses({
      notification: true,
      hidden: true
    })).toBe('notification hidden');
  });

  it('should not generate spaces between classes', function() {
    expect(applyClasses({
      notification: true,
      display: false,
      hidden: true
    })).toBe('notification hidden');
  });
});