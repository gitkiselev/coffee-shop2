export default class CoffeeService {
    constructor() {
        this._apiBase = 'http://localhost:3000';
        
    }
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }
    getAllItems = async() => {
        const res = await this.getResource('/coffee/');
        return res.map(this._transformItem);
    }

    getAllGoods = async() => {
        const res = await this.getResource('/goods/');
        return res.map(this._transformItem);
    }

    getAllBestItems = async() => {
        console.log('get all best items')
        const res = await this.getResource('/bestsellers/');
        return res.map(this._transformBestItems);
    }

    getItem = async (name) => {
        const res = await this.getResource('/coffee/') 
        return res.map(this._transformItem(name));
    }
    
    _transformItem = (item) => {
        return {
            name: item.name,
            country: item.country,
            url: item.url,
            price: item.price,
            description: item.description,
            id: item.id
        }
    }

    _transformBestItems = (item) => {
        return {
            name: item.name,
            url: item.url,
            price: item.price,
            id: item.id
        }
    }
}