class Table{

    constructor(arr){
        this.header = arr[0];
        arr.shift();//remove primeiro elemento do array
        this.rows = arr;
    }

    get RowCount(){
        return this.rows.length;
    }

    get ColumnCount(){
        return this.header.length;
    }
}

module.exports = Table;