module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement === 20) {
    const itemMax = {
      name: item.name,
      durability: item.durability,
      enhancement: item.enhancement
    };
    return itemMax;
  } else {
    const itemEnhanced = {
      name: item.name,
      durability: item.durability,
      enhancement: item.enhancement + 1
    };
    return itemEnhanced;
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    const minusFiveDur = {
      name: item.name,
      durability: item.durability - 5,
      enhancement: item.enhancement
    };
    return minusFiveDur;
  } else if (item.enhancement === 15 || 16) {
    const minusTenDur = {
      name: item.name,
      durability: item.durability - 10,
      enhancement: item.enhancement
    };
    return minusTenDur;
  } else {
    const minusBoth = {
      name: item.name,
      durability: item.durability - 10,
      enhancement: item.enhancement - 1
    };
    return minusBoth;
  }
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
