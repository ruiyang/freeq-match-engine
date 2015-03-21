(ns freeq-match-engine.match-handler
  (:require [freeq-match-engine.match_engine :refer :all]
            [compojure.core :refer :all]
            [ring.util.response :as resp :only [response]]))

(defn match [req]
  "run a matching rule against dataset"
  (let [rule (get-in req [:body :rule])
        req-body (:body req)
        source-name (get-in req [:body :source-name])
        source-id-name (get-in req [:body :source-id-name])
        candidate-name (get-in req [:body :candidate-name])
        candidate-id-name (get-in req [:body :candidate-id-name])]
    (resp/response
     {:result
      (run-rules rule
                 req-body
                 source-name
                 source-id-name
                 candidate-name
                 candidate-id-name)})))

(defn parse [req]
  "request body {:rule <rule expression>}, return the parsed AST
   as json string"
  (resp/response (parse-expression (get-in req [:body :rule]))))

(defroutes match-routes
  (POST "/matchit" [req] match)
  (POST "/parse" [req] parse))
