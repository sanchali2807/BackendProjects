const categotryModel = (sequilize)=>{
    return sequilize.define('category',{
        name : {
            type:Datatype.STRING,
            allownull : false
        }
        
    })
}