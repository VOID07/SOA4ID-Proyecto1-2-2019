/*
  SoftwareSerialParser
  (based on SoftwareSerialExample.ino)

  Description: Software to parse serial data from ESP8266 and
  move motors controlled by L298N motor drive.

  Author: Lucio A. Rocha
  Last update: 12/03/2017

*/
#include <SoftwareSerial.h>

#define RX 10
#define TX 11

const int one_Revolution_16 = 3600;
const int plate_motor = 2;
const int EN_plate_motor = 3;
const int motor_1 = 4;
const int EN_motor_1 = 5;
const int motor_2 = 6;
const int EN_motor_2 = 7;

SoftwareSerial mySerial(RX, TX); // RX, TX

void setup() {


  // Open serial communications and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  Serial.println("SoftwareSerialParser Started!");

  // set the data rate for the SoftwareSerial port
  mySerial.begin(9600);
  pinMode(6, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(2, OUTPUT);

  pinMode(7, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(3, OUTPUT);

  digitalWrite(7, LOW);
  digitalWrite(5, LOW);
  digitalWrite(3, LOW);

  digitalWrite(6, LOW);
  digitalWrite(4, LOW);
  digitalWrite(2, LOW);
}

void parseMove(String response) {
  char inst = response.c_str()[8];
  Serial.println("Respuesta");
  Serial.println(inst);
  switch (inst) {
    case 'A':
      Serial.println("caso 1");
      Serial.println("Activando Motor 1");
      delay(100);
      for (int i = 0; i < 3600; i++) {
        digitalWrite(6, HIGH);
        digitalWrite(2, HIGH);
        delayMicroseconds(250);
        digitalWrite(6, LOW);
        digitalWrite(2, LOW);
        delayMicroseconds(250);
      }
      break;
    case 'B':
      Serial.println("caso 2");
      Serial.println("Activando Motor 2");
      delay(100);
      for (int i = 0; i < 3600; i++) {
        digitalWrite(6, HIGH);
        digitalWrite(4, HIGH);
        delayMicroseconds(250);
        digitalWrite(6, LOW);
        digitalWrite(4, LOW);
        delayMicroseconds(250);
      }
      break;
    default:
      break;
  }
}

void loop() { // run over and over
  while (mySerial.available()) {
    String response = "";
    response = mySerial.readStringUntil('\n');
    if (response.length() < 10) {
      parseMove(response);
    }
  }
}
