// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('hsl_laskuri.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('hsl_laskuri.price_calculator');
goog.require('goog.string.format');
hsl_laskuri.core.price_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$travel_DASH_days,(10),cljs.core.cst$kw$days,(14)], null));
hsl_laskuri.core.slider = (function hsl_laskuri$core$slider(param,value,min,max){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$value,value,cljs.core.cst$kw$min,min,cljs.core.cst$kw$max,max,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null),cljs.core.cst$kw$on_DASH_change,(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hsl_laskuri.core.price_data,cljs.core.assoc,param,e.target.value);
})], null)], null);
});
hsl_laskuri.core.format_price = (function hsl_laskuri$core$format_price(n){
return clojure.string.replace(goog.string.format("%.2f",n),".",",");
});
hsl_laskuri.core.home_page = (function hsl_laskuri$core$home_page(){
var map__5571 = hsl_laskuri.price_calculator.calc_price_data(cljs.core.deref(hsl_laskuri.core.price_data));
var map__5571__$1 = ((((!((map__5571 == null)))?(((((map__5571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5571):map__5571);
var travel_days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5571__$1,cljs.core.cst$kw$travel_DASH_days);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5571__$1,cljs.core.cst$kw$days);
var season_price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5571__$1,cljs.core.cst$kw$season_DASH_price);
var single_price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5571__$1,cljs.core.cst$kw$single_DASH_price);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"HSL:n kausi- ja kertalipun hintavertailu"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Voimassaoloaika ",(days | (0))," p\u00E4iv\u00E4\u00E4",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [hsl_laskuri.core.slider,cljs.core.cst$kw$days,days,(14),(366)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Edestakaisia matkoja ",(travel_days | (0))," p\u00E4iv\u00E4n\u00E4",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [hsl_laskuri.core.slider,cljs.core.cst$kw$travel_DASH_days,travel_days,(1),(366)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Kertalippujen hinta: ",hsl_laskuri.core.format_price(season_price)," \u20AC"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Yksitt\u00E4islippujen hinta: ",hsl_laskuri.core.format_price(single_price)," \u20AC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,(((single_price > season_price))?"Kausilippu":"Kertalippu")," on halvempi!"], null)], null);
});
hsl_laskuri.core.mount_root = (function hsl_laskuri$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hsl_laskuri.core.home_page], null),document.getElementById("app"));
});
hsl_laskuri.core.init_BANG_ = (function hsl_laskuri$core$init_BANG_(){
return hsl_laskuri.core.mount_root();
});
