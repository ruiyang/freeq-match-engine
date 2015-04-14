(ns freeq-match-engine.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.middleware.defaults :as ring-defaults :refer [wrap-defaults]]
            [ring.middleware.resource :refer :all]
            [ring.middleware.json :as json :only [wrap-json-response wrap-json-body]]
            [ring.util.response :as resp :only [response redirect]]
            [freeq-match-engine.match-handler :refer :all]))

(defroutes app-routes
  (GET "/" []  (resp/redirect "/index.htm"))
  (GET "/json" [] (resp/response {:abc "abc"}))
  (route/not-found "Not Found"))
