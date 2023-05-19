import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, {
    name: 'test',
    description: 'probando el primer resolver',
  })
  helloWorld(): string {
    return 'Hola Mundo';
  }

  @Query(() => Float, {
    name: 'randomNumber',
    description: 'probando segundo resolver',
  })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    name: 'randomNumberFromZero',
    description: 'probando tercer resolver random number from to ...',
  })
  getRandomNumberFromZero(
    @Args('to', { type: () => Int, nullable: true }) to = 6,
  ): number {
    return Math.floor(Math.random() * to);
  }
}
