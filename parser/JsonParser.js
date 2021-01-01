const JsonParser = (body) => {
  const items = body.items;
  console.log(items);

  return items;
};

const JsonCandidateParser = (body) => {
  const items = [body.items.item];
  return { item: items };
};
module.exports = {
  JsonParser: JsonParser,
  JsonCandidateParser: JsonCandidateParser,
};
