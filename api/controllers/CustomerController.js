/**
 * CustomerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    customerfind: async function (req, res){

    
        let data = await Customer.find({})
        console.log(data.length)
        res.json({status: true})
      }
};

