---
title: "🌊 Sea Animals Classifier (Mobile App)"
publishDate: 2024-03-28 00:00:00
#featured: 4
visible: true
img: /assets/work/flutter-classifier.jpg
img_alt: Sea Animals Recognizer
description: |
  🐠 A Flutter mobile app that uses a HuggingFace-hosted model to classify sea animals. 
tags:
  - Flutter
  - Machine Learning
  - Mobile App
  - TensorFlow Lite
  - Hugging Face
  - Dart

---

##### [📁 Check the code on GitHub](https://github.com/Hugo-COLLIN/BUT3-ImageRecognizer-Flutter)

## Overview
The Sea Animals Classifier is a mobile app developed with Flutter that uses a HuggingFace-hosted model to classify sea animals. 
The app allows users to take a picture of a sea animal and get the model's prediction in real-time.

This application is build upon the Dickson Neoh's 
[Rice Diseases](https://dicksonneoh.com/portfolio/bringing_high_quality_image_models_to_mobile) application and uses
Tolga Kurtuluş's [sea-animals-classification](https://huggingface.co/spaces/tolgadev/sea-animals-classification) Huggingface space.

## Goal
The primary goal behind the Sea Animals Classifier was to learn:
- how to build a mobile app using the camera of a physical device;
- how to build upon an existing Flutter application;
- how to integrate Teachable Machine and Hugging Face models in a mobile application.

## Features developed
- Fixed the app to work with the latest version of Flutter and dependencies (it took a long time...).
- Changed the default model used by the app (API request to Hugging Face).
- Drastically improved the UI/UX of the app, by reorganizing the layout and separating the model's prediction to a new screen.
- Adding history of predictions as a new page, with the possibility to see the details of each prediction and to delete them all.
- Changing the icon of the app.

## Challenges Faced
Frustration: 
- It takes a really long time for a Flutter app to compile and run on a physical device.
- The app was not working as expected, and I had to debug it for a long time.

## Skills Acquired

| Skills                       | Details                                                                                                                 |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| Flutter Development          | I had to learn how to build upon an existing Flutter app.                                                  |
| Machine Learning Integration | I learned how to integrate AI models in a mobile app (locally or requesting an API)                                     |
| Problem-solving / Debugging  | I faced numerous challenges during the development process and had to find effective solutions for them.                |
| UI/UX Design                 | I practiced my UI/UX skills by reorganizing the layout of the app and separating the model's prediction to a new screen. |


## Conclusion
As I finally debugged the app and added new features, I'm proud of the final result!
While it's straightforward to develop with Flutter using Dart, it's not easy (I would say annoying) to install Flutter, debug and make the app work as expected.
But I learned a lot about mobile app development and machine learning integration during this project. 
It was also a great opportunity to improve my problem-solving skills and practice my UI/UX design skills.
