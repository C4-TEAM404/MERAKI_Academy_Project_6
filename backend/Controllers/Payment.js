//====================================================//Require
const uuid = require("uuid").v4;
const stripe = require("stripe")(
  "sk_test_51KcwscCdUO4dNrLKfv1zIHUmKOOIh4QmUhD8m8CDu6CShFbeqQndcqBUAd33JJv5yEUeHK0gRTh96KTycZouIHew00QCtTBmAs"
);

//====================================================//Payment Function
const Payment = async (req, res) => {
  let error, status;

  try {
    const { product, token } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      {
        idempotency_key,
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error btata:", error);
    status = "failure";
  }

  res.json({ error, status });
};

module.exports = { Payment };
