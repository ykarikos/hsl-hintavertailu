(ns hsl-laskuri.core
    (:require
      [reagent.core :as r]))

;; -------------------------
;; Views

(def fortnight-price
  28.7)

(def extra-day-price
  1.63)

(def fortnight
  14)

(def price-data
  (r/atom {:days fortnight :price fortnight-price}))

(defn round [n]
  (/ (Math/round (* n 100)) 100))

(defn calc-price [days]
  (if (<= days fortnight)
    fortnight-price
    (round (+ fortnight-price (* (- days fortnight) extra-day-price)))))

(defn calc-price-data []
  (let [{:keys [days] :as data} @price-data]
    (assoc data :price (calc-price days))))

(defn slider [param value min max]
  [:input {:type "range" :value value :min min :max max
           :style {:width "100%"}
           :on-change (fn [e]
                        (swap! price-data assoc param (.. e -target -value)))}])

(defn home-page []
  (let [{:keys [days price]} (calc-price-data)]
    [:div
     [:h1 "HSL-hintalaskuri"]
     [:div "Voimassaoloaika " (int days) " päivää"
       [slider :days days 14 366]]
     [:div "Hinta: " price " €"]]))


;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
