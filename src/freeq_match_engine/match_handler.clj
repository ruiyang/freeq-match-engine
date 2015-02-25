(ns freeq-match-engine.match-handler
  (:require [compojure.core :refer :all]
            [ring.util.response :as resp :only [response]]))

(defn match [req]
  "run a matching rule against dataset"
  (resp/response {:def "haha"}))

(defroutes match-routes
  (GET "/matchit" [req] match))
