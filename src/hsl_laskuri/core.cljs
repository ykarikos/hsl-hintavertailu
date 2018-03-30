(ns hsl-laskuri.core
    (:require
      [reagent.core :as r]))

;; -------------------------
;; Views

(def fortnight-price
  28.7)

(def extra-day-price
  1.63)

(def single-price
  2.2)

(def fortnight
  14)

(def price-data
  (r/atom {:travel-days 10
           :days fortnight
           :season-price fortnight-price}))

(defn round [n]
  (/ (Math/round (* n 100)) 100))

(defn calc-season-price [days]
  (if (<= days fortnight)
    fortnight-price
    (round (+ fortnight-price (* (- days fortnight) extra-day-price)))))

(defn calc-single-price [days]
  (round (* 2 days single-price)))


(defn calc-price-data []
  (let [{:keys [days travel-days] :as data} @price-data]
    (assoc data
           :season-price (calc-season-price days)
           :single-price (calc-single-price travel-days))))

(defn slider [param value min max]
  [:input {:type "range" :value value :min min :max max
           :style {:width "100%"}
           :on-change (fn [e]
                        (swap! price-data assoc param (.. e -target -value)))}])

(defn home-page []
  (let [{:keys [travel-days days season-price single-price]} (calc-price-data)]
    [:div
     [:h1 "HSL:n kausi- ja kertalipun hintavertailu"]
     [:div "Voimassaoloaika " (int days) " päivää"
      [slider :days days 14 366]]
     [:div "Edestakaisia matkoja " (int travel-days) " päivänä"
      [slider :travel-days travel-days 1 366]]
     [:div "Kertalippujen hinta: " season-price " €"]
     [:div "Yksittäislippujen hinta: " single-price " €"]
     [:div.conclusion
           (if (> single-price season-price)
             "Kausilippu"
             "Kertalippu")
           " on halvempi!"]]))


;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
