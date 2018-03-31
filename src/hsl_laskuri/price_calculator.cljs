(ns hsl-laskuri.price-calculator)

(def fortnight-price
  {:one-zone 28.7
   :regional 55.7})

(def extra-day-price
  {:one-zone 1.63
   :regional 3.18})

(def single-price
  {:one-zone 2.2
   :regional 4.2})

(def fortnight
  14)

(defn- round [n]
  (/ (Math/round (* n 100)) 100))

(defn- calc-season-price [days ticket-type]
  (let [f-price (ticket-type fortnight-price)
        e-price (ticket-type extra-day-price)]
    (if (<= days fortnight)
      f-price
      (round (+ f-price (* (- days fortnight) e-price))))))

(defn- calc-single-price [days ticket-type]
  (round (* 2 days (ticket-type single-price))))

(defn calc-price-data [price-data]
  (let [{:keys [days travel-days ticket-type] :as data} price-data]
    (assoc data
           :season-price (calc-season-price days ticket-type)
           :single-price (calc-single-price travel-days ticket-type))))
