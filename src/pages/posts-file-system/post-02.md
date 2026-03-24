---
title: Getting Started with Flutter
date: 2024-08-10
description: Learn how to develop mobile applications with Flutter and Dart.
author: John Smith
image: '/assets/images/post-02.png'
tags: [Flutter, Mobile Development, Dart]
---

# Getting Started with Flutter

Flutter is a UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.

## Installing Flutter

To start developing with Flutter, you first need to install the Flutter SDK on your system. You can follow the installation instructions in the [official Flutter documentation](https://flutter.dev/docs/get-started/install).

```bash
flutter doctor
```

This command will help you verify if you have everything needed to start developing with Flutter.

## Creating a New Project

You can create a new Flutter project using the following command:

```bash
flutter create my_first_app
cd my_first_app
```

This will create a new Flutter project in the `my_first_app` directory.

## Running the Application

To run your Flutter application, you can use the following command:

```bash
flutter run
```

This will compile and run your application on an emulator or connected device. Now you can see your application in action!

## Writing Your First Application

You can edit the `lib/main.dart` file to start writing your Flutter application. Here's an example of a simple counter application.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Flutter Demo'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }
}
```
