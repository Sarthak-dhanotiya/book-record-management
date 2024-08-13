class issuebook{
    _id;
    name;
    genre;
    price;
    publisher;
    issuedby;
    issuedate;
    returndate;



constructor(user){
    this._id=user.issuebook._id;
    this.name=user.issuebook.name;
    this.genre=user.issuebook.genre;
    this.price=user.issuebook.price;
    this.publisher=user.issuebook.publisher;
    this.issuedby=user.issuedby;
    this.issuedate=user.issuedate;
    this.returndate=user.returndate;

}
}


module.exports=issuebook;