import express from 'express';
import ExampleResource from '../Resource/Routes/ExampleResource';
import ErrorsDefaultResource from '../Resource/Errors/ErrorsDefaultResource';
import ExampleService from '../Service/ExampleService';
import ExampleRequest from '../DTO/Request/ExampleRequest';

const ExampleController = express.Router();
const service = new ExampleService();

ExampleController.post(ExampleResource.post, async (req: any, res: any) => {
    const { body } = req;

    const data = await service.get(body as ExampleRequest);

    if (data === null)
        return res.status(400).send(ErrorsDefaultResource.ERR_SOMETHING_WENT_WRONG)

    return res.send(data);
});

export default ExampleController;