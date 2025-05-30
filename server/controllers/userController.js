const getUsers=(req,res)=>{
    res.json([
        {name:'saurabh'},
        {name:'himanshu'},
        {name:"Aadarsh Yadav"}
    ])
}


module.exports ={getUsers};
