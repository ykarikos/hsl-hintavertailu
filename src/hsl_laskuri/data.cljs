(ns hsl-laskuri.data)

(def travel-zones
  {:ab "AB, BC, D"
   :abc "ABC"
   :cd "CD"
   :bcd "BCD"
   :abcd "ABCD"})

(def fortnight-price
  {:ab 40.40
   :abc 73
   :cd 66.4
   :bcd 78.4
   :abcd 105.9})

(def month-price
  {:ab 59.7
   :abc 107.5
   :cd 98
   :bcd 115.8
   :abcd 156.4})

(def extra-day-price-until-month
  {:ab 1.21
   :abc 2.16
   :cd 1.98
   :bcd 2.34
   :abcd 3.16})

(def extra-day-price-over-month
  {:ab 1.75
   :abc 3.14
   :cd 2.87
   :bcd 3.39
   :abcd 4.58})

(def single-price
  {:ab 2.8
   :abc 4.6
   :cd 4.2
   :bcd 5.4
   :abcd 6.4})

(def fortnight
  14)

(def month
  30)
