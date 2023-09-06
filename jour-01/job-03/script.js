function myIsInString(haystack, needle) {
    // Parcourir la chaîne de caractères haystack
    for (let i = 0; i <= haystack.length - needle.length; i++) {
      let found = true;
  
      // Vérifier si la sous-chaîne needle correspond à la partie de haystack à partir de l'index i
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          found = false;
          break;
        }
      }
  
      // Si nous avons trouvé une correspondance, retourner true
      if (found) {
        return true;
      }
    }
  
    // Si aucune correspondance n'a été trouvée, retourner false
    return false;
  }

console.log(myIsInString("hello world", "llo"));