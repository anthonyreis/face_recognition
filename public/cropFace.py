import cv2 as cv

def faceRecognition():
    
    face_classifier = cv.CascadeClassifier(
        'haar_cascade/haarcascade_frontalface_alt.xml')
  
    image = cv.imread('document.png')

    face = face_classifier.detectMultiScale(image, 2, 3)

    for (x, y, w, h) in face:
        cv.imwrite('resultImage.png', image[y:y + h, x:x + w])
    
def main():
    faceRecognition()
    
if __name__ == "__main__":
    main()