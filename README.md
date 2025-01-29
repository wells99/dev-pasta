# dev-pasta

A ideia principal desse repositório é construir a visualização de uma pasta compartilhada do google drive, podendo modificar o estilo ou integrar em um site já existente.

# Para utilizar em uma pasta compartilhada (publica)

Basta passar o parametro folderId ao chamar o componente GoogleDriveFolder no main.jsx - esse projeto tem uma chave de acesso para teste por tempo limitado

OBS:folderId="Seu folderId é a parte final do link da pasta compartilhada"

# Para utilizar em uma pasta privada (visivel somente ao proprietário)

Alem do parametro folderId também é necessário por sua chave api no parametro
apiKey ao chamar o componente GoogleDriveFolder no main.jsx 

OBS:apiKey="é necessario gerar a sua chave usando o https://console.cloud.google.com/"
