const testRoutes = require("../modules/test/test-controller.ts");

export class AppMiddleware {
    /**
     * middlewareApp
     */
    public middlewareApp(app: any) {
        /// Middleware
        app.use('/api', 
        // Rutas
        [
            testRoutes
        ]);
    }
}