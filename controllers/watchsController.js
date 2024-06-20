const Watchs = require("../models/watchsModel");

class watchsController{
    getWatchList_Api(req, res, next) {
        try{
            return new Promise((resolve, reject) =>{
                Watchs.find({}).then((watchs)=>{
                    if(watchs.length > 0){
                        return resolve(res.status(200).json(watchs));
                    }else{
                        return resolve(res.status(200).json("Không có watchs nào!"));  
                    }
                });
            }).catch((err) => {
                return res.status(err.status || 500).json(err.message || "Lỗi chưa xác định!");
              });
            } catch (err) {
              return res.status(err.status || 500).json(err.message || "Lỗi chưa xác định!");
            }
          }
    getWatchList_Api(req, res, next) {
        try {
            Watchs.findById({ _id: req.params.id })
              .then((watch) => {
                if (watch) {
                  return res.status(200).json(watchs);
                } else {
                  return res.json("Watchs không tồn tại!");
                }
              })
              .catch((err) => {
                return res.status(err.status || 500).json(err.message || "Lỗi chưa xác định!");
              });
          } catch (err) {
            return res.status(err.status || 500).json(err.message || "Lỗi chưa xác định!");
          }
        }

}

module.exports = new watchsController();
