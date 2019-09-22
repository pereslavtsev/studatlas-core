import { Args, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { Group } from './models/group.model';
import { GroupsService } from './groups.service';
import { FetchGroupArgs } from './dto/fetch-group.args';
import { FetchGroupsArgs } from './dto/fetch-groups.args';

@Resolver(of => Group)
export class GroupsResolver {
  constructor(private readonly groupsService: GroupsService) {}

  @Query(returns => Group, { name: 'group' })
  fetchSpeciality(@Args() fetchGroupArgs: FetchGroupArgs): Observable<Group> {
    return this.groupsService.fetchById(fetchGroupArgs);
  }

  @Query(returns => [Group], { name: 'groups' })
  fetchSpecialities(
    @Args() fetchGroupsArgs: FetchGroupsArgs,
  ): Observable<Group[]> {
    return this.groupsService.fetchAll(fetchGroupsArgs);
  }
}
