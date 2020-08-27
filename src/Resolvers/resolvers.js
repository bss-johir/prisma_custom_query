import {Query} from './Query'
import {searchEvents} from './Query/searchEvents'

export const resolvers = {
    Query: {
        ...Query,
        ...searchEvents
    },
    Mutation: {
    },
  }