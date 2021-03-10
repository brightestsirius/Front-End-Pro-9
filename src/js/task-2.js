import {heroesWrapper} from './script.js';

class Pokemon{
	constructor(id){
		this.id = id;
		this.image = '../images/pikachu.svg';
		this.info = this.getInfo();
	}

	async getInfo(){
		let request = await fetch('./json/pikachu.json'),
			json = await request.json();

		this.setInfo(json);
	}

	async setInfo(data){
		this.info = {};
		for(let key in data){
			this.info[key] = data[key];
		}

		this.renderInfo();
	}

	renderInfo(){
		let trs = [];
		for(let key in this.info){
			trs.push(`<tr><th>${key}:</th> <td>${Array.isArray(this.info[key]) ? this.info[key].join(', ') : this.info[key]}</td></tr>`);
		}
		trs.unshift(`<tr><td colspan="2">${this.renderImage()}</td></tr>`);

		heroesWrapper.innerHTML += `<table id=${this.id}>${trs.join('')}</table>`;
	}

	renderImage(){
		return `<img src="./images/${this.image}" alt="${this.name}" width="100">`;
	}
}

export let Pikachu = new Pokemon('task-2');