import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Module070Entity {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  computedField?: string;
}
