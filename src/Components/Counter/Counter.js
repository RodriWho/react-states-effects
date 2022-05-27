
// Como criar um componente sem utilizar estados
function Counter(){
    let quantity = 0;

    function upQuantity() {
        quantity = quantity + 1;
        document.getElementById("counter-box").innerHTML = quantity;
        console.log(quantity);
    }

    return(
        <>
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={upQuantity}>Aumentar</button>
        </>
    )
}
export default Counter;
