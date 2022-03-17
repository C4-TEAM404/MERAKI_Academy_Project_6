//====================================================//Require
const uuid = require("uuid").v4;
const stripe = require("stripe")(
  "sk_test_51KcwscCdUO4dNrLKfv1zIHUmKOOIh4QmUhD8m8CDu6CShFbeqQndcqBUAd33JJv5yEUeHK0gRTh96KTycZouIHew00QCtTBmAs"
);
const connection = require("../database/db");

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
/*  studentId int,
    teacher_Id int,
    courseId int,
    is_deleted TINYINT Default 0,
    FOREIGN Key(studentId) REFERENCES Student(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN Key(teacher_Id) REFERENCES teacher(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN Key(courseId) REFERENCES course(id) ON DELETE CASCADE ON UPDATE CASCADE  */

//====================================================//CreateUser_Course
const CreateUser_Course = (req, res) => {
  const { studentId, teacher_Id, courseId } = req.body;

  const query = `insert into user_courses (studentId, teacher_Id, courseId) Values (?,?,?) `;

  const data = [studentId, teacher_Id, courseId];

  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }
    // result are the data returned by mysql server
    return res.status(200).json({
      success: true,
      massage: `INSERT INTO USER_COURSE STUDANT_ID=${studentId} `,
      result: result,
    });
  });
};
module.exports = { Payment, CreateUser_Course };
