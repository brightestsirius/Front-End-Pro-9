import {heroesWrapper} from './script.js';

class Hero{
	constructor(id){
		this.id = id;
		this.image = '../images/superman.png';
		this.info = this.getInfo();
	}

	async getInfo(){
		let request = await fetch('./json/superman.json'),
			json = await request.json();

			this.setInfo(json);
	}

	async setInfo(json){
		
		this.info = {};

		for(let key in json){
			this.info[key] = json[key];
		}

		this.renderInfo();
	}

	renderInfo(){
		let trs = [];

		for(let key in this.info){
			trs.push(`<tr><th>${key}: <td>${Array.isArray(this.info[key]) ? this.info[key].join(', ') : this.info[key]}</td></tr>`);
		}

		trs.unshift(`<tr><td colspan='2'>${this.renderImage()}</td></tr>`);
		heroesWrapper.innerHTML += `<table id=${this.id}>${trs.join('')}</table>`;
	}

	renderImage(){
		return `<img src="./images/${this.image}" alt="${this.name}" width="150">`;
	}

}

export let Superman = new Hero('task-7');