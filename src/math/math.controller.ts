import { Controller, Get, Param } from '@nestjs/common';

@Controller('math')
export class MathController {

@Get('square/:number')
square(@Param('number') number : string): number {
    const num = parseInt(number);
    const square = num * num 
    return square;
}

@Get(':Year')
CalculateAge(@Param('Year') year: string): string {
    const birthyear = parseInt(year);
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthyear;
    return `Your age is ${age}`;  // Use backticks here
}

}
