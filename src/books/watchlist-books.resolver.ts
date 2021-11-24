import { Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { WatchlistBook } from './models/watchlist-book.model';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../shared/guards/gql-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { Book } from './models/book.model';
import { Academy } from '../academies/models/academy.model';

@Resolver(of => WatchlistBook)
export class WatchlistBooksResolver {

  // @Query(returns => [WatchlistBook], { name: 'watchlist' })
  // @UseGuards(GqlAuthGuard)
  // getWatchlist(@CurrentUser() { sub }: JwtPayload) {
  //   //return this.booksService.getWatchlist(sub);
  // }
  //
  // @ResolveProperty(returns => Academy)
  // @UseGuards(GqlAuthGuard)
  // academy(@Parent() { academyId }: WatchlistBook) {
  //   return this.academiesService.findById(academyId);
  // }
  //
  // @ResolveProperty(returns => Book)
  // @UseGuards(GqlAuthGuard)
  // async book(@Parent() { academyId, bookId }: WatchlistBook) {
  //   const academy = await this.academiesService.findById(academyId);
  //   //return this.booksService.fetchById(bookId, academy);
  // }
}
