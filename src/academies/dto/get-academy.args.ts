import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class GetAcademyArgs {
  @Field()
  id: string;
}
