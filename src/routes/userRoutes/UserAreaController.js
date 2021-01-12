var userModel = require('../../models/user.js')
var areaModel = require('../../models/area.js')

var getArea = [];

module.exports = {
    addArea:  (req, res) =>{
        var idUser = req.query.idUser;
    
        var idAreas = req.query.idAreas;
        
        userModel.find({_id: idUser})
        .then(data =>{
            var temp = 0;
            data[0].dsAreaLike.map((item) =>{
                if(item == idAreas)
                {
                    temp++;
                }
            })
    
                if(temp == 0)
                {
                    areaModel.find({_id: idAreas})
                    .then(data =>{
                        userModel.updateOne({
                        _id: idUser
                        },{
                            $push: { dsAreaLike: idAreas }
                        })
                        .then(data =>{
                            res.json("add thanh cong")
                        })
                    })
                }
                else
                {
                    res.json("da co area trong danh sach")
                }
    
        })
        .catch(err => {
            console.log("loi:", err);
        })
        
    },

    deleteArea: (req, res) =>{
        var idUser = req.query.idUser;
    
        var idAreas = req.query.idAreas;
        
        userModel.find({_id: idUser})
        .then(data =>{
            data[0].dsAreaLike.map((item,index) =>{
                 if(item == idAreas)
                 {
                    data[0].dsAreaLike.splice(index,1);
                 }
            })
            
            userModel.updateOne({
                _id: idUser
                },{
                    dsAreaLike: data[0].dsAreaLike
                })
                .then(data =>{
                    if(data.nModified != 0)
                        res.json("xóa thanh cong")
                    else
                        res.json("xóa không thanh cong")
                })
    
        })
        .catch(err => {
            console.log("loi:", err);
        })
        
    },

    getArea: (req, res) =>{
        var idUser = req.query.idUser;
        
        userModel.find({_id: idUser})
        .then(data =>{
            data[0].dsAreaLike.map((item) =>{
                areaModel.find({_id: item})
                .then(data =>{
                    getArea.push(data[0]);
                })
                
            })
        
        })
        .then(data=>{
            res.json(getArea);
        })
        .catch(err => {
            console.log("loi:", err);
        })
        
    }
};
