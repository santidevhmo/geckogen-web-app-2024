import CheckoutForm from "../../components/CheckoutForm/CheckoutForm"

const Checkout = ({ params }: { params: { priceId: string } }) => {
  return (
    <div className="pt-28 pb-28">
      <CheckoutForm priceId={params.priceId}/>
    </div>
  )
}

export default Checkout;