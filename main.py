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
    filename = 'result' + str(img.split('/')[1])
    image = cv.imread(img)
    
    faces = face_classifier.detectMultiScale(image, 2, 3)
   
    for (x, y, w, h) in faces:
        cv.imwrite(dir + '/' + filename, image[y:y + h, x:x + w])
        img_rect = cv.rectangle(image, (x, y), (x + w, y + h), (255, 0, 0), 2)
        cv.imshow("Face Detected", img_rect)
        cv.waitKey(0)