function myGetElementById(id) {
    var elements = document.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].id === id) {
        return elements[i];
      }
    }
    return null;
  }
  