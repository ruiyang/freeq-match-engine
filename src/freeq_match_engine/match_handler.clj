(ns freeq-match-engine.match-handler
  (:require [compojure.core :refer :all]
            [ring.util.response :as resp :only [response]]))

(defn match [req]
  "run a matching rule against dataset"
  (let [user (get-in req [:body :user])]
  (resp/response {:def user})))

(defroutes match-routes
  (POST "/matchit" [req] match))
