// import UserModel from '../Modals/UserModel.js';
// import stripe from 'stripe';

// const stripeInstance = stripe("sk_test_51ObHAQSFUNMmDRylrz3YefGhLWiwCz80DekgO7dklS80gAj6QQ6UCyo4Sb6hAMVjqEOm836kcym8vqu4YJG7fdMW00w7gWzPjw");

// export const Stripe = async (req, res, next) => {
//     const { user, price } = req.body;

//     console.log(req.body)

//     const lineItems = [{
//         price_data: {
//             currency: "inr",
//             product_data: {
//                 name: user?.username,
//             },
//             unit_amount: price * 100
//         },
//         quantity: 1
//     }];

//     // try {
//     //     const session = await stripeInstance.checkout.sessions.create({
//     //         line_items: lineItems,
//     //         mode: 'payment',
//     //         payment_method_types: ['card'],
//     //         success_url: 'http://localhost:5173/success=true',
//     //         cancel_url: 'http://localhost:5173/checkout/success=false',
//     //     });
        
//     //     await UserModel.findByIdAndUpdate(user?._id, { $set: { isSub: true } });        
//     //     res.status(201).json(session.id);

//     // } catch (error) {
//     //     res.status(500).json({ message: "user subscription failed" });
//     // }
// };
