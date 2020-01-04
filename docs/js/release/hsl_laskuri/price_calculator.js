// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('hsl_laskuri.price_calculator');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hsl_laskuri.data');
hsl_laskuri.price_calculator.round = (function hsl_laskuri$price_calculator$round(n){
return ((function (){var G__6298 = (n * (100));
return Math.round(G__6298);
})() / (100));
});
hsl_laskuri.price_calculator.calc_season_price = (function hsl_laskuri$price_calculator$calc_season_price(days,ticket_type){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2((ticket_type.cljs$core$IFn$_invoke$arity$1 ? ticket_type.cljs$core$IFn$_invoke$arity$1(hsl_laskuri.data.season_price_data) : ticket_type.call(null,hsl_laskuri.data.season_price_data)),(days - (14)));
});
hsl_laskuri.price_calculator.calc_single_price = (function hsl_laskuri$price_calculator$calc_single_price(days,ticket_type){
return hsl_laskuri.price_calculator.round((((2) * days) * (ticket_type.cljs$core$IFn$_invoke$arity$1 ? ticket_type.cljs$core$IFn$_invoke$arity$1(hsl_laskuri.data.single_price) : ticket_type.call(null,hsl_laskuri.data.single_price))));
});
hsl_laskuri.price_calculator.calc_price_data = (function hsl_laskuri$price_calculator$calc_price_data(price_data){
var map__6299 = price_data;
var map__6299__$1 = (((((!((map__6299 == null))))?(((((map__6299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6299):map__6299);
var data = map__6299__$1;
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6299__$1,cljs.core.cst$kw$days);
var travel_days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6299__$1,cljs.core.cst$kw$travel_DASH_days);
var ticket_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6299__$1,cljs.core.cst$kw$ticket_DASH_type);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.cst$kw$season_DASH_price,hsl_laskuri.price_calculator.calc_season_price(days,ticket_type),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$single_DASH_price,hsl_laskuri.price_calculator.calc_single_price(travel_days,ticket_type)], 0));
});
