const addressModal = (sequilze)=>{
    return sequilze.define('address',{
        addressLine:Datatype.TEXT,
        city:Datatype.STRING,
        state:Datatype.STRING,
        pincode:Datatype.STRING,
        country:Datatype.STRING
    })
}
export default addressModal;