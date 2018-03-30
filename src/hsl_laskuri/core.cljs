(ns hsl-laskuri.core
    (:require
      [reagent.core :as r]
      [hsl-laskuri.price-calculator :as c]
      [goog.string.format]))

;; -------------------------
;; Views

(def price-data
  (r/atom {:travel-days 10
           :days 14}))

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
     [:h1 "HSL:n kausi- ja kertalipun hintavertailu"]
     [:div "Voimassaoloaika " (int days) " päivää"
      [slider :days days 14 366]]
     [:div "Edestakaisia matkoja " (int travel-days) " päivänä"
      [slider :travel-days travel-days 1 366]]
     [:div "Kertalippujen hinta: " (format-price season-price) " €"]
     [:div "Yksittäislippujen hinta: " (format-price single-price) " €"]
     [:h2 (if (> single-price season-price)
             "Kausilippu"
             "Kertalippu")
          " on halvempi!"]]))


;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
