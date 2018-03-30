(ns hsl-laskuri.price-calculator)

(def fortnight-price
  28.7)

(def extra-day-price
  1.63)

(def single-price
  2.2)

(def fortnight
  14)

(defn- round [n]
  (/ (Math/round (* n 100)) 100))

(defn- calc-season-price [days]
  (if (<= days fortnight)
    fortnight-price
    (round (+ fortnight-price (* (- days fortnight) extra-day-price)))))

(defn- calc-single-price [days]
  (round (* 2 days single-price)))

(defn calc-price-data [price-data]
  (let [{:keys [days travel-days] :as data} price-data]
    (assoc data
           :season-price (calc-season-price days)
           :single-price (calc-single-price travel-days))))
