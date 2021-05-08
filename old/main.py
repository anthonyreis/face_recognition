import cv2 as cv
import os

def faceRecognition():
    
    face_classifier = cv.CascadeClassifier(
        'haar_cascade/haarcascade_frontalface_alt.xml')

    dirOrig = "original_images"
    dirResult = "result_images"

    caminhos = [os.path.join(dirOrig, nome) for nome in os.listdir(dirOrig)]
    arquivos = [arq for arq in caminhos if os.path.isfile(arq)]
    pngs = [arq for arq in arquivos if arq.lower().endswith(".png")]

    i = 0
    
    for img in pngs:
        i = i + 1
        filename = 'result' + str(img.split('/')[1])
        image = cv.imread(img)

        faces = face_classifier.detectMultiScale(image, 2, 3)

        for (x, y, w, h) in faces:
            cv.imwrite(dirResult + '/' + filename, image[y:y + h, x:x + w])
            img_rect = cv.rectangle(
                image, (x, y), (x + w, y + h), (255, 0, 0), 2)
            cv.imshow("Face Detected", img_rect)
            cv.waitKey(0)

def main():
    faceRecognition()
    
if __name__ == "__main__":
    main()