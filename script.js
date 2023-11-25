// Az oldal betöltésekor futó kód
window.onload = function() {
    // A letölteni kívánt fájl elérési útja (relatív az aktuális oldalhoz)
    var filePath = '/example.txt';
  
    // Létrehozunk egy láthatatlan "link" elemet
    var link = document.createElement('a');
    link.href = filePath;
  
    // Állítsuk be a letöltendő fájl nevét
    link.download = filePath.split('/').pop();
  
    // Adjuk hozzá a "link" elemet az oldalhoz
    document.body.appendChild(link);
  
    // Kattintsunk a láthatatlan linkre
    link.click();
  
    // Távolítsuk el a linket az oldalról
    document.body.removeChild(link);
  };