export function formatPrice(peso) {
  return (peso / 10).toLocaleString("en-PH", {
    style: "currency",
    currency: "Php"
  });
}

export function formatToppings(arr){
 const joined = arr.join(', ');
 return joined.charAt(0).toUpperCase() + joined.slice(1);
}
