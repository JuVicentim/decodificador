function encriptar() {
  let texto = document.getElementById("texto").value;
  let textoCriptografado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  document.getElementById("mensagem").value = textoCriptografado;
  document.getElementById("titulo mensagem").innerText =
    "Mensagem Criptografada";
  document.getElementById("paragrafo").innerText =
    "Seu texto foi criptografado com sucesso!";
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let textoDescriptografado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  document.getElementById("mensagem").value = textoDescriptografado;
  document.getElementById("titulo mensagem").innerText =
    "Mensagem Descriptografada";
  document.getElementById("paragrafo").innerText =
    "Seu texto foi descriptografado com sucesso!";
}

function copiarTexto() {
  let mensagem = document.getElementById("mensagem");
  mensagem.select();
  mensagem.setSelectionRange(0, 99999); // Para dispositivos móveis
  document.execCommand("copy");
  alert("Texto copiado para a área de transferência!");
}
