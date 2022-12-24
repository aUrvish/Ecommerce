
const FormatePrice = (props) => {

    return Intl.NumberFormat("en-In", {
        style : "currency",
        currency : "INR",
        maximumFractionDigits : 2,
    }).format(props.price/100)

}

export default FormatePrice;