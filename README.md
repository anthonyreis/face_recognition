# Face Recognition

## Funcionalidade
- Retorna o recorte região da face reconhecida na imagem fornecida.
 
## Como Funciona ?
- Envie um base64 da imagem que se deseja reconhecer a face;
- A API retornará um base64 da região da face reconhecida;

## Exemplo de Request:
```json
  {
	"img": "data:image/png;base64,iVBORw0KGgo....."
  }
```

## Exemplo de Response:
```json
  {
    "data": {
      "status_code": 200,
      "data": "iVBORw0KGgoAAAANSUhEUgAAAFAAAABQ......."
    }
  }
```
## Exemplo de Imagens:
## Imagem Original
![Imagem Original](./old/original_images/image1.png)

## Imagem Recortada
![Recorte da Face](./old/result_images/resultimage1.png)
