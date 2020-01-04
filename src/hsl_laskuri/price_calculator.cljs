(ns hsl-laskuri.price-calculator
  (:require
   [hsl-laskuri.data :refer
    [season-price-data single-price]]))

(defn- round [n]
  (/ (Math/round (* n 100)) 100))

(defn- calc-season-price [days ticket-type]
  (nth (ticket-type season-price-data) (- days 14)))

(defn- calc-single-price [days ticket-type]
  (round (* 2 days (ticket-type single-price))))

(defn calc-price-data [price-data]
  (let [{:keys [days travel-days ticket-type] :as data} price-data]
    (assoc data
           :season-price (calc-season-price days ticket-type)
           :single-price (calc-single-price travel-days ticket-type))))
