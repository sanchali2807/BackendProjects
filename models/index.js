import sequelize from "../config/database.js";
import addressModal from "./addressModel.js";
import cartModal from "./cartModel.js";
import categoryModal from "./CategoryModel.js";
import couponModal from "./couponModel.js";
import orderModal from "./orderModel.js";
import orderItemModal from "./orderItemModel.js";
import paymentModal from "./paymentModel.js";
import productModal from "./productModal.js";
import productImageModal from "./productImageMode.js";
import reviewModal from "./reviewModel.js";
import UserModal from "./userModel.js";
import wishlistModal from "./wishlistModel.js";
const User=UserModal(sequelize);
const Product=productModal(sequelize);
const Category=categoryModal(sequelize);
const Address=addressModal(sequelize);
const Cart=cartModal(sequelize)
const Coupon=couponModal(sequelize);
const Order=orderModal(sequelize);
const OrderItem=orderItemModal(sequelize);
const Payment=paymentModal(sequelize);
const ProductImage=productImageModal(sequelize);
const Review=reviewModal(sequelize);
const Wishlist=wishlistModal(sequelize);
export {
    User,
    Product,
    Category,
    Address,
    Cart,
    Coupon,
    Order,
    OrderItem,
    Payment,
    ProductImage,
    Review,
    Wishlist
}