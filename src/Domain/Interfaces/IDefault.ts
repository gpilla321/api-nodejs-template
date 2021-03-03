export default interface IDefault {
    id: string;
    createdAt: Date;

    validateId(value: string): void;
    validateCreatedAt(value: Date): void;
    isValid(): boolean;
}