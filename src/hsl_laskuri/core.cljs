(ns hsl-laskuri.core
  (:require
    [reagent.core :as r]
    [hsl-laskuri.data :refer [travel-zones]]
    [hsl-laskuri.price-calculator :as c]
    [goog.string.format]))


;; -------------------------
;; Views

(def price-data
  (r/atom {:travel-days 10
           :days 14
           :ticket-type :ab}))

(defn slider [param value min max]
  [:input {:type "range" :value value :min min :max max
           :style {:width "100%"}
           :on-change (fn [e]
                        (swap! price-data assoc param (.. e -target -value)))}])

(defn format-price [n]
  (clojure.string/replace
    (goog.string.format "%.2f" n)
    "." ","))

(defn home-page []
  (let [{:keys [travel-days days season-price single-price]}
        (c/calc-price-data @price-data)]
    [:div
     [:div
      [:label "Vyöhyke: "
       [:select
        {:on-change
          (fn [e] (swap! price-data assoc :ticket-type
                         (keyword (.. e -target -value))))}
        (for [[zone-key zone-name] travel-zones]
           ^{:key zone-key}
            [:option {:value zone-key
                      :label zone-name}
             zone-name])]]]
     [:div
      [:label "Voimassaoloaika " (int days) " päivää"
       [slider :days days 14 150]]]
     [:div
      [:label "Edestakaisia matkoja " (int travel-days) " päivänä"
       [slider :travel-days travel-days 1 150]]]
     [:div "Kausilipun hinta: "
      [:span.price (format-price season-price) " €"]]
     [:div "Yksittäislippujen hinta: "
      [:span.price (format-price single-price) " €"]]
     [:h2 (if (> single-price season-price)
            "Kausilippu"
            "Kertalippu")
      " on "
      (-> (- single-price season-price)
          Math/abs
          format-price)
      " € halvempi!"]]))


;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
