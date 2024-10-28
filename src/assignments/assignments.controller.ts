import { Controller, Get, Param } from '@nestjs/common';


@Controller('assignments')
export class AssignmentsController {

@Get ("hello/:name")
greet(@Param('name') name: string): string{
    return `Hello ${name}!`;
    
}

@Get("Welcome")
welcome () {
    return "welcome to nest.js"
}

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



}