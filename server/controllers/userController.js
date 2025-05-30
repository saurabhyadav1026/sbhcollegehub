const getUsers=(req,res)=>{
    res.json([
        {name:'saurabh'},
        {name:'himanshu'},
        {name:"Aadarsh"}
    ])
}


module.exports ={getUsers};
