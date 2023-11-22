import CheckoutForm from "../../components/CheckoutForm/CheckoutForm"

const Checkout = ({ params }: { params: { priceId: string } }) => {
  return (
    <div className="pt-28 pb-28 h-[82rem] lg:h-[72rem]">
      <CheckoutForm priceId={params.priceId}/>
    </div>
  )
}

export default Checkout;