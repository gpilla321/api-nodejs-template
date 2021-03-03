
import ExampleDomain from "../Domain/ExampleDomain";
import IExampleService from "./Interfaces/IExampleService";
import ExampleReposiory from "../Repository/ExampleReposiory";
import ExampleResponse from "../DTO/Response/ExampleResponse";

const repository = new ExampleReposiory();

export default class ExampleService implements IExampleService<ExampleResponse> {
    get(value: any): Promise<ExampleResponse> {
        throw new Error("Method not implemented.");
    }
    list(): Promise<ExampleResponse[]> {
        throw new Error("Method not implemented.");
    }
    insert(): Promise<ExampleResponse> {
        throw new Error("Method not implemented.");
    }
    update(): Promise<ExampleResponse> {
        throw new Error("Method not implemented.");
    }
    delete(): Promise<ExampleResponse> {
        throw new Error("Method not implemented.");
    }
}