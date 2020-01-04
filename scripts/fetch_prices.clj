(ns fetch-prices
  (:require [clojure.data.json :as json]
            [org.httpkit.client :as http]))

(def max-days
  150)

(def ticket-types
  ["ab" "abc" "cd" "bcd" "abcd"])

(defn- get-url [ticket-type days]
  (str "https://www.hsl.fi/ticket-api/tickets/season/adult/" ticket-type
       "?residence=helsinki&usage=personal&days=" days))

(defn- convert-to-float [s]
  (-> s
      (clojure.string/replace "," ".")
      clojure.edn/read-string))

(defn- fetch-price [ticket-type days]
  (let [response (http/get (get-url ticket-type days))
        _ (Thread/sleep 100)]
    (-> @response
        :body
        (json/read-str :key-fn keyword)
        :customizedPrice :price :total
        convert-to-float)))

(defn- round-decimal [d]
  (float (/ (Math/round (* 10 d)) 10)))

(defn- get-prices-for-all-days [ticket-type]
  (vec (map (partial fetch-price ticket-type) (range 14 (inc max-days)))))

(defn fetch-all-price-data []
  (->> ticket-types
       (reduce (fn [prices ticket-type] (assoc prices (keyword ticket-type) (get-prices-for-all-days ticket-type)))
               {})
       (spit "price-data.edn")))