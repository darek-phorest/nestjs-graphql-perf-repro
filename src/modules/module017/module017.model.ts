import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Module017Entity {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  computedField?: string;
}
