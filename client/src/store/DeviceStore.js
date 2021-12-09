import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {

    this._types = [
      { id: 1, name: "FoodProcessor"},
      { id: 2, name: "Microvawe"},
      { id: 8, name: "Bosch"}
    ]

    this._brands = [
      { id: 1,  name: "Samsung"},
      { id: 2,  name: "KitchenAid"},
      { id: 3,  name: "Delonghi"},
      { id: 4,  name: "Bosch MV"},
      { id: 6,  name: "Bosch 111 "}
    ]

    this._devices = [
      { id: 1, name: "WC234", price: 259, rating: 1, img: "13997b47-fcfd-4c18-98c8-a75476ce383c.jpg", typeId: 2, brandId: 1 },
      {id: 2,name: "Artisan",price: 349,rating: 2,img: "31fbd9fe-4059-46e4-a092-8870611b8c6f.jpg", typeId: 1, brandId: 2 },
      {id: 3,name: "Artisan new ",price: 349,rating: 3,img: "67635692-2049-40a8-9170-78dea1b1e8d5.jpg", typeId: 1, brandId: 2 },
      {id: 5,name: "385 CFM ",price: 349,rating: 4,img: "51f9d737-4208-47c7-ba73-980cb818ab92.jpg", typeId: 2, brandId: 4 },
      {id: 8,name: "BOSCH CFM ",price: 349,rating: 5,img: "8cbcb2b5-9105-4a73-9c13-533a3c43b0ac.jpg", typeId: 2, brandId: 4 },
    ]

    this._selectedType = {};
    this._selectedBrand = {};

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types
  }

  setBrands(brands) {
    this._brands = brands
  }

  setDevices(devices) {
    this._devices = devices
  }

  setSelectedType(type) {
    this._selectedType = type
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get devices()
  {
    return this._devices
  }

  get selectedType()
  {
    return this._selectedType
  }

  get selectedBrand()
  {
    return this._selectedBrand
  }


}