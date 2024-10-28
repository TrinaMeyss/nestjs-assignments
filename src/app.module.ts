import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssignmentsModule } from './assignments/assignments.module';
import { MathModule } from './math/math.module';

@Module({
  imports: [AssignmentsModule, MathModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
