
const searchEvents = {
 async searchEventsWithText(parent, { searchText }, ctx, info) {
  return ctx.db.query.events({ where: { title_contains: searchText } });
 },
}

module.exports = { searchEvents };