"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExampleReposiory_1 = __importDefault(require("../Repository/ExampleReposiory"));
const repository = new ExampleReposiory_1.default();
class ExampleService {
    get(value) {
        throw new Error("Method not implemented.");
    }
    list() {
        throw new Error("Method not implemented.");
    }
    insert() {
        throw new Error("Method not implemented.");
    }
    update() {
        throw new Error("Method not implemented.");
    }
    delete() {
        throw new Error("Method not implemented.");
    }
}
exports.default = ExampleService;
//# sourceMappingURL=ExampleService.js.map