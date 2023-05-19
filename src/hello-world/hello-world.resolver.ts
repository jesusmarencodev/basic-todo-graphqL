import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, {
    name: 'test',
    description: 'probando el primer resolver',
  })
  helloWorld(): string {
    return 'Hola Mundo';
  }

  @Query(() => Number, {
    name: 'randomNumber',
    description: 'probando segundo resolver',
  })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Number, {
    name: 'randomNumberFromZero',
    description: 'probando tercer resolver random number from to ...',
  })
  getRandomNumberFromZero(@Args('to') to: number): number {
    return Math.floor(Math.random() * to);
  }
}
