class Storage{
    constructor(){
        this.map = new Map();
    }

    setItem(key, value){
        this.map[key] = value;
    }

    getItem(keyName){
        return this.map[keyName];
    }

    clearAll(){
        this.map = {};
    }

    removeItem(key){
        if(key) {
            delete this.map[key];
        } else {
            this.clear();
        }
    }

    // getStorage(){
    //     return this.memory;
    // }

    length(){
        return Object.keys(this.map).length;
    }

}

const storage = new Storage({
    name : 'komal',
    qualification : 'MCA',
    age : 22
  });
  

console.log(storage);

storage.setItem('name', 'avanger');
console.log(storage);

console.log(storage.getItem('name'))

// console.log("line 49 -->",storage.getStorage());

storage.clearAll();

// console.log(storage.getStorage());

console.log(Storage.length);




