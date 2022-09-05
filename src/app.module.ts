import { ProductsModule } from './products/products.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CartsModule } from './carts/carts.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ProductsModule,
    CartsModule,
    OrdersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'sqlite',
        database:
          configService.get<string>('NODE_ENV') === 'test'
            ? configService.get<string>('DB_TEST_PATH')
            : configService.get<string>('DB_PATH'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
