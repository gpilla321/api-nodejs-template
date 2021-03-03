"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ExampleResource_1 = __importDefault(require("../Resource/Routes/ExampleResource"));
const ErrorsDefaultResource_1 = __importDefault(require("../Resource/Errors/ErrorsDefaultResource"));
const ExampleService_1 = __importDefault(require("../Service/ExampleService"));
const ExampleController = express_1.default.Router();
const service = new ExampleService_1.default();
ExampleController.post(ExampleResource_1.default.post, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const data = yield service.get(body);
    if (data === null)
        return res.status(400).send(ErrorsDefaultResource_1.default.ERR_SOMETHING_WENT_WRONG);
    return res.send(data);
}));
exports.default = ExampleController;
//# sourceMappingURL=ExampleController.js.map