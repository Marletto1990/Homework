'use strict';
class Options{
	constructor(height='200', width='200', bg='blue', fontSize='10px', textAlign='center'){
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	makeDivs(text, fontFamily){
		let myDiv = document.createElement('div');
		myDiv.innerHTML = text;
		myDiv.fontFamily = fontFamily;
		document.body.appendChild(myDiv);
	}
}

let firstDiv = new Options(300,300,'green','20px','left');

firstDiv.makeDivs('Привет, педики','impact')