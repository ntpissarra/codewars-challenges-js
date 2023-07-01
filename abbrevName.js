function abbrevName(name) {
  const splittedName = name.split(" ");
  let abbreviatedName = [];
  for (let i = 0; i < splittedName.length; i++) {
    abbreviatedName.push(splittedName[i][0].toUpperCase());
  }

  return abbreviatedName.join(".");
}

abbrevName("Nathanael Pissarra");
