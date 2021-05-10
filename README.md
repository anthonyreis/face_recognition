# Face Recognition

## Funcionalidade
- Retorna o recorte região da face reconhecida na imagem fornecida.
 
## Como Funciona ?
- Envie um base64 ou url de uma imagem que se deseja reconhecer a face;
- A API retornará um base64 da região da face reconhecida;

## Exemplo de Request por url:
```json
  {
	  "img": "https://prime.altubots.com/chats/rh/debugger/uploads/7d8ba9c2-4408-d8b0-f508-c1b6828ed6c3/20210317182015998_alt.png"
  }
```

## Exemplo de Request por base64:
```json
  {
	  "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcIAAAFRCAIAAABoiDr/AANoK0lE....."
  }
```

## Exemplo de Response:
```json
  {
    "data": {
      "status_code": 200,
      "data": "iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAAgAElEQVR4AaXBCdCuaVkg5nt7nu......."
    }
  }
```
## Exemplo de Imagens:

## Imagem Original
![Imagem Original](./old/original_images/image1.png)

## Imagem Recortada
![Recorte da Face](./old/result_images/resultimage1.png)
