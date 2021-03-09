# react-ma-utility

**MA Utility** merupakan sekumpulan fungsi Javascript/ReactJS siap pakai yang dibuat personal oleh [adhemukhlis](http://github.com/adhemukhlis) untuk memudahkan proses *development*.

Kamu bebas menggunakan, menambahkan, ataupun memberi permintaan untuk fungsi tertentu.

***

## Daftar Isi
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
    - [initGlobalUtility](#initglobalutility)  

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
initGlobalUtility akan membuat fungsi/variable global yang dapat diakses bebas tanpa perlu adanya import dari per masing masing komponen

```js
// panggil di komponen root index.js
initGlobalUtility({ useDevStatus:true, useDevLog:true });



console.log(window.devStatus); // true jika dalam development
window.devLog('log ini tidak akan muncul setelah production!'); //dapat digunakan untuk meligat log saat develompment
```

Attribute | Description | Value Type 
--------|---------- | ----
useDevStatus|variabel Boolean global yang berisi true pada saat development | Boolean
useDevLog|serupa dengan console.log() tetapi hanya muncul saat development | Boolean

Syntax | Attribute | Type 
--------|---------- | ----
`window.devStatus`|useDevStatus | Boolean
`window.devLog()`|useDevLog| function