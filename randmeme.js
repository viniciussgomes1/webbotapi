// randmeme.js
window.onload = function() {
  // Pasta onde as imagens estão armazenadas
  const folderPath = 'https://viniciussgomes1.github.io/webbotapi/mems/';
  
  // Array com os nomes das imagens (adapte conforme suas imagens)
  const imageNames = [
    'image1.jpg',  // Nome da primeira imagem
    'image2.png',  // Nome da segunda imagem
    'image3.gif',  // Nome da terceira imagem
    // Adicione mais imagens conforme necessário
  ];

  // Função para escolher uma imagem aleatória
  const randomIndex = Math.floor(Math.random() * imageNames.length);
  const randomImage = imageNames[randomIndex];

  // Redireciona para a URL da imagem aleatória
  window.location.href = folderPath + randomImage;
};
