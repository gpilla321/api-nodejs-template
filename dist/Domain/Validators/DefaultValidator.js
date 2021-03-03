"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DefaultValidator {
    isValueHigherThan(value, maxLength, errorMessage) {
        if (value < maxLength)
            this.throwError(errorMessage);
    }
    isValueHigherOrEqualThan(value, minLength, errorMessage) {
        if (value <= minLength)
            this.throwError(errorMessage);
    }
    isValueLessThan(value, minLength, errorMessage) {
        if (value > minLength)
            this.throwError(errorMessage);
    }
    isValueEqualThan(value, comparedValue, errorMessage) {
        if (value === comparedValue)
            this.throwError(errorMessage);
    }
    isStringNotEmpty(value, errorMessage) {
        if (value !== '' || value !== undefined)
            this.throwError(errorMessage);
    }
    isValueNull(value, errorMessage) {
        if (value === null || value === undefined)
            this.throwError(errorMessage);
    }
    isArrayNotEmpty(value, field, message, errorMessage) {
        if (value.length === undefined || value.length === 0)
            this.throwError(errorMessage);
    }
    throwError(errorMessage) {
        throw new Error(errorMessage);
    }
}
exports.default = DefaultValidator;
//# sourceMappingURL=DefaultValidator.js.map