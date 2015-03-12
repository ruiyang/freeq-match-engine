(ns freeq-match-engine.match_engine
  (:require [clj-freeq.core :refer :all]))

(defn run-rules [rule dataset]
  (let [match-func (create-filter rule)]
    (match-func dataset)))
