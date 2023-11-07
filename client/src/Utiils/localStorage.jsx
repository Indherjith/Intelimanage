const getLocalData=(key)=>{
    if(key){
        const data=JSON.parse(localStorage.getItem(key));
        return data
    }
}
const saveLocalData=(key,value)=>{
    if(key&&value){
        localStorage.setItem(key,JSON.stringify(value))
    }
}

const removetoken=(key)=>{
    if(key){
        localStorage.removeItem(key);
    }
}
export {getLocalData,saveLocalData,removetoken}