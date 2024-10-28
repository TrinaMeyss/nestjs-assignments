import { Controller } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {}

import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  @Get('fibonacci/:n')
  getFibonacci(@Param('n') n: string): { sequence: number[] } {
    const num = parseInt(n, 10);
    const sequence = this.calculateFibonacci(num);
    return { sequence };
  }

  private calculateFibonacci(n: number): number[] {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }

  @Get('prime/:number')
  isPrime(@Param('number') number: string): { isPrime: boolean } {
    const num = parseInt(number, 10);
    return { isPrime: this.checkPrime(num) };
  }

  private checkPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}
