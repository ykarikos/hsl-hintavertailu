// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('hsl_laskuri.price_calculator');
goog.require('cljs.core');
goog.require('cljs.core.constants');
hsl_laskuri.price_calculator.fortnight_price = 28.7;
hsl_laskuri.price_calculator.extra_day_price = 1.63;
hsl_laskuri.price_calculator.single_price = 2.2;
hsl_laskuri.price_calculator.fortnight = (14);
hsl_laskuri.price_calculator.round = (function hsl_laskuri$price_calculator$round(n){
return ((function (){var G__5119 = (n * (100));
return Math.round(G__5119);
})() / (100));
});
hsl_laskuri.price_calculator.calc_season_price = (function hsl_laskuri$price_calculator$calc_season_price(days){
if((days <= hsl_laskuri.price_calculator.fortnight)){
return hsl_laskuri.price_calculator.fortnight_price;
} else {
return hsl_laskuri.price_calculator.round((hsl_laskuri.price_calculator.fortnight_price + ((days - hsl_laskuri.price_calculator.fortnight) * hsl_laskuri.price_calculator.extra_day_price)));
}
});
hsl_laskuri.price_calculator.calc_single_price = (function hsl_laskuri$price_calculator$calc_single_price(days){
return hsl_laskuri.price_calculator.round((((2) * days) * hsl_laskuri.price_calculator.single_price));
});
hsl_laskuri.price_calculator.calc_price_data = (function hsl_laskuri$price_calculator$calc_price_data(price_data){
var map__5120 = price_data;
var map__5120__$1 = ((((!((map__5120 == null)))?(((((map__5120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5120):map__5120);
var data = map__5120__$1;
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5120__$1,cljs.core.cst$kw$days);
var travel_days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5120__$1,cljs.core.cst$kw$travel_DASH_days);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.cst$kw$season_DASH_price,hsl_laskuri.price_calculator.calc_season_price(days),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$single_DASH_price,hsl_laskuri.price_calculator.calc_single_price(travel_days)], 0));
});
