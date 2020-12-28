const JsonParser = (body) => {
  const items = body[0].items[0].item;

  return items;
};

module.exports = JsonParser;
