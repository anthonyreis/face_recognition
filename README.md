# Face Recognition

## Funcionalidade
- Retorna o recorte região da face reconhecida na imagem fornecida.
 
## Como Funciona ?
- Envie um base64 da imagem que se deseja reconhecer a face;
- A API retornará um base64 da região da face reconhecida;

## Exemplo Request:
```json
  {
	"img": "data:image/png;base64,iVBORw0KGgo....."
  }
```

## Exemplo Response:
```json
  {
    "data": {
      "status_code": 200,
      "data": "iVBORw0KGgoAAAANSUhEUgAAAFAAAABQ......."
    }
  }
```
