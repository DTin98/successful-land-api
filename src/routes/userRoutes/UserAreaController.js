const User = require("../../models/User.js");
const Area = require("../../models/Area.js");

var getArea = [];

module.exports = {
  addArea: async (req, res) => {
    const idUser = req.decoded._id;
    const idArea = req.body.idArea;
    const userData = await User.findOne({ _id: idUser });
    if (userData.favoriteAreas) {
      userData.favoriteAreas.map((area) => {
        if (area._id === idArea)
          return res.status(400).send({ message: "area da duoc them" });
      });
      const areaData = await Area.findOne({ _id: idArea });
      await User.updateOne(
        { _id: idUser },
        {
          $push: {
            favoriteAreas: areaData,
          },
        }
      );
    }
  },

  deleteArea: (req, res) => {
    var idUser = req.query.idUser;

    var idAreas = req.query.idAreas;

    userModel
      .find({ _id: idUser })
      .then((data) => {
        data[0].dsAreaLike.map((item, index) => {
          if (item == idAreas) {
            data[0].dsAreaLike.splice(index, 1);
          }
        });

        userModel
          .updateOne(
            {
              _id: idUser,
            },
            {
              dsAreaLike: data[0].dsAreaLike,
            }
          )
          .then((data) => {
            if (data.nModified != 0) res.json("xóa thanh cong");
            else res.json("xóa không thanh cong");
          });
      })
      .catch((err) => {
        console.log("loi:", err);
      });
  },

  getArea: (req, res) => {
    var idUser = req.query.idUser;

    userModel
      .find({ _id: idUser })
      .then((data) => {
        data[0].dsAreaLike.map((item) => {
          areaModel.find({ _id: item }).then((data) => {
            getArea.push(data[0]);
          });
        });
      })
      .then((data) => {
        res.json(getArea);
      })
      .catch((err) => {
        console.log("loi:", err);
      });
  },
};
