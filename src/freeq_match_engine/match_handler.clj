(ns freeq-match-engine.match-handler
  (:require [freeq-match-engine.match_engine :refer :all]
            [compojure.core :refer :all]
            [ring.util.response :as resp :only [response]]))

(defn match [req]
  "run a matching rule against dataset"
  (let [rule (get-in req [:body :rule])
        data (get-in req [:body :data])]
    (resp/response {:result (run-rules rule data)})))

(defroutes match-routes
  (POST "/matchit" [req] match))
