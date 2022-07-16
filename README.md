# SimplySave
SimplySave is a notes app with support of password-protected notes, encrypted using AES-256 encryption algorithm. All notes are stored as local files, which means you are in total control of your data. You are also free to use any cloud service like Dropbox or Google Drive to backup and sync your notes across devices.

## Preview
![image](https://user-images.githubusercontent.com/2338967/164563586-8721c74e-2d54-49f4-aa83-96e0c378aad5.png)

## Features
* Folders with customizable icons
* Password-protected notes
* Markdown support
* Minimalistic interface
* No network usage

## Download
* [Windows 1.0.3 (.zip)](https://github.com/a-deriabin/SimplySave/releases/download/1.0.3/SimplySave-Windows-1.0.3.zip)

## Technical details
The entire UI is implemented using HTML5, React.JS, Redux. CryptoJS dependency is used for data encryption.

To be distributed as a standalone executable, web application is embedded into "wrapper" applications - for example, for Windows it is a Windows Forms application with WebView inside. Wrapper applications deal with saving/loading data, but cannot decrypt protected notes.
