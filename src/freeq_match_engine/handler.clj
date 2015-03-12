(ns freeq-match-engine.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.middleware.defaults :as ring-defaults :refer [wrap-defaults]]
            [ring.middleware.json :as json :only [wrap-json-response wrap-json-body]]
            [ring.util.response :as resp :only [response]]
            [freeq-match-engine.match-handler :refer :all]))

(defroutes app-routes
  (GET "/" [] "Hello World")
  (GET "/json" [] (resp/response {:abc "abc"}))
  (route/not-found "Not Found"))

(def app
  (-> (routes match-routes app-routes)
      handler/api
      (json/wrap-json-body {:keywords? true})
      json/wrap-json-response
      ))
