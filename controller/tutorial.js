const db = require("../model/index.js")
const Tutorial=db.tutorial
module.exports.getAllTutorials=(req, res)=>{
    Tutorial.find().then(
        result=>{
            res.status(200).send(result)
        }
    ).catch(
        err=>{
            res.status(500).send(err)
        }
    )
}
module.exports.getTutorialByID=(req, res)=>{
    const id=req.params.id
    Tutorial.findById(id).then(
        result=>{
            res.status(200).send(result)
        }
    ).catch(
        err=>{
            res.status(500).send(err)
        }
    )
}
module.exports.createTutorial=(req, res)=>{ //post  in req.body
    const tutorial= new Tutorial({
        title:req.body.title,
        description:req.body.description,
        published:req.body.published
    })
    tutorial.save(tutorial).then(
        result=>{
            res.send(result)
        }
    ).catch(
        err=>{
            res.status(500).send(err)
        }
    )
}
module.exports.deleteAllTutorials=(req, res)=>{
    Tutorial.deleteMany({}).then(
        result=>{
            res.status(200).send(result)
        }
    ).catch(
        err=>{
            res.status(500).send(err)
        }
    )
}
module.exports.deleteTutorialsByID=(req, res)=>{
    const id=req.params.id //either that id exist or that id don't exist
    // if id exist then delete it and if not then throw error as 404 in response
    Tutorial.findByIdAndRemove(id).then(
        result=>{
            if(!result){
                res.status(404).send("Id not found")
            }else{
                res.status(200).send(result)
            }
            
        }
    ).catch(
        err=>{
            res.status(500).send(err)
        }
    )
}
module.exports.updateTutorialByID=(req, res)=>{
    const id=req.params.id 
    Tutorial.findByIdAndUpdate(id, req.body).then(
        result=>{
            res.send(result)
        }
    ).catch(
        err=>{
            res.status(500).send(err)
        }
    )
}
module.exports.updateTitle=(req, res)=>{
    res.send("hi")
}
