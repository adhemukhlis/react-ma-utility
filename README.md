# react-ma-utility

**MA Utility** merupakan sekumpulan fungsi Javascript/ReactJS siap pakai yang dibuat personal oleh [adhemukhlis](http://github.com/adhemukhlis) untuk memudahkan proses *development*.

Kamu bebas menggunakan, menambahkan, ataupun memberi permintaan untuk fungsi tertentu.

***

## Daftar Isi
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
    - [initGlobalUtility](#initglobalutility)  
    - [promiseAll](#promiseall)  
    - [isJsonString](#isjsonstring)  
    - [idrCurrencyFormatter](#idrcurrencyformatter)  
    - [idrCurrencyParser](#idrcurrencyparser)  
    - [setSession](#setsession)  
    - [getSession](#getsession)  
    - [deleteSession](#deletesession)  
    - [clearSession](#clearsession)  
    - [setCookie](#setcookie)  
    - [getCookie](#getcookie)  
    - [cryptoRabbitEncrypt](#cryptorabbitencrypt)  
    - [cryptoRabbitDecrypt](#cryptorabbitdecrypt)  
***

## Installation
```shell
npm install --save react-ma-utility
```

## Usage
```js
import React, { Component } from "react";
import { initGlobalUtility } from "react-ma-utility";
initGlobalUtility({ useDevLog: true, useDevStatus: true });
class App extends Component {
  componentDidMount() {

    /** sama seperti console.log, tetapi tidak akan muncul log setelah proses production / npm run build */
    window.devLog(`Dev Status: ${window.devStatus}`);

  }
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

export default App;
```

Coba jalankan di [Stackblitz](https://stackblitz.com/edit/react-ma-utility-sample?devtoolsheight=33&file=src/App.js)

## API
### initGlobalUtility
`initGlobalUtility()` akan menginisiasi fungsi/variable global yang dapat diakses bebas tanpa perlu adanya import dari per masing masing komponen

```js
// panggil di komponen root index.js
initGlobalUtility({ useDevStatus:true, useDevLog:true });



console.log(window.devStatus); // true jika dalam development
window.devLog('log ini tidak akan muncul setelah production!'); //dapat digunakan untuk melihat log saat develompment
```

Attribute | Description | Value Type 
--------|---------- | ----

useDevLog|serupa dengan console.log() tetapi hanya muncul saat development | Boolean
useDevStatus|variabel Boolean global yang berisi true pada saat development | Boolean
useLocalhostStatus|variabel Boolean global yang berisi true pada saat menggunakan localhost | Boolean

Syntax | Attribute | Type 
--------|---------- | ----
`window.devLog()`|useDevLog| function
`window.devStatus`|useDevStatus | Boolean
`window.localhostStatus`|useLocalhostStatus | Boolean


### promiseAll
`promiseAll()` akan mengeksekusi multiple fungsi secara *asyncronous*

```js
function showLog(){
  console.log('saya disini!');
}
promiseAll({funcList:[this.showLog,this.showLog,this.showLog]});
```
### isJsonString
`isJsonString()` akan mengecek dan mengembalikan nilai `true` jika string merupakan objek yang berwujud string *(stringified JSON)*
```js
const stringifiedJson = '{name:"David",gender:"male",city:"Bekasi"}';
isJsonString(stringifiedJson); //akan return true
```
### idrCurrencyFormatter
```js
idrCurrencyFormatter(64000); //akan return Rp 64000
```
### idrCurrencyParser
```js
idrCurrencyParser('Rp 64000'); //akan return 64000
```
### greeterWord
### setSession
### getSession
### deleteSession
### clearSession
### setCookie
### getCookie
### cryptoRabbitEncrypt
### cryptoRabbitDecrypt