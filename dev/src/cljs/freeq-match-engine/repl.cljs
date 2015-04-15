(ns freeq-match-engine.repl
  (:require [clojure.browser.repl :as repl]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(.log js/console "abc")
(def names (.getElementsByTagName js/document "body"))
