import IExampleDomain from "./Interfaces/IExampleDomain";
import DefaultValidator from "./Validators/DefaultValidator";

export default class ExampleDomain implements IExampleDomain {
    private defaultValidator = new DefaultValidator();

    id: string;
    createdAt: Date;

    validateId(value: string): void {
        throw new Error("Method not implemented.");
    }
    validateCreatedAt(value: Date): void {
        throw new Error("Method not implemented.");
    }

    isValid(): boolean {
        throw new Error("Method not implemented.");
    }

}