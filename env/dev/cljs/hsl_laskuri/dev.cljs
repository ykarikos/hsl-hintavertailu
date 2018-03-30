(ns ^:figwheel-no-load hsl-laskuri.dev
  (:require
    [hsl-laskuri.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
