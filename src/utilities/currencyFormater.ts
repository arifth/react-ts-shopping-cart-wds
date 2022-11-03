const FORMATCRC = new Intl.NumberFormat(undefined, {currency:"USD",style:"currency"})


export function currencyFormater( number:number){
  return FORMATCRC.format(number)
}
