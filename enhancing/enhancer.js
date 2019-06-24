module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  const itemEnhanced = {
    name: item.name,
    durability: item.durability,
    enhancement: item.enhancement + 1
  };
  return itemEnhanced;
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  const itemToRepair = {
    name: item.name,
    durability: 100,
    enhancement: item.enhancement
  };
  return itemToRepair;
}

function get(item) {
  return { ...item };
}
