import cv2 as cv
import os

face_classifier = cv.CascadeClassifier('haarcascade_frontalface_alt.xml')

dir = "document_images"

caminhos = [os.path.join(dir, nome) for nome in os.listdir(dir)]
arquivos = [arq for arq in caminhos if os.path.isfile(arq)]
pngs = [arq for arq in arquivos if arq.lower().endswith(".png")]

i = 0

for img in pngs:
    i = i + 1
    filename = 'resultImage' + str(i) + '.jpg'
    image = cv.imread(img)
    image_gray = cv.cvtColor(image, cv.COLOR_BGR2GRAY)
    
    faces = face_classifier.detectMultiScale(image, 1.3, 5)
   
    for (x, y, w, h) in faces:
        cv.imwrite(dir + '/' + filename, image_gray[y:y + h, x:x + w])
        cv.rectangle(image_gray, (x, y), (x + w, y + h), (255, 0, 0), 2)

    #os.remove(img)