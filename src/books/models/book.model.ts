import { Field, ID, ObjectType } from 'type-graphql';
import { Group } from '../../groups/models/group.model';
import { Entry } from './entry.model';
import { Academy } from '../../academies/models/academy.model';

@ObjectType()
export class Book {
  @Field(type => ID)
  id: number;

  @Field({ description: 'Название зачетной книжки' })
  code: string;

  @Field(type => Group, { description: 'Группа, в которой учится студент' })
  group: Group;

  @Field(type => [Entry], { description: 'Записи из зачетки' })
  entries: Entry[];

  groupId: number;

  academy: Academy;
}
