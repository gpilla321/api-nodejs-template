"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DefaultValidator_1 = __importDefault(require("./Validators/DefaultValidator"));
class ExampleDomain {
    constructor() {
        this.defaultValidator = new DefaultValidator_1.default();
    }
    validateId(value) {
        throw new Error("Method not implemented.");
    }
    validateCreatedAt(value) {
        throw new Error("Method not implemented.");
    }
    isValid() {
        throw new Error("Method not implemented.");
    }
}
exports.default = ExampleDomain;
//# sourceMappingURL=ExampleDomain.js.map