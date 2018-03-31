// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('hsl_laskuri.price_calculator');
goog.require('cljs.core');
goog.require('cljs.core.constants');
hsl_laskuri.price_calculator.fortnight_price = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$one_DASH_zone,28.7,cljs.core.cst$kw$regional,55.7], null);
hsl_laskuri.price_calculator.extra_day_price = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$one_DASH_zone,1.63,cljs.core.cst$kw$regional,3.18], null);
hsl_laskuri.price_calculator.single_price = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$one_DASH_zone,2.2,cljs.core.cst$kw$regional,4.2], null);
hsl_laskuri.price_calculator.fortnight = (14);
hsl_laskuri.price_calculator.round = (function hsl_laskuri$price_calculator$round(n){
return ((function (){var G__2298 = (n * (100));
return Math.round(G__2298);
})() / (100));
});
hsl_laskuri.price_calculator.calc_season_price = (function hsl_laskuri$price_calculator$calc_season_price(days,ticket_type){
var f_price = (ticket_type.cljs$core$IFn$_invoke$arity$1 ? ticket_type.cljs$core$IFn$_invoke$arity$1(hsl_laskuri.price_calculator.fortnight_price) : ticket_type.call(null,hsl_laskuri.price_calculator.fortnight_price));
var e_price = (ticket_type.cljs$core$IFn$_invoke$arity$1 ? ticket_type.cljs$core$IFn$_invoke$arity$1(hsl_laskuri.price_calculator.extra_day_price) : ticket_type.call(null,hsl_laskuri.price_calculator.extra_day_price));
if((days <= hsl_laskuri.price_calculator.fortnight)){
return f_price;
} else {
return hsl_laskuri.price_calculator.round((f_price + ((days - hsl_laskuri.price_calculator.fortnight) * e_price)));
}
});
hsl_laskuri.price_calculator.calc_single_price = (function hsl_laskuri$price_calculator$calc_single_price(days,ticket_type){
return hsl_laskuri.price_calculator.round((((2) * days) * (ticket_type.cljs$core$IFn$_invoke$arity$1 ? ticket_type.cljs$core$IFn$_invoke$arity$1(hsl_laskuri.price_calculator.single_price) : ticket_type.call(null,hsl_laskuri.price_calculator.single_price))));
});
hsl_laskuri.price_calculator.calc_price_data = (function hsl_laskuri$price_calculator$calc_price_data(price_data){
var map__2299 = price_data;
var map__2299__$1 = ((((!((map__2299 == null)))?(((((map__2299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2299):map__2299);
var data = map__2299__$1;
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2299__$1,cljs.core.cst$kw$days);
var travel_days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2299__$1,cljs.core.cst$kw$travel_DASH_days);
var ticket_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2299__$1,cljs.core.cst$kw$ticket_DASH_type);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.cst$kw$season_DASH_price,hsl_laskuri.price_calculator.calc_season_price(days,ticket_type),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$single_DASH_price,hsl_laskuri.price_calculator.calc_single_price(travel_days,ticket_type)], 0));
});
