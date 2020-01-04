// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('hsl_laskuri.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('hsl_laskuri.data');
goog.require('hsl_laskuri.price_calculator');
goog.require('goog.string.format');
hsl_laskuri.core.price_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$travel_DASH_days,(10),cljs.core.cst$kw$days,(14),cljs.core.cst$kw$ticket_DASH_type,cljs.core.cst$kw$ab], null));
hsl_laskuri.core.slider = (function hsl_laskuri$core$slider(param,value,min,max){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$value,value,cljs.core.cst$kw$min,min,cljs.core.cst$kw$max,max,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null),cljs.core.cst$kw$on_DASH_change,(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hsl_laskuri.core.price_data,cljs.core.assoc,param,e.target.value);
})], null)], null);
});
hsl_laskuri.core.format_price = (function hsl_laskuri$core$format_price(n){
return clojure.string.replace(goog.string.format.call(null,"%.2f",n),".",",");
});
hsl_laskuri.core.home_page = (function hsl_laskuri$core$home_page(){
var map__6303 = hsl_laskuri.price_calculator.calc_price_data(cljs.core.deref(hsl_laskuri.core.price_data));
var map__6303__$1 = (((((!((map__6303 == null))))?(((((map__6303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6303):map__6303);
var travel_days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6303__$1,cljs.core.cst$kw$travel_DASH_days);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6303__$1,cljs.core.cst$kw$days);
var season_price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6303__$1,cljs.core.cst$kw$season_DASH_price);
var single_price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6303__$1,cljs.core.cst$kw$single_DASH_price);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Vy\u00F6hyke: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,((function (map__6303,map__6303__$1,travel_days,days,season_price,single_price){
return (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hsl_laskuri.core.price_data,cljs.core.assoc,cljs.core.cst$kw$ticket_DASH_type,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.target.value));
});})(map__6303,map__6303__$1,travel_days,days,season_price,single_price))
], null),(function (){var iter__4523__auto__ = ((function (map__6303,map__6303__$1,travel_days,days,season_price,single_price){
return (function hsl_laskuri$core$home_page_$_iter__6305(s__6306){
return (new cljs.core.LazySeq(null,((function (map__6303,map__6303__$1,travel_days,days,season_price,single_price){
return (function (){
var s__6306__$1 = s__6306;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__6306__$1);
if(temp__5457__auto__){
var s__6306__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6306__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__6306__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__6308 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__6307 = (0);
while(true){
if((i__6307 < size__4522__auto__)){
var vec__6309 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__6307);
var zone_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6309,(0),null);
var zone_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6309,(1),null);
cljs.core.chunk_append(b__6308,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,zone_key,cljs.core.cst$kw$label,zone_name], null),zone_name], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,zone_key], null)));

var G__6316 = (i__6307 + (1));
i__6307 = G__6316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6308),hsl_laskuri$core$home_page_$_iter__6305(cljs.core.chunk_rest(s__6306__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6308),null);
}
} else {
var vec__6312 = cljs.core.first(s__6306__$2);
var zone_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6312,(0),null);
var zone_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6312,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,zone_key,cljs.core.cst$kw$label,zone_name], null),zone_name], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,zone_key], null)),hsl_laskuri$core$home_page_$_iter__6305(cljs.core.rest(s__6306__$2)));
}
} else {
return null;
}
break;
}
});})(map__6303,map__6303__$1,travel_days,days,season_price,single_price))
,null,null));
});})(map__6303,map__6303__$1,travel_days,days,season_price,single_price))
;
return iter__4523__auto__(hsl_laskuri.data.travel_zones);
})()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Voimassaoloaika ",(days | (0))," p\u00E4iv\u00E4\u00E4",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [hsl_laskuri.core.slider,cljs.core.cst$kw$days,days,(14),(150)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Edestakaisia matkoja ",(travel_days | (0))," p\u00E4iv\u00E4n\u00E4",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [hsl_laskuri.core.slider,cljs.core.cst$kw$travel_DASH_days,travel_days,(1),(150)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Kausilipun hinta: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$price,hsl_laskuri.core.format_price(season_price)," \u20AC"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Yksitt\u00E4islippujen hinta: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$price,hsl_laskuri.core.format_price(single_price)," \u20AC"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,(((single_price > season_price))?"Kausilippu":"Kertalippu")," on ",hsl_laskuri.core.format_price((function (){var G__6315 = (single_price - season_price);
return Math.abs(G__6315);
})()),"\u00A0\u20AC halvempi!"], null)], null);
});
hsl_laskuri.core.mount_root = (function hsl_laskuri$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hsl_laskuri.core.home_page], null),document.getElementById("app"));
});
hsl_laskuri.core.init_BANG_ = (function hsl_laskuri$core$init_BANG_(){
return hsl_laskuri.core.mount_root();
});
