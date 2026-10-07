const PaymentSuccess = ({ paymentId }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-md">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
          ✓
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Payment successful</h1>
        <p className="mt-2 text-gray-600">Your payment has been verified.</p>
        <p className="mt-5 break-all text-sm text-gray-500">
          Payment ID: {paymentId}
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
