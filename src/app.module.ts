import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';
import { TasksModule } from './tasks/tasks.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategoryModule } from './category/category.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';

@Module({
  imports: [PrismaModule, UsersModule, TasksModule, CategoryModule, UsersModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'files'),
      serveRoot: "/files"
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware)
      // .forRoutes('users', 'tasks'),
      .forRoutes({ path: "*", method: RequestMethod.ALL})
  }
}
