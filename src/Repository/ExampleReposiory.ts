import CallCost from "../Domain/ExampleDomain";
import ICallCostRepository from "./Interfaces/IExampleRepository";
import CallCostRequest from "../DTO/Request/ExampleRequest";

export default class CallCostRepository implements ICallCostRepository<CallCost> {
    async get(request: CallCostRequest): Promise<CallCost> {
        throw new Error("Method not implemented")
    }

    list(): Promise<CallCost[]> {
        throw new Error("Method not implemented.");
    }

    insert(item: CallCost): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    update(item: CallCost): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}