export function printChristmasTree(height: number): string {
  if (height < 1) throw new Error("Height must be at least 1");

  let tree = "";
  const maxWidth = height * 2 - 1;  // Largura da base da árvore

  // Criar a copa da árvore
  for (let i = 0; i < height; i++) {
    const width = i * 2 + 1;  // Largura das "folhas" da árvore
    const spaces = " ".repeat((maxWidth - width) / 2);  // Centraliza a linha
    tree += spaces + "x".repeat(width) + "\n";
  }

  // Criar o tronco centralizado
  const trunkSpaces = " ".repeat((maxWidth - 1) / 2);
  tree += trunkSpaces + "|" + "\n";

  return tree;
}

// Executar no terminal
if (require.main === module) {
  const height = process.argv[2] ? parseInt(process.argv[2], 10) : 3;
  console.log(printChristmasTree(height));
}
