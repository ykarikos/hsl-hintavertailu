(ns hsl-laskuri.core
    (:require
      [reagent.core :as r]
      [hsl-laskuri.price-calculator :as c]
      [goog.string.format]))

;; -------------------------
;; Views

(def price-data
  (r/atom {:travel-days 10
           :days 14
           :ticket-type :one-zone}))

(defn slider [param value min max]
  [:input {:type "range" :value value :min min :max max
           :style {:width "100%"}
           :on-change (fn [e]
                        (swap! price-data assoc param (.. e -target -value)))}])

(defn radio [label name value selected-value]
  (let [checked (= value selected-value)]
    [:label label
     [:input {:type "radio"
              :name name
              :checked checked
              :value value
              :on-click
                (fn [e]
                  (when (.. e -target -value) (swap! price-data assoc :ticket-type value)))}]]))

(defn format-price [n]
  (clojure.string/replace
    (goog.string.format "%.2f" n)
    "." ","))

(defn home-page []
  (let [{:keys [travel-days days season-price single-price ticket-type]}
        (c/calc-price-data @price-data)]
    [:div
     [:div "Lipun tyyppi: "
      [radio "Yksi vyöhyke" "type" :one-zone ticket-type]
      " "
      [radio "Seutu" "type" :regional ticket-type]]
     [:div "Voimassaoloaika " (int days) " päivää"
      [slider :days days 14 150]]
     [:div "Edestakaisia matkoja " (int travel-days) " päivänä"
      [slider :travel-days travel-days 1 150]]
     [:div "Kausilipun hinta: "
      [:span.price (format-price season-price) " €"]]
     [:div "Yksittäislippujen hinta: "
      [:span.price (format-price single-price) " €"]]
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
