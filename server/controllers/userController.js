const getUsers=(req,res)=>{
    res.json([
        {name:'saurabh'},
        {name:'himanshu'}
    ])
}


module.exports ={getUsers};