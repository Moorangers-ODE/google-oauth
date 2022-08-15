"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const port = process.env.SERVER_PORT;
const logger = new common_1.Logger('NestApplication');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['log', 'error', 'warn'],
    });
    await app.listen(port, () => logger.log(`Server Start on port ${port}`));
}
bootstrap();
//# sourceMappingURL=main.js.map