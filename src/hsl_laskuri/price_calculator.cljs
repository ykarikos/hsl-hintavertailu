(ns hsl-laskuri.price-calculator
  (:require
   [hsl-laskuri.data :refer
    [fortnight-price month-price extra-day-price-until-month extra-day-price-over-month single-price fortnight month]]))

(defn- round [n]
  (/ (Math/round (* n 100)) 100))

(defn- calc-season-price [days ticket-type]
  (let [f-price (ticket-type fortnight-price)
        m-price (ticket-type month-price)
        e-price-until-month (ticket-type extra-day-price-until-month)
        e-price-over-month (ticket-type extra-day-price-over-month)]
    (cond
      (<= days fortnight) f-price
      (= days month) m-price

      (< days month)
      (round (+ f-price (* (- days fortnight) e-price-until-month)))

      :else
      (round (+ m-price (* (- days month) e-price-over-month))))))

(defn- calc-single-price [days ticket-type]
  (round (* 2 days (ticket-type single-price))))

(defn calc-price-data [price-data]
  (let [{:keys [days travel-days ticket-type] :as data} price-data]
    (assoc data
           :season-price (calc-season-price days ticket-type)
           :single-price (calc-single-price travel-days ticket-type))))
