
const { StatusCode } = require("../../utils/constants.js");
const { jsonGenerate } = require("../../utils/helpers.js");
const User = require("../../models/user.model.js");

  const listUser = async (req, res) => {
  
    // const { feeStart, feeEnd ,AStart,AEnd} = req.query;
    try {
      console.clear();

      var page = req.query.page || 1;
      const PAGE_SIZE = req.query.size || 15;
      if (page) {
        page = parseInt(page) || 1;
        if (page < 1) page = 1;
        var skip = (page - 1) * parseInt(PAGE_SIZE);

        // Initialize query with regex matching for flexibility
        const needle = req.query.q;
        let query = {
          store: req.store
        };
        if (needle) {
          const search = new RegExp(needle, "i");
          query = {
            $or: [ 
              { fullName: search },
             {email: search },
             {phone: search }
            ]
          };
        }

        const count = await User.count(query)
        console.log(`
        \x1b[46mTổng Số  = ${count}  \x1b[0;30m
          `);
        const user = await User.find(query)
          .sort({
            createdAt: -1
          })
          .skip(skip)
          .limit(PAGE_SIZE)
          .exec();
        return res.json(
          jsonGenerate(StatusCode.CONTINUE, "Kết Quả Trả Về", {count,user})
        );
      } else {
        return res.json(
          jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY, "Lỗi Truy Vấn", error)
        );
      }
    } catch (error) {
      console.log(error)
      return res.json(
        jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY, "Error", error)
      );
    }
  };
  module.exports = listUser;