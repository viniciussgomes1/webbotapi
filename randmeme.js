// Função para buscar arquivos de imagem aleatórios na pasta 'mems'
function getRandomMeme() {
  // URLs das imagens dentro da pasta 'mems'
  const memes = [
    "https://viniciussgomes1.github.io/webbotapi/mems/meme1.jpg",
    "https://viniciussgomes1.github.io/webbotapi/mems/meme2.jpg",
    "https://viniciussgomes1.github.io/webbotapi/mems/meme3.jpg"
  ];

  // Seleciona um meme aleatório
  const randomMeme = memes[Math.floor(Math.random() * memes.length)];

  // Retorna o JSON com a URL do meme aleatório
  const memeData = {
    data: [
      {
        img: randomMeme
      }
    ]
  };

  return memeData;
}

// Exibir o JSON quando o script for acessado
console.log(JSON.stringify(getRandomMeme()));
