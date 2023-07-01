//done
function areYouPlayingBanjo(name) {
  const firstLetter = name.toLowerCase()[0];
  if (firstLetter === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

areYouPlayingBanjo("Raniel");
