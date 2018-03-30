(ns hsl-laskuri.prod
  (:require
    [hsl-laskuri.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
