

export const processPayment = async (req, res) => {
  res.status(200).json({
        message: "Payment Processed Successfully",
        success: true
    })
};

