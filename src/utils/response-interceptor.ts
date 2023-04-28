export function responseInterceptor(req: any, res: any, next: any) {
        const originalJson = res.json;
        var response = {};
        res.json = function(data: any) {
        if (res.statusCode == 422) {
            response = {
                status: "success",
                code: res.statusCode,
                message: data
            };
        } else {
            response = {
                status: "success",
                code: res.statusCode,
                data: data,
                message: null
            };
        }
        
        return originalJson.call(res, response);
        };
        next();
    };