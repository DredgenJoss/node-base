const { body, validationResult } = require("express-validator");

const testCreateDtoValidationRules = () => {
    return [
        body("username")
            .notEmpty()
            .withMessage("El nombre es obligatorio")
            .isLength({ max: 50 })
            .withMessage("El nombre debe tener como máximo 50 caracteres"),

        body("email")
            .notEmpty()
            .withMessage("El email es obligatorio")
            .isEmail()
            .withMessage("El email no es válido")
            .isLength({ max: 50 })
            .withMessage("El email debe tener como máximo 50 caracteres"),

        body("password")
            .notEmpty()
            .withMessage("La contraseña es obligatoria")
            .isLength({ min: 6 })
            .withMessage("La contraseña debe tener al menos 6 caracteres")
            .isLength({ max: 50 })
            .withMessage("La contraseña debe tener como máximo 50 caracteres"),
    ];
};

const testUpdateDtoValidationRules = () => {
    return [
        body("id")
            .notEmpty()
            .withMessage("El id es obligatorio"),

        body("username")
            .notEmpty()
            .withMessage("El nombre es obligatorio")
            .isLength({ max: 50 })
            .withMessage("El nombre debe tener como máximo 50 caracteres"),

        body("email")
            .notEmpty()
            .withMessage("El email es obligatorio")
            .isEmail()
            .withMessage("El email no es válido")
            .isLength({ max: 50 })
            .withMessage("El email debe tener como máximo 50 caracteres"),

        body("password")
            .notEmpty()
            .withMessage("La contraseña es obligatoria")
            .isLength({ min: 6 })
            .withMessage("La contraseña debe tener al menos 6 caracteres")
            .isLength({ max: 50 })
            .withMessage("La contraseña debe tener como máximo 50 caracteres"),
    ];
};


const validate = (req: any, res: any, next: any) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    const extractedErrors = [] as any[];
    errors.array().map((err: { path: any; msg: any; }) => {
        if (!extractedErrors[err.path] && extractedErrors.length >= 1) {
            extractedErrors[err.path] = err.msg;
        } else {
            extractedErrors.push({ [err.path]: err.msg })
        }
        
    });
  
    return res.status(422).json({
      errors: extractedErrors
    });
  };
  
module.exports = {
    testCreateDtoValidationRules,
    testUpdateDtoValidationRules,
    validate
};