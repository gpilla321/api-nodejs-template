
export default class DefaultValidator {
    public isValueHigherThan(value: number, maxLength: number, errorMessage: string): void {
        if (value < maxLength)
            this.throwError(errorMessage);
    }

    public isValueHigherOrEqualThan(value: number, minLength: number, errorMessage: string): void {
        if (value <= minLength)
            this.throwError(errorMessage);
    }

    public isValueLessThan(value: number, minLength: number, errorMessage: string): void {
        if (value > minLength)
            this.throwError(errorMessage);
    }

    public isValueEqualThan(value: number, comparedValue: number, errorMessage: string) {
        if (value === comparedValue)
            this.throwError(errorMessage);
    }

    public isStringNotEmpty(value: string, errorMessage: string): void {
        if (value !== '' || value !== undefined)
            this.throwError(errorMessage);
    }

    public isValueNull(value: any, errorMessage: string): void {


        if (value === null || value === undefined)
            this.throwError(errorMessage);
    }

    public isArrayNotEmpty(value: any[], field: string, message: string, errorMessage: string): void {
        if (value.length === undefined || value.length === 0)
            this.throwError(errorMessage);
    }

    private throwError(errorMessage: string) {
        throw new Error(errorMessage);
    }
}