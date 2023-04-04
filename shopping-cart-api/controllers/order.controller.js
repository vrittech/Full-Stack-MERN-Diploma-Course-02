const slugify = require("slugify");
const { Order } = require("../models/order");

const getOrders = async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 5;

    // page  1 - 1 - 5
    // page 2 - 6 -  10
    // page 3 - 11 - 15
    const skipValue = page === 1 ? 0 : page * limit - limit + 1;
    const orderCount = await Order.find().count();
    const orders = await Order.find()
      .limit(limit)
      .skip(skipValue)
      .populate("user")
      .populate("products");
    res.send({
      status: true,
      payload: {
        total: orderCount,
        data: orders,
      },
    });
  } catch (error) {
    res.send(error);
  }
};

const createOrder = async (req, res) => {
  try {
    const order = new Order({
      shippingAddress: req.body.shippingAddress,
      user: req.body.user,
      products: req.body.products,
      orderItems: req.body.orderItems,
      payment: req.body.payment,
    });
    const response = await order.save();
    res.send(response);
  } catch (error) {
    res.send({
      message: error,
    });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const response = await Order.deleteOne({ _id: orderId });
    res.send(response);
  } catch (error) {
    res.send(error);
  }
};

const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const response = await Order.findByIdAndUpdate(
      { _id: orderId },
      {
        shippingAddress: req.body.shippingAddress,
        user: req.body.user,
        products: req.body.products,
        orderItems: req.body.orderItems,
        orderStatus: req.body.orderStatus,
        payment: req.body.payment,
      },
      {
        new: true,
      }
    );
    res.send(response);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getOrders,
  createOrder,
  deleteOrder,
  updateOrder,
};
