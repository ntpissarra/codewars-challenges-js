function domainName(url) {
  let splittedUrl;

  if (url[0] === "h") {
    splittedUrl = url.split("//")[1].split(".");
  } else if (url.slice(0, 4) === "www.") {
    splittedUrl = url.split("www.")[1].split(".");
  } else {
    splittedUrl = url.split(".");
  }

  return splittedUrl[0] === "www" ? splittedUrl[1] : splittedUrl[0];
}

console.log(domainName("prmkd80jt8a5k81uk3b.fr/warez/"));
