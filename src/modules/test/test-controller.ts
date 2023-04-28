import { responseInterceptor } from "../../utils/response-interceptor";
const express = require("express");
const router = express.Router();
const { testCreateDtoValidationRules, testUpdateDtoValidationRules, validate } = require("./dto_validation/test-dto-validation");
const testCreateDto = require("./dto/test-create-dto");
const testUpdateDto = require("./dto/test-update-dto");

const prefix = '/test'

// BODY
router.post(`${prefix}/post`, responseInterceptor, testCreateDtoValidationRules(), validate, (req: any, res: any)=> {
    const testDto = new testCreateDto(req.body);
    res.json({'post': testDto});
});

// PARAMETROS
router.get(`${prefix}/get`, responseInterceptor, (req: any, res: any)=> {
    const { paramA, paramB } = req.query;
    res.json({'paramA': paramA, 'paramB': paramB});
});

router.patch(`${prefix}/patch`, responseInterceptor, testUpdateDtoValidationRules(), validate, (req: any, res: any)=> {
    const testDto = new testUpdateDto(req.body);
    res.json({'patch': testDto});
});

// ID
router.delete(`${prefix}/delete/:id`, responseInterceptor, (req: any, res: any)=> {
    const {id} = req.params;
    res.json({'delete': id});
});

module.exports = router;