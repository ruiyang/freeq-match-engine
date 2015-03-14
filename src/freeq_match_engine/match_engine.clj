(ns freeq-match-engine.match_engine
  (:require [clj-freeq.core :refer :all]))

(defn- find-match-in-candidate [match-func source-name source-item candidate-name candidate-collection]
  (let [source-key (keyword source-name)
        candidate-key (keyword candidate-name)]
    (filter #(match-func {source-key source-item candidate-key %1})
            candidate-collection)))

(defn- get-id [id-name col]
  (let [id-keyword (keyword id-name)]
    (map #(id-keyword %) col)))

(defn run-rules [rule dataset source-name source-id-name candidate-name candidate-id-name]
  (let [match-func (create-filter rule)
        source-key (keyword source-name)
        source-id-key (keyword source-id-name)
        candidate-key (keyword candidate-name)
        source (:source dataset)
        candidate (:candidate dataset)]
    (for [item source]
      {(source-id-key item)
       (get-id source-id-name
               (find-match-in-candidate match-func
                                        source-name
                                        item
                                        candidate-name
                                        candidate))})))
