/**
 * OrderController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getMyActiveOrders: async function (req, res){
        if(req.query.hasOwnProperty("id")){
            let orderid = req.query.id;
            let data = await Order.findOne({id: orderid}).populate('items').then(
                async result => {
                    if(result && result.hasOwnProperty("items") && result.items.length){
                        return await Promise.all(
                            result.items.map(async item => {
                                item.product = await Product.findOne({id: item.product_id});
                                return item
                            })
                        );
                    }else{
                        return [];
                    }
                }
            )
            res.json(data)
        }else{
            res.json({message:"missing order id"});
        }
    }
};

