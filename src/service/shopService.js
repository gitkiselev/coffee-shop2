import nextId from "react-id-generator";
export default class CoffeeService {
    constructor() {
        this._apiBase = 'http://localhost:3000';
        this.htmlId = nextId();
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

    getAllBestItems = async() => {
        console.log('get all best items')
        const res = await this.getResource('/bestsellers/');
        return res.map(this._transformBestItems);
    }


    getItem = async (id) => {
        const item = await this.getResource(`/coffee/${id}`);
        return this._transformItem(item);
    }
    idGen = () => {
        const res = this.htmlId;
        return res;
    }


    


    

    
    _transformItem = (item) => {
        return {
            name: item.name,
            country: item.country,
            url: item.url,
            price: item.price,
            description: item.description
        }
    }

    _transformBestItems = (item) => {
        return {
            name: item.name,
            url: item.url,
            price: item.price,
        }
    }

    

    
}