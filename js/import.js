// used to import header, contact and footer

document.addEventListener("HTMLImportsLoaded", () => {
  const externHeader = document.getElementsByTagName("link")[4].import;
  const externContact = document.getElementsByTagName("link")[5].import;
  const externFooter = document.getElementsByTagName("link")[6].import;

  const mainHeader = document
    .getElementsByTagName("main")[0]
    .insertAdjacentElement(
      "beforebegin",
      externHeader.getElementsByTagName("header")[0]
    );

  const mainContact = document
    .getElementsByTagName("main")[0]
    .insertAdjacentElement(
      "beforeend",
      externContact.getElementsByTagName("section")[0]
    );

  const mainFooter = document
    .getElementsByTagName("main")[0]
    .insertAdjacentElement(
      "afterend",
      externFooter.getElementsByTagName("footer")[0]
    );
});
