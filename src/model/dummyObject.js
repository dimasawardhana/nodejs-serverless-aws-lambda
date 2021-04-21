class DummyObject {
    data = {
        key : 'value'
    }

    produce(n){
        let newData = []
        for(let i=0;i<n;i++){
            newData = newData.concat(this.data)           
        }
        return newData;
    }
    get getData(){
        return this.data
    }
    set setData(value){
        this.data  = value;
    }
}

module.exports = DummyObject;